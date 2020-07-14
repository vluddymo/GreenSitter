package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.model.AddPlantDto;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("api/shelve")
@RestController
public class PlantController {

    private final PlantService plantService;


    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping
    public Iterable<Plant> getAllPlants() {
        return plantService.listPlants();
    }

    @PutMapping
    public Plant addPlantToShelve(@RequestBody @Valid AddPlantDto data) {
        return plantService.addPlant(data.getName());
    }
}

