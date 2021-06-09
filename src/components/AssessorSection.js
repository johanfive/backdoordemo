import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function AssessorSection({ state, handleChange }) {
  return (
    <div className="assessor">
      <Typography variant="h5">Assessor</Typography>
      <Typography variant="caption" display="block">
        Override backdoor's default behaviour with a function that takes in the input
        and returns an object with these 3 properties:
      </Typography>
      <FormControlLabel
        control={<Checkbox name="assessor" checked={state.assessor} onChange={handleChange} />}
        label="Use assessor override"
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="isBackdoor"
            onClick={(event) => event.stopPropagation()} // ie: prevent expanding the accordion
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox name="isBackdoor" checked={state.isBackdoor} onChange={handleChange} />
            }
            disabled={!state.assessor}
            label="isBackdoor"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <b>true</b>: skip the actualThenable and return mocked data after a delay
            <br />
            <b>false</b>: execute the actualThenable and do not return mocked data
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="doResolve"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox name="doResolve" checked={state.doResolve} onChange={handleChange} />
            }
            disabled={!state.assessor}
            label="doResolve"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <b>true</b>: return the resolvedValue when returning mocked data
            <br />
            <b>false</b>: return the rejectedValue when returning mocked data
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="isFast"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox name="isFast" checked={state.isFast} onChange={handleChange} />}
            disabled={!state.assessor}
            label="isFast"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Drives the wait before fulfilling the fake promise
            <br />
            <b>true</b>: delay is 1000ms by default (overridable)
            <br />
            <b>false</b>: delay is 5000ms by default (overridable)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
