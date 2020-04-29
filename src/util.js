const axios = require("axios");

const getInsult = async () => {
    const res = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
    const {insult} = res.data;
    return insult;
};

module.exports = {
    getInsult
};
