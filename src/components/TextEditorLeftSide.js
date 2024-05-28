"use client";
import TextEditor from "@/components/TextEditor";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LinearProgress from "@mui/material/LinearProgress";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import SettingsIcon from "@mui/icons-material/Settings";

const TextEditorLeftSide = ({ contentEditor }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="col m3 s12"
      style={{ overflow: "scroll", height: "100vh", width: "30%" }}
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
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
          <TabPanel value="1">
            <div className="row">
              <div className="col s12">
                <div className="flex">
                  <h6 style={{ display: "inline" }}>{contentEditor.keyword}</h6>
                  <SettingsIcon className="ml-auto cursor-pointer hover:text-blue-900" />
                </div>
                <h6
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Content Score
                </h6>
                <LinearProgressWithLabel value={40} />
              </div>
              <div className="col s12">
                <table className="w-full text-center">
                  <caption class="caption-top py-3">
                    <h6
                      style={{
                        textAlign: "center",
                        textDecoration: "underline",
                      }}
                    >
                      Content Structure
                    </h6>
                  </caption>
                  <thead>
                    <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                      <th className="pb-2">Name</th>
                      <th>Max</th>
                      <th>Min</th>
                      <th>Current</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      id="words"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        words
                      </td>
                      <td>4045</td>
                      <td>1924</td>
                      <td>2</td>
                    </tr>
                    <tr
                      id="h1"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h1
                      </td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                    </tr>
                    <tr
                      id="h2"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h2
                      </td>
                      <td>20</td>
                      <td>12</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="h3"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h3
                      </td>
                      <td>23</td>
                      <td>16</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="h4"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h4
                      </td>
                      <td>8</td>
                      <td>3</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="h5"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h5
                      </td>
                      <td>3</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="h6"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h6
                      </td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="images"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        Images
                      </td>
                      <td>42</td>
                      <td>29</td>
                      <td>0</td>
                    </tr>
                    <tr
                      id="paragraph"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        Paragraph
                      </td>
                      <td>107</td>
                      <td>67</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TextEditorLeftSide;
