'use client'
import { useEffect } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";

const PopupModal = ({ text, open, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [open, onClose]);

  return open ? (
    <Dialog
    style={{
      borderRadius:"12px",
    }}
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
        borderRadius:"12px",
        padding: '20px',
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <DialogContent>
        <Typography variant="body1">{text}</Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

export default PopupModal;

