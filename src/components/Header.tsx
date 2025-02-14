import {
  Link,
  Typography,
  Box,
} from "@mui/material";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignPapers: "center",
      }}
    >
      <Link href="https://mui.com/material-ui/all-components/" target="_blank">
        Starter Repo Material UI - Next.js example in TypeScript
      </Link>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        MUI components - Design Language Page
      </Typography>
    </Box>
  );
}
