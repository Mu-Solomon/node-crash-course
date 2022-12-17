const fs = require("fs");

const readStream = fs.createReadStream("./docs/large_doc.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/new_large_doc.txt");

/* readStream.on("data", (chunk) => {
  console.log("------ NEW DATA -------");
  console.log(chunk);

  writeStream.write("\n NEW DATA \n");
  writeStream.write(chunk);
}); */

// Doing the same as the above

readStream.pipe(writeStream);
