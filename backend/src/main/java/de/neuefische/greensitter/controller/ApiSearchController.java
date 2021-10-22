package de.neuefische.greensitter.controller;

import com.fasterxml.jackson.databind.JsonNode;
import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.dtos.Base64ImageString;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@RestController
@RequestMapping("api/search")
public class ApiSearchController {

    private final ApiSearchService searchService;

    public ApiSearchController(ApiSearchService searchService, PlantService plantService) {
        this.searchService = searchService;
    }

    @PostMapping
    public JsonNode getQueryResults(@RequestBody Base64ImageString imageString) throws IOException {
        return searchService.getSearchResults(imageString.getBase64String());
    }
}
