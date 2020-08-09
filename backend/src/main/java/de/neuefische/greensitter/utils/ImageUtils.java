package de.neuefische.greensitter.utils;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ImageUtils {

    @Value("${cloudinary.url}")
    private String cloudinaryUrl;

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
