setTimeout(() => {
  console.log("This is a Timeout.");
  clearInterval(int);
}, 3000);

let int = setInterval(() => {
  console.log(__filename);
}, 1000);
