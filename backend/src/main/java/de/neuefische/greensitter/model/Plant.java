package de.neuefische.greensitter.model;

import de.neuefische.greensitter.api.dtos.ImagesDto;
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
    private String nickName;
    private String commonName;
    private String scientificName;
    private String genus;
    private String familyCommonName;
    private String imageUrl;





}
