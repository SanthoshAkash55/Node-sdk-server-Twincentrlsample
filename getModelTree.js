
const { getModel } = require("./TwinCentralAPI");
const flatted = require('flatted');
     
// exports.model = async (req, res) => {
//   // console.log(req.body, "reqmodel");
//   try {
//     const model = await getModel(); // get the model
//     // handle the request with the model here
//     res.send(model);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error loading the model");
//   }
// };

getModel()
  .then(response => {
    const children = response[0];
    console.log(children);
  })
  .catch(error => console.error(error));