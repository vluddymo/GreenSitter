package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("api/shelve")
@RestController
public class PlantController {

    private final PlantService plantService;
    private final ApiSearchService apiSearchService;


    public PlantController(PlantService plantService, ApiSearchService apiSearchService) {
        this.plantService = plantService;
        this.apiSearchService = apiSearchService;
    }

    @GetMapping
    public Iterable<Plant> getAllPlants() {
        return plantService.listPlants();
    }

    @PutMapping
    public Plant addPlantToShelve(@RequestBody ChosenPlantDto choiceData) {
        ChoiceFetchData plantData = apiSearchService.getChoiceFromApi(choiceData.getChoiceId());
        Plant plant = new Plant();
        plant.setNickName(choiceData.getNickName());
        plant.setCommonName(plantData.getCommon_name());
        plant.setScientificName(plantData.getScientific_name());
        plant.setGenus(plantData.getGenus());
        plant.setFamilyCommonName(plantData.getFamily_common_name());
        plant.setImageUrl(plantData.getImage_url());
        return plantService.addPlant(plant);
    }
}

