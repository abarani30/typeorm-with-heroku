import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.use("*", (req, res) => {
  res.send("<h1>Hello guys from Ali Barani :)</h1>");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
