import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

const AdminAddDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={() => props.close(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.description}</DialogContentText>
        {props.fields}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close(false)} color="primary">
          Annuler
        </Button>
        <Button onClick={() => props.complete()} color="primary">
          {props.validateLabel || 'Ajouter'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminAddDialog;
