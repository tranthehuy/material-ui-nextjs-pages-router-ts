
import ExamplesTab from '../components/ExamplesTab';
import Typography from '@mui/material/Typography';

const content = `
import Typography from '@mui/material/Typography';
...
<Typography variant="h1" component="h1" sx={{ mb: 2 }}>
    Heading 1
</Typography>
<Typography variant="h2" component="h2" sx={{ mb: 2 }}>
    Heading 2
</Typography>
<Typography variant="h3" component="h3" sx={{ mb: 2 }}>
    Heading 3
</Typography>
<Typography variant="h4" component="h4" sx={{ mb: 2 }}>
    Heading 4
</Typography>
`

export default function TypographySection() {
    return (
        <ExamplesTab title="Title" description={content} id="title">
            <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Heading 1
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                Heading 2
            </Typography>
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                Heading 3
            </Typography>
            <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                Heading 4
            </Typography>
        </ExamplesTab>
    );
}
