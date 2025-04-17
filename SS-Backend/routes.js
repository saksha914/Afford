const express = require("express");
const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/usersRoute");
const projectRoutes = require("./routes/projectRoutes");
const orgRoutes = require("./routes/orgRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

module.exports = (app) => {
  app.use("/test", testRoutes);
  app.use("/user", userRoutes);
  app.use("/project", projectRoutes);
  app.use("/org", orgRoutes);
  app.use("/weather", weatherRoutes);
};
