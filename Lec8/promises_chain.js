const fs= require("fs");

let pendingPromise = fs.promises.readFile("./f1.txt");

pendingPromise.then(function(data){
    console.log(data+" ");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(data){
    console.log(data+" ");
})

