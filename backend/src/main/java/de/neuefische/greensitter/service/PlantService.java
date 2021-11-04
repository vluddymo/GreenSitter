package de.neuefische.greensitter.service;

import com.fasterxml.jackson.databind.JsonNode;
import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;


@Service
public class PlantService {

    private final PlantMongoDb plantDb;
    private final ImageUtils imageUtils;

    @Autowired
    public PlantService(PlantMongoDb plantDb, ImageUtils imageUtils) {
        this.plantDb = plantDb;
        this.imageUtils = imageUtils;
    }

    public Iterable<Plant> listPlants() {
        return plantDb.findAll();
    }

    public Plant addPlant(ChosenPlantDto choiceData, int wateringStatus){
        Plant newPlant = new Plant();
        newPlant.setPlantName(choiceData.getPlantName());
        newPlant.setImageUrl(choiceData.getImageUrl());
        newPlant.setWikiData(choiceData.getWikiData());
        newPlant.setCommonNames(choiceData.getCommonNames());
        newPlant.setImages(choiceData.getImages());
        newPlant.setId(UUID.randomUUID().toString());
        newPlant.setWateringStatus(wateringStatus);
        plantDb.save(newPlant);
        return newPlant;
    }


    public Optional<Plant> getPlant(String id) {
        return plantDb.findById(id);
    }

    public void deletePlant(String id){
       plantDb.deleteById(id);
    }

}



