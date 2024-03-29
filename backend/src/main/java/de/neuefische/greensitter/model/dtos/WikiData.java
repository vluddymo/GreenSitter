package de.neuefische.greensitter.model.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WikiData {

    private String wikiLink;
    private String wikiDescription;
}
