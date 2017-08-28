import http     from 'http';
import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import TestApp from './src/components/testapp';

var app = express();

//base
app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/dist'));

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(<TestApp />);
  return res.end(renderHTML(componentHTML));
});

//const assetUrl = process.env.NODE_ENV !== 'dist' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello</title>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
      </body>
    </html>
  `;
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
