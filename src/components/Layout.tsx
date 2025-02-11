import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function Layout() {
    return (
        <Box>
            <Link href="#layout">
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                    Layout
                </Typography>
            </Link>

            <Card>
                <pre>{`
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
...
<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid size={4}>
      <Paper>size=4</Paper>
    </Grid>
    <Grid size={8}>
      <Paper>size=8</Paper>
    </Grid>
  </Grid>
</Box>
    `}
                </pre>
            </Card>
            <br />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Paper>size=4</Paper>
                    </Grid>
                    <Grid size={8}>
                        <Paper>size=8</Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
