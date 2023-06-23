
const { getModelbyassetid } = require("./TwinCentralAPI");
     
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// exports.getModelassetId = async (req, res) => {
//     console.log(req.query,"rqrqrq")
//     const assetModelId = req.query.assetModelId
//   try {
//     const response = await getModelbyassetid(assetModelId); // get the modelName
//     // handle the request with the model here
//     res.send(response);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error loading the model");
//   }
// };


rl.question("# What's the assetModelId?", async(assetModelId) => {
  console.log(assetModelId,"assetModelId")

    const data  = await getModelbyassetid(assetModelId)
    console.log(data)
    console.log("#################################################################################");
    rl.close();
 
});