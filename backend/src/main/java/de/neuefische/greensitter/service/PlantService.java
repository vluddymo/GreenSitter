package de.neuefische.greensitter.service;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.Plant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlantService {

    private final PlantMongoDb plantDb;

    @Autowired
    public PlantService(PlantMongoDb plantDb) {
        this.plantDb = plantDb;
    }

    public Optional<Plant> getPlant(String id) {
        return plantDb.findById(id);
    }

    public Iterable<Plant> listPlants() {
        return plantDb.findAll();
    }
}