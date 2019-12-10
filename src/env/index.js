import * as prod from './prod';
import * as homolog from './homolog';
import * as dev from './dev';
import * as local from './local';

const envs = {
  prod,
  homolog,
  dev,
  local,
};

export default envs[process.env.REACT_APP_ENV.trim()] || envs.dev;
