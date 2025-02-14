import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  LayoutSection,
  TypographySection,
  ButtonSection,
  FormSection,
} from "../src/sections/index";

import Grid from "@mui/material/Grid2";
import SideMenu from "../src/components/SideMenu";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <SideMenu />
          <Grid size={8}>
            <Header />
            <FormSection />
            <br />
            <LayoutSection />
            <br />
            <TypographySection />
            <br />
            <ButtonSection />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
