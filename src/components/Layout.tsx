import { Box, Grid2 as Grid } from "@mui/material";

interface LayoutProps {
    children?: React.ReactNode;
    leftMenu?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2} sx={{ backgroundColor: '#bdc3c7', boxShadow: "inset 5px 0px 20px rgba(0, 0, 0, 0.3)" }}>
          <Box sx={{ padding: 2 }}>
            {props.leftMenu}
          </Box>
        </Grid>
        <Grid size={10}>
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
