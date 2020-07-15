package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.db.UserMongoDb;
import de.neuefische.greensitter.model.AddPlantDto;
import de.neuefische.greensitter.model.GreenSitterUser;
import de.neuefische.greensitter.model.LoginData;
import de.neuefische.greensitter.model.Plant;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PlantControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    private PlantMongoDb plantDb;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserMongoDb userDb;

    @BeforeEach
    public void resetDatabase() {
        plantDb.deleteAll();
        userDb.deleteAll();
    }

    private String loginUser() {
        String savePassword = "savePassword";
        GreenSitterUser user = new GreenSitterUser("superUser", encoder.encode(savePassword), "admin");
        userDb.save(user);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("superUser", "savePassword"), String.class);
        return tokenResponse.getBody();
    }

    @Test
    public void getAllPlantsShouldReturnAllPlants() {
        //GIVEN
        String token = loginUser();

        String url = "http://localhost:" + port + "/api/shelve";
        plantDb.save(new Plant("Rosen"));
        plantDb.save(new Plant("Tulpen"));

        //WHEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Plant[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Plant[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        Plant[] plants = response.getBody();
        assertEquals(plants.length, 2);
        assertEquals(plants[0], new Plant("Rosen"));
        assertEquals(plants[1], new Plant("Tulpen"));
    }

    @Test
    public void addIdeaShouldAddIdea() {
        // GIVEN
        String token = loginUser();

        AddPlantDto plantDto = new AddPlantDto("flower");
        String url = "http://localhost:" + port + "/api/shelve";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<AddPlantDto> requestEntity = new HttpEntity<>(plantDto, headers);

        // WHEN
        ResponseEntity<Plant> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Plant.class);

        // THEN
        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertNotNull(putResponse.getBody());
        assertEquals("flower", putResponse.getBody().getName());

        Optional<Plant> byName = plantDb.findById("flower");
        assertTrue(byName.isPresent());
    }
}