const fs = require("fs");

//Reading files
/* 
fs.readFile("./docs/doc.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//Writing and creating files.
fs.writeFile(
  "./docs/doc.txt",
  "By God's grace, I will master it before end of 2022.",
  () => {
    console.log("File was written.");
  }
);

fs.writeFile("./docs/doc_2.txt", "With perseverance.", () => {
  console.log("File was written.");
});
 */

// Creating directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Folder created.");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted");
  });
}

// Deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted.");
  });
}

