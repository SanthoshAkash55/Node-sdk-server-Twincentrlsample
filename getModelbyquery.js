
const { getModelbyQuery } = require("./TwinCentralAPI");
     
// exports.getModelquery = async (req, res) => {
//     console.log(req.query,"rqrqrq")
//     const query = req.query.query
//   try {
//     const response = await getModelbyQuery(query); // get the modelName
//     // handle the request with the model here
//     res.send(response);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error loading the model");
//   }
// };


rl.question("# What's the query?", async(query) => {
  console.log(query,"query")

    const data  = await getModelbyQuery(query)
    console.log(data)
    console.log("#################################################################################");
    rl.close();
 
});