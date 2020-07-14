package de.neuefische.greensitter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.Size;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddPlantDto {



    @Size(min = 5, message = "Please tell me what kind of plant you want to add to your shelve")
    private String name;

}
