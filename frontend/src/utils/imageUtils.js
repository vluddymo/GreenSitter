import Resizer from "react-image-file-resizer";

export default function resizeAndDecode(file){
    try {
        Resizer.imageFileResizer(
            event.target.files[0],
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                console.log(uri);
                this.setState({ newImage: uri });
            },
            "base64",
            200,
            200
        );
    } catch (err) {
        console.log(err);
    }

}