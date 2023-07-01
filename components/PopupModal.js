'use client'
import { useEffect } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";

const PopupModal = ({ text, open, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [open, onClose]);

  return open ? (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        padding: '20px',
        borderRadius: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
      }}
    >
      <DialogContent>
        <Typography variant="body1">{text}</Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default PopupModal;

