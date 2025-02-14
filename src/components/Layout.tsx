import { Box, Grid2 as Grid } from "@mui/material";

interface LayoutProps {
    children?: React.ReactNode;
    leftMenu?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box sx={{ padding: 2 }}>
            {props.leftMenu}
          </Box>
        </Grid>
        <Grid size={8}>
          <Box
            sx={{
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
