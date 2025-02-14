import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CodePreview from './CodePreview';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ExamplesTabProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  id?: string;
}

export default function ExamplesTab(props: ExamplesTabProps) {
  const { children, description, title, id } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Link id={id}>
        <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
          {title}
        </Typography>
      </Link>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Preview" {...a11yProps(0)} />
            <Tab label="Code" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {children}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CodePreview
            description={description}
          />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}