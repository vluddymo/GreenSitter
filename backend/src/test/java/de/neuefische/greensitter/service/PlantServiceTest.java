package de.neuefische.greensitter.service;

import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.Plant;
import org.junit.jupiter.api.Test;

import java.util.Collection;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PlantServiceTest {

    @Test
    public void listPlantsShouldReturnAllPlants() {
        //GIVEN
        PlantMongoDb plantDb = mock(PlantMongoDb.class);

        when(plantDb.findAll()).thenReturn(List.of(
                new Plant("Rosen"),
                new Plant("Tulpen"),
                new Plant("Veilchen"),
                new Plant("Efeu")
        ));

        PlantService plantService = new PlantService(plantDb);


        //WHEN
        Collection<Plant> listedPlants = (Collection<Plant>) plantService.listPlants();

        //THEN
        assertEquals(4, listedPlants.size());
        assertTrue(listedPlants.contains(new Plant("Rosen")));
        assertTrue(listedPlants.contains(new Plant("Tulpen")));
        assertTrue(listedPlants.contains(new Plant("Veilchen")));
        assertTrue(listedPlants.contains(new Plant("Efeu")));

    }

}