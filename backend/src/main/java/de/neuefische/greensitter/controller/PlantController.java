package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.api.ApiSearchService;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.service.PlantService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

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

    @GetMapping("{nickName}")
    public Plant getPlantByNickname(@PathVariable String nickName) {
        Optional<Plant> plantOptional = plantService.getIdea(nickName);
        if (plantOptional.isPresent()) {
            return plantOptional.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "I'm sorry, you don't have a plant with the nickname " + nickName + " yet");
    }

}