package de.neuefische.greensitter.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import de.neuefische.greensitter.api.dtos.ChoiceFetchData;
import de.neuefische.greensitter.db.PlantMongoDb;
import de.neuefische.greensitter.model.Plant;
import de.neuefische.greensitter.model.dtos.ChosenPlantDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.Optional;

@Service
public class PlantService {

    private final PlantMongoDb plantDb;
    private final String cloudinaryUrl;

    @Autowired
    public PlantService(PlantMongoDb plantDb, @Value("${cloudinary.url}") String cloudinaryUrl) {
        this.plantDb = plantDb;
        this.cloudinaryUrl = cloudinaryUrl;
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
        newPlant.setImageUrl(uploadTitleImageToCloud(plantData.getImage_url(), choiceData.getNickName()));
        newPlant.setImages(plantData.getImages());
        newPlant.setWateringStatus(wateringStatus);
        plantDb.save(newPlant);
        return newPlant;
    }


    public Optional<Plant> getPlant(String nickName) {
        return plantDb.findById(nickName);
    }

    public void deletePlant(String nickName) throws Exception {
       plantDb.deleteById(nickName);
       deleteTitleImageFromCloud(nickName);
    }

    public String uploadTitleImageToCloud(String originalImageUrl, String nickName) throws IOException {

        String[] options = new String [1];
        options[0] = nickName;

        Cloudinary cloudinary = new Cloudinary(cloudinaryUrl);

        return cloudinary.uploader()
                .upload(
                originalImageUrl,
                ObjectUtils.asMap(
                        "tags", options,
                        "transformation", new Transformation()
                                .width(400)
                                .height(400)
                                .gravity("center")
                                .crop("fill")))
                .get("url").toString();
    }

    public void deleteTitleImageFromCloud (String nickName) throws Exception {
        Cloudinary cloudinary = new Cloudinary(cloudinaryUrl);
        cloudinary.api().deleteResourcesByTag(nickName, ObjectUtils.emptyMap());
    }

}



