import Link from "../src/components/Link";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";

export default function Form() {
  return (
    <Layout leftMenu={<>
      <br />
      <Paper>
        <List>
          <Link href="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LaunchIcon />
                </ListItemIcon>
                <ListItemText primary="Back To Home Page" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Paper>
    </>}>
      <Header />
    </Layout>
  );
}
