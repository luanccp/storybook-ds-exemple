import { configure } from '@storybook/react';
import '../src/index.css';
import 'storybook-chromatic';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


// para exportar como app estatico, ir no package.json
/*
{
  "scripts": {
    "build-storybook": "build-storybook -c .storybook"
  }
}
*/