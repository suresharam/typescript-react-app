import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Numbers from './numbers';

ReactDOM.render(
  <Numbers initValue={0} />,
  document.getElementById('app') as HTMLElement
);
