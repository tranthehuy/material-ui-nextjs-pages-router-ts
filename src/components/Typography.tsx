import MuiTypography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function Typography() {
    return (
        <Box>
            <Link href="#title">
            <MuiTypography variant="h4" component="h3" sx={{ mb: 2 }}>
                Title
            </MuiTypography>
            </Link>
            <Card>
                <pre>{`
import Typography from '@mui/material/Typography';
...
<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
Heading 1
</Typography>
            `}
                </pre>
            </Card>
            <br />
            <MuiTypography variant="h4" component="h4" sx={{ mb: 2 }}>
                Heading 4
            </MuiTypography>
        </Box>
    );
}
