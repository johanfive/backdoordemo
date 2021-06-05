export const parseIfYouMust = data => {
  let res;
  try {
    res = JSON.parse(data);
  } catch (e) {
    console.log('Things could look prettier with valid JSON');
    res = data;
  }
  return res;
};

const baseFormStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  margin: '1rem',
  border: '1px solid #aaa',
  color: '#aaa'
};

export const formStyle = {
  createUser: {
    ...baseFormStyle,
    alignItems: 'flex-end',
    height: '12.5rem',
    color: '#F5005B',
    border: '1px solid #F5005B'
  },
  params: {
    ...baseFormStyle,
    height: '25.5rem',
  },
  config: {
    ...baseFormStyle,
    height: '16.5rem',
  }
};
