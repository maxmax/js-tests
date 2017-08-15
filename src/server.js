import express  from 'express';
import {apps} from "./tests/apps";
import {foo} from "./tests/foo";
import {square} from "./tests";

const app = express();

const questions = [
  { title: '1. What is the value?', code: square, result: square(11) }
];

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

app.get('/', function (req, res) {
  //res.sendFile(path.join(dist + "index.html"));
  //const componentHTML = ReactDom.renderToString(<App />);
  const componentHTML = apps('New apps:') + foo(questions);
  return res.end(renderHTML(componentHTML));
})

app.get('/api', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/tests', function (req, res) {
  res.send(JSON.stringify([1,2,3]));
})

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
        <div id="view">${componentHTML}</div>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
