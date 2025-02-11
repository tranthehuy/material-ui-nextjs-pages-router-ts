
import ExamplesTab from '../components/ExamplesTab';
import MuiTypography from '@mui/material/Typography';

const content = `
import Typography from '@mui/material/Typography';
...
<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
Heading 1
</Typography>
`

export default function Typography() {
    return (
        <ExamplesTab title="Title" description={content}>
            <MuiTypography variant="h4" component="h3" sx={{ mb: 2 }}>
                Heading 3
            </MuiTypography>
        </ExamplesTab>
    );
}
