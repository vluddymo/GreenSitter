package de.neuefische.greensitter.model;

import de.neuefische.greensitter.model.dtos.PlantImages;
import de.neuefische.greensitter.model.dtos.WikiData;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "plants")
public class Plant {

    @Id
    private String id;
    private String plantName;
    private String[] commonNames;
    private WikiData wikiData;
    private String imageUrl;
    private PlantImages[] images;
    private int wateringStatus;

}
