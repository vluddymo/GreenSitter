package de.neuefische.greensitter.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiSearchService {

    @Value("${api.auth.token}")
    private String token;

    public PlantData[] getSearchResults(String query){

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://trefle.io/api/v1/plants/search?token="+token+"&q="+query;

        ResponseEntity<TrefleApiQueryResults> responseEntity = restTemplate.getForEntity(url, TrefleApiQueryResults.class);

        TrefleApiQueryResults queryData = responseEntity.getBody();

        return queryData.getData();
    }

}

