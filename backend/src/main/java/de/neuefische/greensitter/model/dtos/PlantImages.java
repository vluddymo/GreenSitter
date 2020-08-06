package de.neuefische.greensitter.model.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlantImages {

    private PlantImagesData[] flower;
    private PlantImagesData[] leaf;
    private PlantImagesData[] habit;
    private PlantImagesData[] fruit;
    private PlantImagesData[] bark;
    private PlantImagesData[] other;
}
