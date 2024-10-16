routerAdd("GET", "/hello/:name", (c) => {
  let name = c.pathParam("name");

  return c.json(200, { message: "Hello " + name });
});

cronAdd("hello", "*/2 * * * *", () => {
  console.log("Hello!");
});
