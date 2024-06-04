"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";

const ExamplePopupModal = ({ name, min, max, examples }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    width: "60%",
    height: "35%",
  };

  return (
    <>
      <Tooltip
        title={<h1 className="text-base">click here to see example</h1>}
        arrow
      >
        <div
          style={{
            display: "inline-block",
            margin: "4px",
          }}
        >
          <button onClick={handleOpen}>
            <span
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                padding: "5px",
                backgroundColor: "#fff5f5",
                color: "#822727",
              }}
            >
              {name}
            </span>
          </button>
          <span
            style={{
              padding: "5px",
              borderRight: "2px solid #fff5f5",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            {min && max ? `0/${min} - ${max}` : 0}
          </span>
        </div>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Example Of Use
          </Typography>
          {examples.length > 0 ? (
            <Typography
              className="py-3"
              style={{ maxHeight: "200px", overflow: "auto" }}
              dangerouslySetInnerHTML={{
                __html: examples[0],
              }}
            ></Typography>
          ) : (
            <Typography className="py-3" style={{ maxHeight: "200px" }}>
              Example not found!
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ExamplePopupModal;
