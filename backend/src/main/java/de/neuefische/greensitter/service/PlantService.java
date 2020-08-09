package de.neuefische.greensitter.service;

import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import de.neuefische.greensitter.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.Optional;

@Service
public class PlantService {

    private final PlantMongoDb plantDb;
    private final ImageUtils imageUtils;

    @Autowired
    public PlantService(PlantMongoDb plantDb, ImageUtils imageUtils) {
        this.plantDb = plantDb;
        this.imageUtils = imageUtils;
    }

    public Iterable<Plant> listPlants() {
        return plantDb.findAll();
    }

    public Plant addPlant(ChosenPlantDto choiceData, ChoiceFetchData plantData, int wateringStatus) throws IOException {
        Plant newPlant = new Plant();
        newPlant.setNickName(choiceData.getNickName());
        newPlant.setCommonName(plantData.getCommon_name());
        newPlant.setScientificName(plantData.getScientific_name());
        newPlant.setGenus(plantData.getGenus());
        newPlant.setFamilyCommonName(plantData.getFamily_common_name());
        newPlant.setImageUrl(imageUtils.compressAndUploadTitleImageToCloud(plantData.getImage_url(), choiceData.getNickName()));
        newPlant.setImages(imageUtils.compressAndUploadGalleryImagesToCloud(plantData.getImages(), choiceData.getNickName()));
        newPlant.setWateringStatus(wateringStatus);
        plantDb.save(newPlant);
        return newPlant;
    }


    public Optional<Plant> getPlant(String nickName) {
        return plantDb.findById(nickName);
    }

    public void deletePlant(String nickName) throws Exception {
       plantDb.deleteById(nickName);
       imageUtils.deleteImagesFromCloud(nickName);
    }

}



