package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.dtos.SearchResultData;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/search")
public class ApiSearchController {

    private final ApiSearchService searchService;

    public ApiSearchController(ApiSearchService searchService, PlantService plantService) {
        this.searchService = searchService;
    }

    @GetMapping
    public SearchResultData[] getQueryResults(@RequestParam String query){
        return searchService.getSearchResults(query);
    }
}
