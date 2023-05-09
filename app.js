// var resp = "hello welcome to prime nodejs academy".split(' ').map((word, index) =>{
//    return  word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()
//   })
// // console.log(resp);
// console.log(resp.join(' '));

// .split - to seperate by
//  .slice - to remove the first
//  .join - to couple them back and seperate with space

import { createServer } from 'http';
var server = createServer(function(req, res){
    res.end('Hello world');
})

server.listen(3000, function(){
    console.log('The server is up and running')
})