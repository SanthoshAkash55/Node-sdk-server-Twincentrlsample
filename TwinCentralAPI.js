const axios = require('axios');
const https = require('https');
const request = require('request');
require('dotenv').config();

const eotGatewayUrl = "https://107.22.3.238/eot"

const eotHeaders = {'content-type': 'application/json','Authorization':process.env.AUTHORIZATION}
    
    
    
exports.authentication = async(EmailAddress,password) =>{
       console.log(EmailAddress,password,"EmailAddress,password")
       try {
        const payload = {
            "EmailAddress":EmailAddress,
            "password":password
          };
          const config = {
            httpsAgent: new https.Agent({
              rejectUnauthorized: false,
            }),
          };
        const response = await axios.post(`${eotGatewayUrl}/user/authenticate`,payload,config);
        // const token = response.data.token;
        // eotHeaders.Authorization = token;
        // return response.data;
       console.log(response,"auth");
      } catch (error) {
        // console.log(error.response.data,"console.log(error.response.data");
        // return error.response.data
        console.log(error,"err in auth");
      }
    }

////User-API

  exports.getUserbyId = async(Id) =>{
          console.log(Id,"idid")
      try {
            const config = {
              headers: eotHeaders,
              httpsAgent: new https.Agent({
                rejectUnauthorized: false,
              }),
            };
            const response = await axios.get(`${eotGatewayUrl}/eot/User/${Id}`, config);
            return response.data;
          } catch (error) {
            console.log(error.response,"err in model");
          }
    }


    exports.getModel = async() =>{
       
     try {
            const config = {
              headers: eotHeaders,
              httpsAgent: new https.Agent({
                rejectUnauthorized: false,
              }),
            };
            const response = await axios.get(`${eotGatewayUrl}/model/tree`, config);
            return response.data;
          } catch (error) {
            console.log(error.response,"err in model");
          }
    }
 

    exports.getModelByName = async(modelName) =>{
        // console.log("getModelByName",modelName,eotHeaders)
        try {
            const config = {
                headers: eotHeaders,
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            };
            const response = await axios.get(`${eotGatewayUrl}/Model/modelByName/${modelName}`, config);
            return response.data;
        } catch (error) {
            console.log(error.response.data,"err in getModelByName");
        }
    }
    

    exports.getModelbyassetid = async(assetModelId) =>{
        // console.log("getModelByName",modelName,eotHeaders)
        try {
            const config = {
                headers: eotHeaders,
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            };
            const response = await axios.get(`${eotGatewayUrl}/Model/children/${assetModelId}`, config);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data,"err in getModelbyassetid");
        }
    }

    exports.getModels = async() =>{
        
     try {
            const config = {
              headers: eotHeaders,
              httpsAgent: new https.Agent({
                rejectUnauthorized: false,
              }),
            };
            const response = await axios.get(`${eotGatewayUrl}/Model/Models`, config);
            // console.log(response.data);
            return response.data;
          } catch (error) {
            console.log(error.response.data,"err in models");
          }
    }


    exports.getModelId = async(Id) =>{
        // console.log("getModelByName",modelName,eotHeaders)
        try {
            const config = {
                headers: eotHeaders,
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            };
            const response = await axios.get(`${eotGatewayUrl}/Model/${Id}`, config);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data,"err in getModelbyassetid");
        }
    }

    exports.getModelbyQuery = async(query) =>{
        // console.log("getModelByName",modelName,eotHeaders)
        try {
            const config = {
                headers: eotHeaders,
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            };
            const response = await axios.get(`${eotGatewayUrl}/Model/${query}`, config);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data,"err in getModelbyassetid");
        }
    }
//request method is using
// exports.getModel = async () => {
//     console.log("model");
//     try {
//       const options = {
//         url: `${eotGatewayUrl}/model/tree`,
//         headers: eotHeaders,
//         rejectUnauthorized: false,
//       };
//       request.get(options, (error, response, body) => {
//         if (error) {
//           console.log(error);
//         } else if (response.statusCode !== 200) {
//           console.log(`Error: ${response.statusCode} - ${response.statusMessage}`);
//         } else {
//             const data = JSON.parse(body);
//           console.log(data);
//           return data;
//         }
//       });
//     } catch (error) {
//       console.log(error, "err in model");
//     }
//   };

  
  
  
  
  