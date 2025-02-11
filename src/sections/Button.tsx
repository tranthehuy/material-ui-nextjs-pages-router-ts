import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
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

export default function ButtonSection() {
    return (
        <ExamplesTab title="Button and Icon" description={content} id="button">
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </ExamplesTab>
    );
}
