import Link from "../src/components/Link";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Layout from "../src/components/Layout";
import { useState } from "react";
import LoginModal from "../src/components/modals/LoginModal";

export default function Form() {
    const [open, setOpen] = useState(false);
    
  return (
    <Layout
      leftMenu={
        <>
          <br />
          <Paper>
            <List>
              <ListItemButton onClick={() => setOpen(true)}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Create New" />
              </ListItemButton>

              <Divider />
              <Link href="/">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Back To Home Page" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Paper>
        </>
      }
    >
      <LoginModal open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />
    </Layout>
  );
}
