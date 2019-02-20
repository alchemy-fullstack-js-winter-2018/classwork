import React from 'react';
import { render } from 'react-dom';
import ComponentDemo from './components/ComponentDemo';

// render allows us to append a child
render(
  <ComponentDemo />,
  document.getElementById('root')
);
