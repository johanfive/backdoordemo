import axios from 'axios';
import { parseIfYouMust } from './utils';

export const handleResponse = (res) => {
  const usable = parseIfYouMust(res);
  const { status, data } = usable;
  let log = `Non-JSON mocked data:
${usable}`;
  if (status && data) {
    log = `Server responded [${status}] with:\n${JSON.stringify(data, null, 2)}`;
  }
  alert(log);
};

export const handleError = e => {
  const usable = parseIfYouMust(e);
  const { message } = usable;
  const log = `Something didn't go so well, hopefully this will help make sense of what happened:
${message || e}`;
  alert(log);
};

const createUser = ({ firstName, lastName }) => {
  const queryString = `?firstName=${firstName}&lastName=${lastName}`;
  const url = `https://backdoorthen-okob4pm0bfqy.runkit.sh/createUser${queryString}`;
  return axios.get(url);
};

export default createUser;
