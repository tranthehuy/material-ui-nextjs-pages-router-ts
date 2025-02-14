import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LayoutSection from '../src/sections/Layout';
import TypographySection from '../src/sections/Typography';
import ButtonSection from '../src/sections/Button';
import FormSection from '../src/sections/Form';

import Grid from '@mui/material/Grid2';
import SideMenu from '../src/components/SideMenu';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignPapers: 'center',
        }}
      >
        <Link href="https://mui.com/material-ui/all-components/" target="_blank">
          Starter Repo Material UI - Next.js example in TypeScript
        </Link>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          MUI components - Design Language Page
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <SideMenu />

          <Grid size={8}>
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
