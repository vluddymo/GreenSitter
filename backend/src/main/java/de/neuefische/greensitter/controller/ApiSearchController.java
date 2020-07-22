package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.PlantData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/search")
public class ApiSearchController {

    private final ApiSearchService searchService;

    public ApiSearchController(ApiSearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public PlantData[] getQueryResults(@RequestParam String query){
        return searchService.getSearchResults(query);
    }
}
