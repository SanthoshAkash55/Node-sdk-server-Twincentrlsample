
const { getModelByName } = require("./TwinCentralAPI");
  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// exports.getModelname = async (req, res) => {
//     console.log(req.query,"rqrqrq")
//     const modelName = req.query.Name
//   try {
//     const response = await getModelByName(modelName); // get the modelName
//     // handle the request with the model here
//     res.send(response);
//   } catch (error) {
//     console.log(error, "err");
//    
//  res.status(500).send("Error loading the model");
//   }
// };


rl.question("# What's the modelName?", async(modelName) => {
  console.log(modelName,"modelName")

    const data  = await getModelByName(modelName)
    console.log(data)
    console.log("#################################################################################");
    rl.close();
 
});