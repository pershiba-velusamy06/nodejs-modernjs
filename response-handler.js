
import fs from 'fs/promises';



export const resHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  
};

