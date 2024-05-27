"use client";
import TextEditor from "@/components/TextEditor";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const page = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex">
      <TextEditor />
      <div
        class="col m3 s12"
        style={{ overflow: "scroll", height: "100vh", width: "30%" }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="GUIDLINES" value="1" />
                <Tab
                  label={
                    <div className="flex">
                      <span>OUTLINE</span>
                      <span className="bg-red text-white px-1 ml-2">BETA</span>
                    </div>
                  }
                  value="2"
                />
                <Tab label="BRIEF" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default page;
