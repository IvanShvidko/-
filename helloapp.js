const express = require("express");
  
const app = express();
app.use("/static", function(request, response){
    response.send(`header: Hello</p>body: Octagon NodeJS Test`);
});

app.use("/dynamic", function(request, response){
    const a = request.query.a;
    const b = request.query.b;
    const c = request.query.c;
    const body = a*b*c/3;
    if(a==="",b==="",c==="")
     {
        response.send(`header: Error</p>body: ${body}</p>`);  
     }
     else
     {
        const a = request.query.a;
        const b = request.query.b;
        const c = request.query.c;
        const body = a*b*c/3;
        response.send(`header: Calculated</p>body: ${body}</p>`);  
     }
});
 
app.listen(3000);
