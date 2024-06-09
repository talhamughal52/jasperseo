"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import Tooltip from "@mui/material/Tooltip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ExamplePopupModal from "./ExamplePopupModal";
import { handlecompatitorsChange } from "@/lib/actions/editor.actions";
import { useRouter } from "next/navigation";
const TextEditorLeftSide = ({
  contentEditor,
  structure,
  importantTopics,
  nlp_tokens,
  outline,
  websites,
  topwebsites,
  count,
  percentage,
}) => {
  const [value, setValue] = useState("1");
  const [subValue, setSubValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubChange = (event, newValue) => {
    setSubValue(newValue);
  };

  const [isBottom, setIsBottom] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsBottom(open);
  };

  const list = (contentEditor) => {
    const router = useRouter();
    const [tabValue, setTabValue] = useState("1");
    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };
    const handleSubmit = async (event) => {
      const response = await handlecompatitorsChange(event);
      router.push(`/editor/${contentEditor._id}/loading`);
    };
    return (
      <Box
        sx={{ width: "100%", zIndex: "9999999" }}
        role="presentation"
        // onClick={toggleDrawer(false)}
        // onKeyDown={toggleDrawer(false)}
      >
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                value="1"
                label={<span className="dark:text-white">Compatitors</span>}
              />
              <Tab
                label={
                  <div className="flex">
                    <span className="dark:text-white">Compatitors Terms</span>
                    <span className="bg-red text-white px-1 ml-2">BETA</span>
                  </div>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div
              id="compatitors"
              className="col s12"
              style={{ display: "block" }}
            >
              <h4 className="text-lg font-semibold dark:text-white">
                Settings
              </h4>
              <h6 className="text-base font-semibold dark:text-white">Url</h6>
              <form action={handleSubmit} method="post">
                <FormGroup>
                  {topwebsites.map((website, index) => (
                    <div key={index}>
                      <FormControlLabel
                        className="dark:text-white"
                        control={
                          <Checkbox
                            name="websites"
                            value={website._id}
                            defaultChecked={website.checked ? true : false}
                          />
                        }
                        label={website.url}
                      />
                      <Divider />
                    </div>
                  ))}
                  <input
                    name="contentEditor"
                    value={contentEditor._id}
                    type="hidden"
                  />
                </FormGroup>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div id="terms" className="col s12">
              <h6 className="text-xl font-semibold dark:text-white">
                Headings From Competitors
              </h6>
              <ul className="divide-y divide-gray-200">
                {websites.map((website) => {
                  const array = JSON.parse(website.content);
                  const heading1 = array[array.length - 1].heading1;
                  const heading2 = array[array.length - 1].heading2;

                  return (
                    <>
                      {heading1.map((head, index) => (
                        <li
                          key={`heading1_${index}`}
                          className="py-2 dark:text-white"
                        >
                          {head}
                        </li>
                      ))}
                      {heading2.map((head, index) => (
                        <li
                          key={`heading2_${index}`}
                          className="py-2 dark:text-white"
                        >
                          {head}
                        </li>
                      ))}
                    </>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    );
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
              <Tab
                label={<span className="dark:text-white">GUIDLINES</span>}
                value="1"
              />
              <Tab
                label={
                  <div className="flex">
                    <span className="dark:text-white">OUTLINE</span>
                    <span className="bg-red text-white px-1 ml-2">BETA</span>
                  </div>
                }
                value="2"
              />
              <Tab
                label={<span className="dark:text-white">BRIEF</span>}
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="row">
              <div className="col s12">
                <div className="flex">
                  <h6 style={{ display: "inline" }}>{contentEditor.keyword}</h6>
                  <Tooltip
                    title={<h1 className="text-base">Competitor Analysis</h1>}
                    arrow
                  >
                    <SettingsIcon
                      onClick={toggleDrawer(true)}
                      className="ml-auto cursor-pointer hover:text-blue-900"
                    />
                  </Tooltip>
                  <Drawer
                    anchor="bottom"
                    open={isBottom}
                    onClose={toggleDrawer(false)}
                    style={{ zIndex: "100000" }}
                    PaperProps={{
                      style: {
                        height: "50%",
                        marginTop: "auto",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      },
                    }}
                  >
                    {list(contentEditor)}
                  </Drawer>
                </div>
                <h6
                  className="py-3"
                  style={{ textAlign: "center", textDecoration: "underline" }}
                >
                  Content Score
                </h6>
                <LinearProgressWithLabel value={percentage} />
              </div>
              <div
                className="col s12 mt-4"
                style={{ borderTop: "1px solid #bebcbc" }}
              >
                <table className="w-full text-center">
                  <caption className="caption-top py-3">
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
                      <td>{structure.word.max}</td>
                      <td>{structure.word.min}</td>
                      <td>{count.wordCount}</td>
                    </tr>
                    <tr
                      id="h1"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h1
                      </td>
                      <td>{structure.h1.max}</td>
                      <td>{structure.h1.min}</td>
                      <td>{count.h1Count}</td>
                    </tr>
                    <tr
                      id="h2"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h2
                      </td>
                      <td>{structure.h2.max}</td>
                      <td>{structure.h2.min}</td>
                      <td>{count.h2Count}</td>
                    </tr>
                    <tr
                      id="h3"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h3
                      </td>
                      <td>{structure.h3.max}</td>
                      <td>{structure.h3.min}</td>
                      <td>{count.h3Count}</td>
                    </tr>
                    <tr
                      id="h4"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h4
                      </td>
                      <td>{structure.h4.max}</td>
                      <td>{structure.h4.min}</td>
                      <td>{count.h4Count}</td>
                    </tr>
                    <tr
                      id="h5"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h5
                      </td>
                      <td>{structure.h5.max}</td>
                      <td>{structure.h5.min}</td>
                      <td>{count.h5Count}</td>
                    </tr>
                    <tr
                      id="h6"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        h6
                      </td>
                      <td>{structure.h6.max}</td>
                      <td>{structure.h6.min}</td>
                      <td>{count.h6Count}</td>
                    </tr>
                    <tr
                      id="images"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        Images
                      </td>
                      <td>{structure.images.max}</td>
                      <td>{structure.images.min}</td>
                      <td>{count.imageCount}</td>
                    </tr>
                    <tr
                      id="paragraph"
                      className=" border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td style={{ fontWeight: "500" }} className="pb-2">
                        Paragraph
                      </td>
                      <td>{structure.paragraph.max}</td>
                      <td>{structure.paragraph.min}</td>
                      <td>{count.paragraphCount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="col s12 mt-8"
                style={{ borderTop: "1px solid #bebcbc" }}
              >
                <div className="row">
                  <div className="col s12">
                    <h6
                      className="py-3"
                      style={{
                        textAlign: "center",
                        textDecoration: "underline",
                      }}
                    >
                      Terms
                    </h6>
                  </div>
                  <div className="col s12">
                    {importantTopics.map((topic, index) => (
                      <span
                        key={index}
                        style={{
                          background: "lightblue",
                          color: "#2196F3",
                          padding: "3px 10px",
                          borderRadius: "20px",
                          margin: "3px",
                          display: "inline-block",
                        }}
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                  <div className="col s12">
                    <h6
                      className="py-3"
                      style={{
                        textAlign: "center",
                        textDecoration: "underline",
                      }}
                    >
                      NLP Terms
                    </h6>
                  </div>
                  <div className="col s12">
                    <Box sx={{ width: "100%", typography: "body1" }}>
                      <TabContext value={subValue}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={handleSubChange}
                            aria-label="lab API tabs example"
                          >
                            <Tab
                              label={
                                <span className="dark:text-white">NLP</span>
                              }
                              value="1"
                              style={{ margin: "auto" }}
                            />
                            <Tab
                              label={
                                <span className="dark:text-white">HEADING</span>
                              }
                              value="2"
                              style={{ margin: "auto" }}
                            />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <div id="all" className="col s12">
                            {nlp_tokens.map((nlpToken, index) => (
                              <ExamplePopupModal
                                name={nlpToken.name}
                                min={nlpToken.min}
                                max={nlpToken.max}
                                current={nlpToken.current}
                                examples={nlpToken.examples}
                                key={index}
                              />
                            ))}
                          </div>
                        </TabPanel>
                        <TabPanel value="2">
                          <div id="headings" className="col s12">
                            {nlp_tokens.map(
                              (nlpToken, index) =>
                                (nlpToken.heading || index === 0) && (
                                  <ExamplePopupModal
                                    name={nlpToken.name}
                                    examples={nlpToken.examples}
                                    key={index}
                                    current={nlpToken.current}
                                  />
                                )
                            )}
                          </div>
                        </TabPanel>
                      </TabContext>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="col s12 py-3">
              <h6>Generated Outline</h6>
            </div>
            <Accordion className="dark:text-white dark:bg-boxdark">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Outline
              </AccordionSummary>
              <AccordionDetails>{outline}</AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value="3">
            <div className="col-span-12">
              <h6 className="text-center underline dark:text-white">
                Competitors
              </h6>
              <ul className="divide-y divide-gray-200 border-none">
                {websites.map((website, index) => (
                  <li key={index} className="py-2">
                    <a href={website.url} className="block dark:text-white">
                      {website.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TextEditorLeftSide;
