import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ExamplesTab from '../components/ExamplesTab';
import { Button, Stack } from '@mui/material';

const content = `
    import DeleteIcon from '@mui/icons-material/Delete';
    import SendIcon from '@mui/icons-material/Send';
    import { Button, Stack } from '@mui/material';
    ...
    <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </Stack>
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
