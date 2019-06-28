import admin from "./admin";
import category from "./category";
import article from "./article";
export default app => {
  app.use("/api", admin);
  app.use("/api", category);
  app.use("/api", article);
};
