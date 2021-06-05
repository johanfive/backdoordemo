import { makeStyles, Typography } from '@material-ui/core';
import actualThenable from '../promises';
import { parseIfYouMust } from '../utils';
import makeAssessor from '../nasty';
import { hardCodedResolvedValue, hardCodedRejectedValue } from '../reducer';

const useStyles = makeStyles((theme) => ({
  command: {
    color: theme.palette.info.main,
  },
  backdoor: {
    color: theme.palette.secondary.main,
  },
  optional: {
    color: theme.palette.success.main,
  },
}));

const CodeViewer = ({ state }) => {
  const classes = useStyles();

  const renderableFast = state.fast !== '1000';
  const renderableSlow = state.slow !== '5000';
  const renderableSeparator = state.separator && state.separator !== '-';
  let renderableConfig;
  if (
    renderableFast ||
    renderableSlow ||
    renderableSeparator ||
    state.enabledInProd ||
    state.assessor
  ) {
    renderableConfig = `{${renderableFast ? `
      fast: ${state.fast},` : ''}${renderableSlow ? `
      slow: ${state.slow},` : ''}${renderableSeparator ? `
      separator: ${state.separator},` : ''}${state.enabledInProd ? `
      enabledInProd: true,` : ''}${state.assessor ? `
      assessor: assessorOverride` : ''}
    }`;
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div>
        <Typography variant="h5">Backdoor</Typography>
        <Typography className={classes.command} variant="subtitle2">
          npm i
          <span className={classes.optional}> -D </span>
          <span className={classes.backdoor}> backdoorthen </span>
        </Typography>
        <Typography className={classes.command} variant="subtitle2">
          yarn add
          <span className={classes.optional}> -D </span>
          <span className={classes.backdoor}> backdoorthen </span>
        </Typography>
      </div>
      <pre>{
        `import axios from 'axios';
import backdoor from 'backdoorthen';`
      }</pre>
      <pre>
        const createUser = {
          actualThenable.toString().replace('axios__WEBPACK_IMPORTED_MODULE_0___default.a', 'axios')
        };
      </pre>
      {state.assessor && <pre>const assessorOverride = {makeAssessor(state).toString()};</pre>}
      <pre>
        {`
const handleSubmit = formData => {
  const withBackdoor = thenable => backdoor({
    actualThenable: thenable,
    input: formData.${state.input},
    resolvedValue: ${state.assessor
      ? JSON.stringify(parseIfYouMust(hardCodedResolvedValue))
      : JSON.stringify(parseIfYouMust(state.resolvedValue))
    },
    rejectedValue: ${state.assessor
      ? JSON.stringify(parseIfYouMust(hardCodedRejectedValue))
      : JSON.stringify(parseIfYouMust(state.rejectedValue))
    }${renderableConfig ? `,
    config: ${renderableConfig}` : ''}
  });
  withBackdoor(createUser)(formData)
    .then(handleResponse)
    .catch(handleError);
};
`}
      </pre>
    </div>
  );
};

export default CodeViewer;
