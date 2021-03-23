const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/task-manager";
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
