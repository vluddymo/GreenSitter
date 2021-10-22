package de.neuefische.greensitter.api;

import com.fasterxml.jackson.databind.JsonNode;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.api.dtos.TrefleChoiceFetchDto;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class ApiSearchService {

    @Value("${api.auth.token}")
    private String token;

    public JsonNode getSearchResults(String imageString) {

        RestTemplate restTemplate = new RestTemplate();
        JSONObject body = new JSONObject();

        // add Api-Key
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", "application/json");
        header.add("Api-Key", token);

        // add Base64ImageString
        JSONArray images = new JSONArray();
        images.add(imageString);
        body.put("images", images);

        // add Modifiers
        JSONArray modifiers = new JSONArray();
        modifiers.add("similar_images");
        body.put("modifiers", modifiers);

        // add language
        body.put("plant_language", "de");

        // add details
        JSONArray plantDetails = new JSONArray();
        plantDetails.add("common_names");
        plantDetails.add("url");
        plantDetails.add("wiki_description");
        body.put("plant_details", plantDetails);


        String url = "https://api.plant.id/v2/identify";

        HttpEntity<?> httpEntity = new HttpEntity<Object>(body, header);
        ResponseEntity<JsonNode> responseEntity = restTemplate.exchange(url, HttpMethod.POST, httpEntity, JsonNode.class);

        return responseEntity.getBody();
    }

    public ChoiceFetchData getChoiceFromApi(String choiceId) {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://trefle.io/api/v1/species/" + choiceId + "?token=" + token;

        ResponseEntity<TrefleChoiceFetchDto> responseEntity = restTemplate.getForEntity(url, TrefleChoiceFetchDto.class);

        TrefleChoiceFetchDto queryData = responseEntity.getBody();

        return queryData.getData();
    }


}

