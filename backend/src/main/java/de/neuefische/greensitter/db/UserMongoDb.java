package de.neuefische.greensitter.db;

import de.neuefische.greensitter.model.GreenSitterUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserMongoDb extends PagingAndSortingRepository<GreenSitterUser,String> {
}
