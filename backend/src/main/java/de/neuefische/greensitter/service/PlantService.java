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

    public Iterable<Plant> addSomeTestPlants() {
        Plant plant1 = new Plant("Avocado");
        Plant plant2 = new Plant("Petersilie");
        Plant plant3 = new Plant("Sonnenblume");
        Plant plant4 = new Plant("Thymian");
        plantDb.deleteAll();
        plantDb.save(plant1);
        plantDb.save(plant2);
        plantDb.save(plant3);
        plantDb.save(plant4);
        return plantDb.findAll();
    }
}