package de.neuefische.greensitter.db;

import de.neuefische.greensitter.model.Plant;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PlantMongoDb extends PagingAndSortingRepository<Plant,String> {
}
