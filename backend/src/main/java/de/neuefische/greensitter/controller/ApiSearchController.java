package de.neuefische.greensitter.controller;

import de.neuefische.greensitter.model.ApiSearchDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/search")
public class ApiSearchController {

    @GetMapping
    public List<ApiSearchDto> getQueryResults(@RequestParam String query){
        return List.of(new ApiSearchDto("avocado", "234", "https://bs.floristic.org/image/o/b4e83f95dce979319ad70321a9023400d7bf5f48"),
                new ApiSearchDto("sonnenblume", "6769", "https://bs.floristic.org/image/o/bdf5d158be59a881efcf3498a4455692bbf29293"));

    }
}
