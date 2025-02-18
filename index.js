require('dotenv').config();
const app = require("./server");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
