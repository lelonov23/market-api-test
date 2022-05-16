const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const cors = require("@koa/cors");

app.use(
  cors({
    origin: "*",
  })
);

const mongoose = require("mongoose");

const seedCategories = require("./seeds/seed");

const Category = require("./models/Category");

mongoose.connect("mongodb://localhost/market", () => console.log("connected"));

seedCategories();

router.get("categories", "/categories", async (ctx) => {
  try {
    const categories = await Category.find({});
    ctx.body = categories;
  } catch (error) {
    console.error(error);
  }
});

const PORT = 3030;

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);
