import LoadingSpinner from "../../Spinner/LoadingSpinner";
import {Dialog} from "@material-ui/core";


export default function LoadingDialogue(){

    return (
        <Dialog open={true}>
            <LoadingSpinner/>
        </Dialog>
    );
}