import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LayoutSection from '../src/components/Layout';
import TypographySection from '../src/components/Typography';


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
          Demo components
        </Typography>
      </Box>

      <LayoutSection />
      <br />
      <TypographySection />
    </Container>
  );
}
