package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.service.DataService;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.io.IOException;
import java.util.Optional;

@RequestMapping("api/shelve")
@RestController
public class PlantController {

    private final PlantService plantService;
    private final ApiSearchService apiSearchService;
    private final DataService dataService;


    public PlantController(PlantService plantService, ApiSearchService apiSearchService, DataService dataService) {
        this.plantService = plantService;
        this.apiSearchService = apiSearchService;
        this.dataService = dataService;
    }


    @GetMapping
    public Iterable<Plant> getAllPlants() {
        return plantService.listPlants();
    }


    @PutMapping
    public Plant addPlantToShelve(@RequestBody ChosenPlantDto choiceData){
        int wateringStatus = dataService.mockSensorData();
        return plantService.addPlant(choiceData, wateringStatus);
    }

    @GetMapping("{id}")
    public Plant getPlantById(@PathVariable String id) {
        Optional<Plant> plantOptional = plantService.getPlant(id);
        if (plantOptional.isPresent()) {
            return plantOptional.get();
        }
        else {
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND, "I'm sorry, you don't have a plant with the id " + id + " yet");
        }
    }

    @DeleteMapping("{id}")
    public void deletePlantByNickname(@PathVariable String id){
        plantService.deletePlant(id);
    }
}