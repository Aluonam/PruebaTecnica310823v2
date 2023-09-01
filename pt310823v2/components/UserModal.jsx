import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal({datosUsuario}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Detalles</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {datosUsuario.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {datosUsuario.email}
           <br></br>
           {datosUsuario.phone}
          </Typography>
          {/* creo botón para cerrar que reutiliza la función que ya había creada (línea 22) */}
          <button onClick={handleClose}>Cerrar</button>
        </Box>
      </Modal>
    </div>
  );
}