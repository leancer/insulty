const axios = require("axios");

const getInsult = async (lang = "english") => {
    const res = await axios.get("https://insulty-api.herokuapp.com/insult/"+ lang);
    let insult;
    if(res.data.status === "success")
    {
        insult = res.data.data;
    }else{
        insult = res.data;
    }
    return insult;
};

module.exports = {
    getInsult
};
