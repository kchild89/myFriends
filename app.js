import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const friends = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/getCurrentTime", (req, res) => {
  const date = new Date();
  res.json({ currentDate: date.toLocaleString() });
});

app.post("/addFriend", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const age = req.body.age;

  const friend = { name, email, phone, age };
  friends.push(friend);

  res.json({ success: true, friend: friend });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
