package de.neuefische.greensitter.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiSearchService {

    @Value("${api.auth.token}")
    String token;

    public PlantData[] getSearchResults(String query){

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://trefle.io/api/v1/plants/search?token="+token+"&q="+ query;

        ResponseEntity<TrefleApiQueryResults> responseEntity = restTemplate.getForEntity(url, TrefleApiQueryResults.class);

        TrefleApiQueryResults queryData = responseEntity.getBody();

        if (queryData.getData().length >0) {
            System.out.println(queryData);
            return queryData.getData();

        }
        throw new IllegalStateException("No data form covid api");
    }

}
