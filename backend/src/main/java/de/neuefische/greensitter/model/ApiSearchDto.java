package de.neuefische.greensitter.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiSearchDto {

    private String name;
    private String id;
    private String imgUrl;

}
