const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json()); // lets us read JSON from Postman's request body

const PORT = 3000;

// In-memory "database" for now
let userInfo = [
  {
    id: 1001,
    name: "Yassine",
    email: "yassine.test@example.com",
    password: null,
  },
  { id: 1002, name: "Sara", email: "sara.test@example.com", password: null },
];

// ===== GET all users =====
app.get("/users", (req, res) => {
  res.json(userInfo);
});

// ===== POST register a new user =====
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "name, email, and password are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(), // simple unique id for now
    name,
    email,
    password: hashedPassword,
  };

  userInfo.push(newUser);

  res
    .status(201)
    .json({ message: "User created", user: { id: newUser.id, name, email } });
});

// ===== POST login =====
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = userInfo.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid password" });
  }

  res.json({
    message: "Login successful",
    user: { id: user.id, name: user.name, email: user.email },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
