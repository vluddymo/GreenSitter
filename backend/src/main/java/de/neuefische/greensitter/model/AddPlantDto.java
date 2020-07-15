package de.neuefische.greensitter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.Size;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddPlantDto {

    @Size(min = 3, message = "Please use a name with at least three characters")
    private String name;

}
