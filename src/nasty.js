// working with pre...
const makeAssessor = ({ isBackdoor, doResolve, isFast }) =>
  (isBackdoor && doResolve && isFast)
  ? (input => ({isBackdoor: true, doResolve: true, isFast: true}))
  : (!isBackdoor && doResolve && isFast)
    ? (input => ({isBackdoor: false, doResolve: true, isFast: true}))
    : (!isBackdoor && !doResolve && isFast)
      ? (input => ({isBackdoor: false, doResolve: false, isFast: true}))
      : (!isBackdoor && !doResolve && !isFast)
        ? (input => ({isBackdoor: false, doResolve: false, isFast: false}))
        : (isBackdoor && !doResolve && !isFast)
          ? (input => ({isBackdoor: true, doResolve: false, isFast: false}))
          : (isBackdoor && doResolve && !isFast)
            ? (input => ({isBackdoor: true, doResolve: true, isFast: false}))
            : (isBackdoor && !doResolve && isFast)
              ? (input => ({isBackdoor: true, doResolve: false, isFast: true}))
              : (input => ({isBackdoor: false, doResolve: true, isFast: false}));

export default makeAssessor;
