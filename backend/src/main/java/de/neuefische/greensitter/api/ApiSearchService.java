package de.neuefische.greensitter.api;

import com.fasterxml.jackson.databind.JsonNode;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.api.dtos.SearchResultData;
import de.neuefische.greensitter.api.dtos.TrefleApiQueryDto;
import de.neuefische.greensitter.api.dtos.TrefleChoiceFetchDto;
import de.neuefische.greensitter.model.dtos.PlantImages;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiSearchService {

    @Value("${api.auth.token}")
    private String token;

    public SearchResultData[] getSearchResults(String query) {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://trefle.io/api/v1/plants/search?token=" + token + "&q=" + query;

        ResponseEntity<TrefleApiQueryDto> responseEntity = restTemplate.getForEntity(url, TrefleApiQueryDto.class);

        TrefleApiQueryDto queryData = responseEntity.getBody();

        return queryData.getData();
    }

    public ChoiceFetchData getChoiceFromApi(String choiceId) {

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://trefle.io/api/v1/species/" + choiceId + "?token=" + token;

        ResponseEntity<TrefleChoiceFetchDto> responseEntity = restTemplate.getForEntity(url, TrefleChoiceFetchDto.class);

        TrefleChoiceFetchDto queryData = responseEntity.getBody();

        return queryData.getData();
    }


}

