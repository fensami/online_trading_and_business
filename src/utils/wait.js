import { resolve } from 'styled-jsx/css';

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
};

export default wait;