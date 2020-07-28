package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.db.UserMongoDb;
import de.neuefische.greensitter.model.GreenSitterUser;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.model.dtos.LoginData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

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
        plantDb.save(new Plant("Rosie", "Rosen", "rosa rosea", "genus 1", "rosen family", "https://bs.floristic.org/image/o/400851a79391dbe6f667c66e4bf70299e9921853"));
        plantDb.save(new Plant("Tulpie", "Tulpe", "tulpe tulpea", "genus 2", "tulpen family", "https://bs.floristic.org/image/o/3b03c9b70f8aedc82e89a1047089920ccad6c825"));

        //WHEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Plant[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Plant[].class);


        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        Plant[] plants = response.getBody();
        assertEquals(plants.length, 2);
        assertEquals(plants[0], new Plant("Rosie", "Rosen", "rosa rosea", "genus 1", "rosen family", "https://bs.floristic.org/image/o/400851a79391dbe6f667c66e4bf70299e9921853"));
        assertEquals(plants[1], new Plant("Tulpie", "Tulpe", "tulpe tulpea", "genus 2", "tulpen family", "https://bs.floristic.org/image/o/3b03c9b70f8aedc82e89a1047089920ccad6c825"));

    }

    @Test
    public void addPlantShouldAddPlant() {
        // GIVEN

        String token = loginUser();

        ChosenPlantDto plantDto = new ChosenPlantDto("dumbo", "190185");
        String url = "http://localhost:" + port + "/api/shelve";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<ChosenPlantDto> requestEntity = new HttpEntity<>(plantDto, headers);

        // WHEN
        ResponseEntity<Plant> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Plant.class);

        // THEN
        Plant expectedPlant = new Plant("dumbo", "Didier's tulip", "Tulipa gesneriana", "Tulipa", "Lily family","https://bs.floristic.org/image/o/67cb801e2d4f091d7ae27ad83bc0699207631ead");

        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertNotNull(putResponse.getBody());
        assertEquals(expectedPlant, putResponse.getBody());

        Optional<Plant> byId = plantDb.findById("dumbo");
        assertTrue(byId.isPresent());
        assertEquals(byId.get(), expectedPlant);
    }

}