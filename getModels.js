
const { getModels } = require("./TwinCentralAPI");
     
// exports.models = async (req, res) => {
//   // console.log(req.body, "reqmodel");
//   try {
//     const model = await getModels(); // get the model
//     // handle the request with the model here
//     res.send(model);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error loading the model");
//   }
// };


getModels()
  .then(response => {
    const children = response.models[0];
    console.log(children,"cccc");
  })
  .catch(error => console.error(error));