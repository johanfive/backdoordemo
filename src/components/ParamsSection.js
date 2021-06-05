import { Card, MenuItem, TextField } from '@material-ui/core';
import { inputOptions } from '../reducer';
import { formStyle } from '../utils';

const ParamsSection = ({ state, handleChange}) => {
  return (
    <Card style={{ margin: '1rem 1rem 0 0' }}>
      <form>
        <fieldset style={formStyle.params}>
        <legend>| backdoor(params) |</legend>
          <TextField
            name="input"
            label="input"
            variant="outlined"
            select
            value={state.input}
            onChange={handleChange}
          >
            {inputOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="resolvedValue"
            label="resolvedValue"
            variant="outlined"
            multiline
            rows={6}
            value={state.resolvedValue}
            onChange={handleChange}
          />
          <TextField
            name="rejectedValue"
            label="rejectedValue"
            variant="outlined"
            multiline
            rows={6}
            value={state.rejectedValue}
            onChange={handleChange}
          />
        </fieldset>
      </form>
    </Card>
  );
};

export default ParamsSection;
