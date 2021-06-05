import './App.css';
import backdoor from 'backdoorthen';
import { useReducer } from 'react';
import UserForm from './components/UserForm';
import ParamsSection from './components/ParamsSection';
import ConfigSection from './components/ConfigSection';
import AssessorSection from './components/AssessorSection';
import actualThenable, { handleResponse, handleError } from './promises';
import reducer, { hardCodedRejectedValue, hardCodedResolvedValue, initialState } from './reducer';
import CodeViewer from './components/CodeViewer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    input,
    resolvedValue, rejectedValue,
    fast, slow,
    separator,
    enabledInProd,
    assessor, isBackdoor, doResolve, isFast
  } = state;

  const handleChange = e => {
    const { name, type, value, checked } = e.target;
    dispatch({ type: 'SET_FIELD', field: { name, value: type === 'checkbox' ? checked : value } });
  };

  // What this is all about:
  const handleSubmit = formData => {
    const withBackdoor = thenable => backdoor({
      actualThenable: thenable,
      input: formData[input],
      resolvedValue: assessor ? JSON.parse(hardCodedResolvedValue) : resolvedValue,
      rejectedValue: assessor ? JSON.parse(hardCodedRejectedValue) : rejectedValue,
      config: {
        fast,
        slow,
        separator,
        enabledInProd,
        assessor: assessor && (() => ({ isBackdoor, doResolve, isFast }))
      }
    });
    withBackdoor(actualThenable)(formData)
      .then(handleResponse)
      .catch(handleError);
  };

  return (
    <div className="App">
      <CodeViewer state={state} />
      <UserForm onSubmit={handleSubmit} selectedField={state.input} />
      <ParamsSection state={state} handleChange={handleChange} />
      <ConfigSection state={state} handleChange={handleChange} />
      <AssessorSection state={state} handleChange={handleChange} />
    </div>
  );
}

export default App;
