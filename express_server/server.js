require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3030;

const OPENAI_API_ENDPOINT = "https://api.openai.com/v2/engines/davinci/completions";
// const OPENAI_API_KEY = env(OPENAI_KEY); 

app.get('/', (req, res) => {
    res.send(process.env.OPENAI_KEY);


});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
