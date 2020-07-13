package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/plants")
@RestController
public class PlantController {

    private final PlantService plantService;


    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping
    public Iterable<Plant> getAllPlantsTest(){
        return plantService.addSomeTestPlants();
    }
}
