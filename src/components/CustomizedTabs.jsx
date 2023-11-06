import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import style from "./styles/customizedTabs.module.css";

function TabPanel(props) {
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
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 125,
    width: "100%",
    background: "linear-gradient(to right, #eb1a8f, #6c2c78, #055a9d)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#000",
    "&.Mui-selected": {
      color: "#000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({data, child}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className="px-2 md:px-3 lg:px-5 pb-1 md:pb-2 lg:pb-3 mx-1 md:mx-3 lg:mx-5 w-100">
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="styled tabs example"
      >
        {data.map((tab, index) => (
          <StyledTab key={index} label={tab.label} {...a11yProps(index-1)} />
        ))}
      </StyledTabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={"w-100 mt-5 my-1 md:my-2 lg:my-4 rounded-2xl shadow-inner " + style.tabBgColor}
      >
        {data.map((tab, index) => (
          <TabPanel key={index} value={value} index={index} dir={theme.direction}>
            {child(index)}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}
