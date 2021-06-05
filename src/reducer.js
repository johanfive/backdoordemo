export const inputOptions = [
  { label: 'First Name', value: 'firstName' },
  { label: 'Last Name', value: 'lastName' }
];

export const hardCodedResolvedValue = `{
  "status": 555,
  "data": {
    "mocked": "data"
  }
}`;

export const hardCodedRejectedValue = `{
  "message": "kaboom"
}`;

export const SET_FIELD = 'SET_FIELD';

export const initialState = {
  input: inputOptions[0].value,
  resolvedValue: hardCodedResolvedValue,
  rejectedValue: hardCodedRejectedValue,
  fast: '1000',
  slow: '5000',
  separator: '-',
  enabledInProd: false,
  assessor: false,
  isBackdoor: true,
  doResolve: true,
  isFast: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIELD:
      return { ...state, [action.field.name]: action.field.value };

    default:
      return state;
  }
};

export default reducer;
