import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordionWithQuestion({ title, body }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 style={{ fontSize: 18 }}>{title}</h5>
        </AccordionSummary>
        <AccordionDetails>{body}</AccordionDetails>
      </Accordion>
    </div>
  );
}
