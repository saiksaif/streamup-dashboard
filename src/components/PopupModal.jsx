import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='container rounded-2xl hover:shadow-xl shadow-lg duration-300 bg-white py-2 mb-5 flex flex-row-reverse pe-2'>
      <Button onClick={handleOpen} sx={{background: 'linear-gradient(120deg, #eb1a8f,#6c2c78, #055a9d)', borderRadius: '10px',
        '&:hover': {
            boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)', // Adjust the shadow values as needed
      }}}>
        <span className='text-white font-semibold px-2'>{props.actionLabel}</span>
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            {props.modalContent}
        </Box>
      </Modal>
    </div>
  );
}

{/* 
    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Text in a modal
    </Typography>
    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
</Box> */}