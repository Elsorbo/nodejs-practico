
const express = require("express");
const swaggerUI = require("swagger-ui-express");

const config = require("../config");
const swaggerDoc = require("../swagger.json");
const errorHandler = require("../network/errorHandler");
const authRouter = require("./components/auth/network");
const userRouter = require("./components/user/network");

// App
const app = express();
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(errorHandler);

app.listen(config.api.port, 
    () => console.log(`Server up on port ${config.api.port}`));
