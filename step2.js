const fsP = require("fs/promises")
const axios = require("axios");
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


async function webCat(url) {
  let resp;
  try {
    resp = await axios.get(url);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(resp.data.slice(0, 200));
}

function catOrWebcat(argv) {
  // built-in class to check if it's a url or not
  if (argv.startsWith("http://") || argv.startsWith("https://") ) {
    webCat(argv);
  } else {
    cat(argv);
  }
}

catOrWebcat(argv)
