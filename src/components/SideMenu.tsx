import { Paper, Grid2 as Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface SideMenuProps { }

export default function SideMenu(props: SideMenuProps) {
    return (
        <Grid size={4}>
            <Paper>
                <List>
                    <Link href="#form">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LaunchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Form" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="#layout">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LaunchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Layout" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="#title">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LaunchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Title" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="#button">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LaunchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Button and Icon" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Paper>
        </Grid>
    );
}