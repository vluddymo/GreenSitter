package de.neuefische.greensitter.db;

import de.neuefische.greensitter.model.GardenUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GardenUserMongoDb extends PagingAndSortingRepository<GardenUser,String> {
}
