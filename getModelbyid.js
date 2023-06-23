
const { getModelId } = require("./TwinCentralAPI");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
     
// exports.getModelbyId = async (req, res) => {
//     console.log(req.query,"rqrqrq")
//     const Id = req.query.Id
//   try {
//     const response = await getModelId(Id); // get the modelName
//     // handle the request with the model here
//     res.send(response);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error loading the model");
//   }
// };


rl.question("# What's the Id ?", async(Id) => {
  console.log(Id,"Id")

    const data  = await getModelId(Id)
    console.log(data)
    console.log("#################################################################################");
    rl.close();
 
});