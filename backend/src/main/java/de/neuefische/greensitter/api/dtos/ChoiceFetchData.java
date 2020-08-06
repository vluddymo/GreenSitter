package de.neuefische.greensitter.api.dtos;

import de.neuefische.greensitter.model.dtos.PlantImages;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChoiceFetchData {

    private String common_name;
    private String scientific_name;
    private String genus;
    private String family_common_name;
    private String image_url;
    private PlantImages images;

}
