

import resources from './data.json';

export function fetchResources() {
  return new Promise(res => {
    setTimeout(() => res(resources), 500);
  })
}
