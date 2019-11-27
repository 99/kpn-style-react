import '!style-loader!css-loader!sass-loader!./index.scss'

import { addDecorator, addParameters, configure } from '@storybook/react';

import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/);

function loadStories() {
  require("./welcomeStory.js");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
