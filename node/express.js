const express = require('express');
const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

app.use("/", express.static(sourceDir))
app.use("/about", express.static(sourceDir))
app.use("/unknown", express.static(sourceDir))

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
