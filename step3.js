const fsP = require("fs/promises")
const axios = require("axios");
const firstArg = process.argv[2]
const newFile = process.argv[3]
const pathOrUrl = process.argv[4]

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

function checkArg(firstArg) {
  // built-in class to check if it's a url or not
  if (checkUrl) {
    webCat(firstArg);
  } else if (firstArg === "--out") {
      if(checkUrl(pathOrUrl){
          webCat()
      })
    catWrite(path, filename)
  } else {
    cat(firstArg);
  }
}

function checkUrl(arg) {
    return (arg.startsWith("http://") || arg.startsWith("https://")) 
}

checkArg(firstArg)
