import { Box, Grid2 as Grid, Paper } from '@mui/material';
import ExamplesTab from '../components/ExamplesTab';

const content = `
    import { Box, Grid2 as Grid, Paper } from '@mui/material';
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

export default function LayoutSection() {
    return (
        <ExamplesTab title="Layout" description={content} id="layout">
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
