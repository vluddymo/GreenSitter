package de.neuefische.greensitter.service;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.model.Plant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlantService {

    private final PlantMongoDb plantDb;

    @Autowired
    public PlantService(PlantMongoDb plantDb) {
        this.plantDb = plantDb;
    }

    public Iterable<Plant> listPlants() {
        return plantDb.findAll();
    }

    public Plant addPlant(Plant newPlant){
        plantDb.save(newPlant);
        return newPlant;
    }
}