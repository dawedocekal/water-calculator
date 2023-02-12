import React, { useState } from "react";
import {
  Button,
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const Dialog = ({ handleSuccess, children, title = '', openerTitle = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleSuccessAndClose = () => {
    handleSuccess?.()
    handleClose()
  } 

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        {openerTitle}
      </Button>
      <MUIDialog open={isOpen} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Zavřít</Button>
          <Button onClick={handleSuccessAndClose}>Potvrdit</Button>
        </DialogActions>
      </MUIDialog>
    </div>
  );
};

export default Dialog;
