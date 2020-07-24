package de.neuefische.greensitter.api.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchResultData {

    private String id;
    private String common_name;
    private String scientific_name;
    private String genus;
    private String family_common_name;
    private String image_url;
}
