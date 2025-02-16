import Link from "../src/components/Link";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
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
import AppBar from "../src/components/AppBar";

export default function Form() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <Layout
      hideMenu={!openMenu}
      contentPadding={0}
      leftMenu={
        <>
          <br />
          <Paper>
            <List>
              {!auth ? (
                <ListItemButton onClick={() => setOpen(true)}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              ) : (
                <ListItemButton onClick={() => setAuth(false)}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log out" />
                </ListItemButton>
              )}
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
                    <ListItemText primary="Home Page" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Paper>
        </>
      }
    >
      <AppBar
        auth={auth}
        onToogleMenu={() => {
            console.log(openMenu)
          setOpenMenu(!openMenu);
        }}
      />
      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          setAuth(true);
        }}
      />
    </Layout>
  );
}
