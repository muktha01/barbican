import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = process.env.PORT || 8001;

function startServer() {
  try {
    sequelize.authenticate();

    sequelize.sync({ alter: true }).then(() => {
      console.log("Database synced successfully");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
