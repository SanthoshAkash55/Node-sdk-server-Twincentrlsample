const { authentication } = require("./TwinCentralAPI");


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
     
// exports.auth = async (req, res) => {
//   console.log(req.body, "rb");
//   const EmailAddress = req.body.EmailAddress;
//   // console.log(EmailAddress,"emem")
//   const password = req.body.password;
//   try {
//     const result = await authentication(EmailAddress,password); // get the authentication result
//     // handle the result here
//     res.send(result);
//   } catch (error) {
//     console.log(error, "err");
//     res.status(500).send("Error authenticating");
//   }
// };

rl.question("# What's the tag EmailAddress ?", async(EmailAddress) => {

  rl.question("# What's the Password ?", async(Password) => {

    const data  = await authentication(EmailAddress, Password)
    console.log(data)
    console.log("#");
    console.log("#################################################################################");
    rl.close();
  });
});
