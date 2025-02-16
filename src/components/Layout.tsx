import { Box, Grid2 as Grid } from "@mui/material";

interface LayoutProps {
    children?: React.ReactNode;
    leftMenu?: React.ReactNode;
    contentPadding?: number;
    hideMenu?: boolean;
}

export default function Layout(props: LayoutProps) {
  const columns = props.hideMenu ? {
    sideMenu: 0,
    content: 12
  } : {
    sideMenu: 2,
    content: 10
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid size={columns.sideMenu} sx={{ backgroundColor: '#bdc3c7', boxShadow: "inset 5px 0px 20px rgba(0, 0, 0, 0.3)" }}>
          {!props.hideMenu && <Box sx={{ padding: 2 }}>
            {props.leftMenu}
          </Box>}
        </Grid>
        <Grid size={columns.content}>
          <Box
            sx={{
              padding: props.contentPadding ?? 2,
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
