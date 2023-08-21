const service = require('./firstServer.js');
const getData = async (req, res) => {
const data = await service.getUsers();
await res.json(data);
};
module.exports = {getData}