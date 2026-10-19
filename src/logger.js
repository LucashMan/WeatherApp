const { timestamp } = require("./utils.js");


const log = {
    info(message) {
        console.log(`[${timestamp()}] INFO : ${message}`);
    },

    error(message) {
        console.log(`[${timestamp()}] ERROR : ${message}`);
    },
};

module.exports = { log };