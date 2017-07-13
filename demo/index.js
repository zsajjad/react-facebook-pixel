import React from 'react';
import ReactDOM from 'react-dom';
import ReactPixel from '../src/index';

ReactPixel.init('1052691598191002');
ReactPixel.pageView();

ReactDOM.render(
  <div>
    <h1>React Facebook Pixel Tested</h1>
    <button onClick={() => ReactPixel.track('ViewContent', {
      content_name: 'Really Fast Running Shoes',
      content_category: 'Apparel & Accessories > Shoes',
      content_ids: ['1234'],
      content_type: 'product',
      value: 0.50,
      currency: 'USD'
    })}>Track View Content</button>
  </div>,
  document.getElementById('app')
);
