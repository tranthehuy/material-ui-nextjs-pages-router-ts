import * as React from 'react';
import CodePreview from './CodePreview';
import { Box, Link, Tab, Tabs, Typography } from '@mui/material';

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
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
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