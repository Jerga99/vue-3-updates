

import resources from './data.json';

export function fetchResources() {
  return new Promise(res => {
    setTimeout(() => res(resources), 500);
  })
}

export function fetchUser() {
  return new Promise(res => {
    setTimeout(() => res({name: 'Filip'}), 1000);
  })
}
