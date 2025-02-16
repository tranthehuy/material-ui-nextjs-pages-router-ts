import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (values: Record<string,string>) => void;
};

const LoginModal = (props: LoginModalProps) => {
  const { open , onClose, onConfirm} = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => onClose?.();
  const handleLogin = () => onConfirm?.({ username, password });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
            Login
          </Button>
          <Button onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
