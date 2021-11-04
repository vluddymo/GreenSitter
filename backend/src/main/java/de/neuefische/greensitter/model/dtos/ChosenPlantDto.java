package de.neuefische.greensitter.model.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChosenPlantDto {

    private String plantName;
    private String imageUrl;
    private WikiData wikiData;
    private String[] commonNames;
    private PlantImages[] images;
}
