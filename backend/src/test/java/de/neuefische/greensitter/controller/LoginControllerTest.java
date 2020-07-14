package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.db.UserMongoDb;
import de.neuefische.greensitter.model.GreenSitterUser;
import de.neuefische.greensitter.model.LoginData;
import de.neuefische.greensitter.security.JWTUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LoginControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserMongoDb userDb;

    @Autowired
    public JWTUtils jwtUtils;

    @BeforeEach
    public void resetDb() {
        userDb.deleteAll();
    }

    @Test
    public void loginWithValidCredentials() {
        //GIVEN
        GreenSitterUser user = new GreenSitterUser("superUser", encoder.encode("savePassword"), "admin");
        userDb.save(user);

        //WHEN
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("superUser", "savePassword"), String.class);

        //THEN
        assertEquals(tokenResponse.getStatusCode(), HttpStatus.OK);
        assertTrue(jwtUtils.validateToken(tokenResponse.getBody(),"superUser"));
    }

    @Test
    public void loginWithInvalidCredentials() {
        //GIVEN
        GreenSitterUser user = new GreenSitterUser("superUser", encoder.encode("savePassword"), "admin");
        userDb.save(user);

        //WHEN
        String url = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, new LoginData("superUser", "savePasswor"), String.class);

        //THEN
        assertEquals(tokenResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }


}