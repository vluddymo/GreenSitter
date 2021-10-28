import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import React, {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";
import {fetchSearchResults} from "../../../context/apiSearch/apiSearchActions";
import {ApiSearchDispatchContext} from "../../../context/apiSearch/ApiSearchContext";
import Resizer from "react-image-file-resizer";


const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });


export default function AddingButton() {

    const dispatch = useContext(ApiSearchDispatchContext);
    const history = useHistory();
    const hiddenInput = useRef(null);

    function handleClick(){
        hiddenInput.current.click();
    }

    const onChange = async (event) => {
        try {
            const file = event.target.files[0];
            const image = await resizeFile(file);
            fetchSearchResults(dispatch, image).then(() => {
                history.push("/plant/add/identification");
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <input ref={hiddenInput}
                   multiple
                   type={"file"}
                   id={"file"}
                   accept={"image/*"}
                   onChange={onChange}
                   style={{display: "none"}}/>
            <Fab color="primary"
                 aria-label="add"
                 onClick={handleClick}
            >
                <AddIcon/>
            </Fab>
        </>

    )

}