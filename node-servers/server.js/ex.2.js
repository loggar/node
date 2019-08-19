const server = require("server");
const { get, post } = server.router;
const { render, redirect } = server.reply;

server(
  get("/", () => render("index.pug")),  // Handle requests to the url "/" ( http://localhost:3000/ )
  post("/", ctx => {
    console.log(ctx.data);
    return redirect("/");
  })
);
