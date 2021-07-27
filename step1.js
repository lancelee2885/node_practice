const fsP = require("fs/promises")
const argv = process.argv[2]

async function cat(path) {
  let contents;
  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.log("File Not Found");
    process.exit(1);
  }
  console.log("file contents", contents)
}

cat(argv)