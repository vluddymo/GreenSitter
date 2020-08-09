package de.neuefische.greensitter.utils;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import de.neuefische.greensitter.model.dtos.PlantImages;
import de.neuefische.greensitter.model.dtos.PlantImagesData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;

@Service
public class ImageUtils {

    @Value("${cloudinary.url}")
    private String cloudinaryUrl;

    public String compressAndUploadTitleImageToCloud(String originalImageUrl, String nickName) throws IOException {

        String[] options = new String[1];
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


    public PlantImages compressAndUploadGalleryImagesToCloud(PlantImages originalImages, String nickName){

        PlantImagesData[] flower = originalImages.getFlower();
       /* PlantImagesData[] leaf = originalImages.getFlower();
        PlantImagesData[] habit = originalImages.getHabit();
        PlantImagesData[] fruit = originalImages.getFruit();
        PlantImagesData[] bark = originalImages.getBark();
        PlantImagesData[] other = originalImages.getOther(); */

        if (originalImages.getFlower().length > 0) {
        originalImages.setFlower(updateImageUrl(nickName, flower));
        }
        /*
        if (originalImages.getLeaf().length > 0) {
        originalImages.setFlower(updateImageUrl(nickName, leaf));
        }
        if (originalImages.getFlower().length > 0) {
        originalImages.setHabit(updateImageUrl(nickName, habit));
        }
        if (originalImages.getFlower().length > 0) {
        originalImages.setFruit(updateImageUrl(nickName, fruit));
        }
        if (originalImages.getFlower().length > 0) {
        originalImages.setBark(updateImageUrl(nickName, bark));
        }
        if (originalImages.getFlower().length > 0) {
        originalImages.setOther(updateImageUrl(nickName, other));
        } */

        return originalImages;
    }

    public PlantImagesData[] updateImageUrl(String nickName, PlantImagesData[] galleryPart){

        Arrays.stream(galleryPart).forEach(n -> {
            try {
                n.setImage_url(compressAndUploadTitleImageToCloud(n.getImage_url(), nickName));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        return galleryPart;
    }

    public void deleteImagesFromCloud(String nickName) throws Exception {
        Cloudinary cloudinary = new Cloudinary(cloudinaryUrl);
        cloudinary.api().deleteResourcesByTag(nickName, ObjectUtils.emptyMap());
    }

}
