import admin from "./admin";
import category from "./category";
export default app=> {
  app.use("/api", admin);
  app.use("/api", category);
};
