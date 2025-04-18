const users = [
  {
    id: 1,
    name: "Juveria",
    age: "20",
  },
];


//get all users
function getAllUsers(req, res) {
  res.json(users);
}

//get user by id
function getUserById(req, res) {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
}

//add user create
function addUser(req, res) {
  const { name, age } = req.body;
  let id = users.length + 1;
  const user = { id, name, age };
  users.push(user);
  res.json(users);
}

//update
function updateUser(req, res) {
  const { id } = req.params;
  const { name, age } = req.body;
  const user = users.find((user) => user.id == id);
  if (user) {
    user.name = name;
    user.age = age;
    res.json(users);
  } else {
    res.status(404).send("User not found");
  }
}

//delete
function deleteUser(req, res) {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json(users);
  } else {
    res.status(404).send("User not found");
  }
}

// Export the functions for use in routes
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
