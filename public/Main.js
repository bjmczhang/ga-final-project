const path = require("path");
const fs = require("fs").promises;

const dirPath = path.join(__dirname, "../src/content");
const dirPathPages = path.join(__dirname, "../src/pages/content");

const getMetadataIndices = (acc, elem, i) => {
  if (/^---/.test(elem)) {
    acc.push(i);
  }
  return acc;
};

const parseMetadata = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    let obj = {};
    metadata.forEach((line) => {
      obj[line.split(":")[0].trim()] = line.split(":")[1].trim();
    });
    return obj;
  }
};

const parseContent = ({ lines, metadataIndices }) => {
  if (metadataIndices.length > 0) {
    let content = lines.slice(metadataIndices[1] + 1);
    return content.join("\n");
  }
};

const getPosts = async () => {
  try {
    const files = await fs.readdir(dirPath);
    let postlist = await Promise.all(
      files.map(async (file, i) => {
        try {
          const contents = await fs.readFile(`${dirPath}/${file}`, "utf8");
          const lines = contents.split("\n");
          const metadataIndices = lines.reduce(getMetadataIndices, []);
          const metadata = parseMetadata({ lines, metadataIndices });
          const content = parseContent({ lines, metadataIndices });

          let post = {
            id: i + 1,
            title: metadata.title || "No Title Given",
            author: metadata.author || "No Author Given",
            date: metadata.date || "No Date Given",
            tags: metadata.tags || "No Tags Given",
            content: content || "No Content Given",
          };
          return post;
        } catch (err) {
          console.error(`Error processing file ${file}:`, err);
          return null;
        }
      })
    );

    // Filter out any null elements that resulted from error handling
    postlist = postlist.filter((post) => post !== null);

    // console.log(postlist);
    let data = JSON.stringify(postlist);
    await fs.writeFile("src/posts.json", data);
  } catch (err) {
    console.log("Failed to list contents of directory: " + err);
  }
};

const getPages = async () => {
  try {
    const files = await fs.readdir(dirPathPages);
    let pagelist = await Promise.all(
      files.map(async (file, i) => {
        try {
          const contents = await fs.readFile(`${dirPathPages}/${file}`, "utf8");

          let page = { contents };
          console.log(contents);
          return page;
        } catch (err) {
          console.error(`Error processing file ${file}:`, err);
          return null;
        }
      })
    );

    // Filter out any null elements that resulted from error handling
    pagelist = pagelist.filter((page) => page !== null);

    console.log(pagelist);
    let data = JSON.stringify(pagelist);
    await fs.writeFile("src/pages.json", data);
  } catch (err) {
    console.log("Failed to list contents of pages: " + err);
  }
};

const getSelectedPosts = async () => {
  try {
    const files = await fs.readdir(dirPath);
    let selectedlist = await Promise.all(
      files.map(async (file, i) => {
        try {
          const contents = await fs.readFile(`${dirPath}/${file}`, "utf8");
          const lines = contents.split("\n");
          const metadataIndices = lines.reduce(getMetadataIndices, []);
          const metadata = parseMetadata({ lines, metadataIndices });
          const content = parseContent({ lines, metadataIndices });

          let post = {
            id: i + 1,
            title: metadata.title || "No Title Given",
            author: metadata.author || "No Author Given",
            date: metadata.date || "No Date Given",
            content: content || "No Content Given",
            tags: metadata.tags || "No Tags Given",
            selected: metadata.selected || "Not Selected",
          };
          return post;
        } catch (err) {
          console.error(`Error processing file ${file}:`, err);
          return null;
        }
      })
    );

    // Filter out any null elements that resulted from error handling
    selectedlist = selectedlist.filter((post) => post.selected === "true");

    let data = JSON.stringify(selectedlist);
    await fs.writeFile("src/selected.json", data);
  } catch (err) {
    console.log("Failed to list contents of selected posts: " + err);
  }
};

getPosts();
getPages();
getSelectedPosts();
