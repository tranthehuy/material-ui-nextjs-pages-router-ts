import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
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

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={4}>
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
          </Grid>
          <Grid size={8}>
            <Header />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
