const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Главная страница</h1>");
});

app.use("/static", function(request, response) {
  response.send("<p>header: Hello</p><p>body: Octagon NodeJS Test</p>");
});

app.use("/dynamic", function(request, response) {
  let a = parseInt(request.query.a);
  let b = parseInt(request.query.b);
  let c = parseInt(request.query.c);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return response.send("<p>header: Error</p><p>body: Error</p>");
  }

  if (!a || !b || !c) {
    return response.send("<p>header: Error</p><p>body: Error</p>");
  } else {
    let result = (a * b * c) / 3;
    return response.send(`<p>header: Calculated</p><p>body: ${result}</p>`);
  }
});

app.listen(3000, () => {
  console.log("Сервер начал прием запросов по адресам: http://localhost:3000/, http://localhost:3000/static, http://localhost:3000/dynamic?a=1&b=2&c=3");
});
