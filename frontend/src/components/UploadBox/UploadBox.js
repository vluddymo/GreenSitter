import React, {useContext} from "react";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Resizer from "react-image-file-resizer";
import {ApiSearchDispatchContext, ApiSearchStateContext} from "../../context/apiSearch/ApiSearchContext";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import Typography from "@material-ui/core/Typography";
import {fetchSearchResults} from "../../context/apiSearch/apiSearchActions";

const Input = styled('input')({
    display: 'none',
});

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


export default function UploadBox() {

    const history = useHistory();
    const {fetchStatus} = useContext(ApiSearchStateContext);
    const dispatch = useContext(ApiSearchDispatchContext);

    const onChange = async (event) => {
        try {
            const file = event.target.files[0];
            const image = await resizeFile(file);
            fetchSearchResults(dispatch, image).then(() => {
                history.push("/plant/add/identification")
            })
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChange}/>
                    <Button variant="contained" component="span">
                        Upload
                    </Button>
                </label>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file"/>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera/>
                    </IconButton>
                </label>
            </Stack>
            <div>
                {fetchStatus === 'PENDING' && <LoadingSpinner/>}
                {fetchStatus === 'FAILED' && (
                    <Typography variant="body1" color="error" component="p">
                        Identification failed
                    </Typography>
                )}
            </div>
        </>
    );
}