package de.neuefische.greensitter.model.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlantImagesData {

    private String id;
    private String image_url;
    private String copyright;

}
