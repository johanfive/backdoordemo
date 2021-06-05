import { Card, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { formStyle } from '../utils';

const ConfigSection = ({ state, handleChange }) => {
  return (
    <Card style={{ margin: '1rem 1rem 0 0' }}>
      <form>
        <fieldset style={formStyle.config}>
          <legend>| params.config |</legend>
          <TextField
            name="fast"
            label="fast"
            variant="outlined"
            type="number"
            value={state.fast}
            onChange={handleChange}
          />
          <TextField
            name="slow"
            label="slow"
            variant="outlined"
            type="number"
            value={state.slow}
            onChange={handleChange}
          />
          <TextField
            name="separator"
            label="separator"
            variant="outlined"
            value={state.separator}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="enabledInProd"
                checked={state.enabledInProd}
                onChange={handleChange}
              />
            }
            label="enabledInProd"
          />
        </fieldset>
      </form>
    </Card>
  );
};

export default ConfigSection;
