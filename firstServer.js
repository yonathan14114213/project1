const dataDal= require('./firstDAL.js');
const getData = async () => {
const data = await dataDal.getData();
return data;
};
module.exports = {getData}