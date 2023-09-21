import fs  from 'fs'; // Import the fs module

const unlinkFiles = (filePaths)=> {
  // Use Promise.all to delete multiple files asynchronously
  return Promise.all(
    filePaths.map((filePath) => {
      return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(filePath);
          }
        });
      });
    })
  );
}

export  {
    unlinkFiles
}