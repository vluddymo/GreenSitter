import {PlantDispatchContext, PlantStateContext} from "../../context/plant/PlantContext";
import React, {useContext, useEffect, useState} from "react";
import {addPlant} from "../../context/plant/plantActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import SmallLoadingSpinner from "../Spinner/SmallLoadingSpinner";

export default function AddPlantDialog({open, handleClose, result}) {

  const history = useHistory();
  const [nickName, setNickName] = useState('');
  const [choiceId, setChoiceId] = useState('');
  const {addStatus} = useContext(PlantStateContext);
  const dispatch = useContext(PlantDispatchContext);

  useEffect(() => {
    if (addStatus === 'SUCCESS') {
      setNickName('');
      handleClose();
    }
    // eslint-disable-next-line
  }, [addStatus, dispatch]);


  function handleSubmit() {
    buildDataPackage();
    addPlant(dispatch, buildDataPackage())
        .then(() => (history.push("/")));

  }

  function buildDataPackage() {
    const choiceData = {
      nickName: `${nickName}`,
      choiceId: `${choiceId}`
    };
    console.log(choiceData)
    return choiceData
  }

  function handleChange(event) {
    setNickName(event.target.value);
    setChoiceId(result.id)
  }

  return (
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={'sm'}
          fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Alright, one more thing</DialogTitle>
        <DialogContent>
          <DialogContentText>Give your new plant a name :)</DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
                fullWidth={true}
                multiline={true}
                label="Nickname"
                value={nickName}
                onChange={handleChange}
                margin="normal"
                error={nickName.length < 2}
                helperText={'min length 2'}
            />
          </form>
          {addStatus === 'PENDING' && <SmallLoadingSpinner/>}
          {addStatus === 'FAILED' && (
              <Typography variant="body1" component="p">
                That did't seem to work
              </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
              disabled={nickName.length < 2}
              onClick={handleSubmit}
              color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
  );
}
