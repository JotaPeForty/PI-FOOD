//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { preDiet } = require("./src/CRUD/getdiets");


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.log("Loanding Diets.."); // eslint-disable-line no-console
    const preload = await preDiet();
    //console.log("%c", preload);
     console.log(`%s listening at ${process.env.PORT || 3001}`); // eslint-disable-line no-console
  });
});
