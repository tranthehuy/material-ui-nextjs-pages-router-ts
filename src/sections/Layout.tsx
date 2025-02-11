import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ExamplesTab from '../components/ExamplesTab';

const content = `
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
`

export default function Layout() {
    return (
        <ExamplesTab title="Layout" description={content}>
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
        </ExamplesTab>
    );
}
