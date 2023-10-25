"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReportsEquipments from '@/components/reports/ReportsEquipments';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="relative" sx={{ bgcolor: '#04367e' }} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary" // Cambia el color del indicador a naranja
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Equipos Tecnologicos" {...a11yProps(0)} />
          <Tab label="Centros de Salud" {...a11yProps(1)} />
          <Tab label="Reparaciones" {...a11yProps(2)} />
          <Tab label="Estadistica" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ReportsEquipments />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}
