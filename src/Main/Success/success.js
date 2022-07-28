import * as React from 'react';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    border: '2px solid white',
    p: 4,
  }
  ;
 function PopUp(props) {
  const {message, setMessage} = props
  const handleClose = () => setMessage(false);
  return (
    <div>
      <Modal
        open={message}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-content">
            <Box sx={{right: "10%"}}>
                <CloseIcon  onClick = {handleClose}/>
            </Box>
            <CheckCircleIcon sx = {{ fontSize: "100px", color : "#5DCC1A"}} style = {{ position:"relative", left: "40%", right: "40%"}}/>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx = {{ fontWeight: "bold", textAlign: "center", left:"50%" }}>
            Payment Successfully Completed
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
export default PopUp;