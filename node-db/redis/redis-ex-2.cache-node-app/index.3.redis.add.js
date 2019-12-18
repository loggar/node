//set up dependencies
const express = require("express");
const redis = require("redis");
const axios = require("axios");
const bodyParser = require("body-parser");

//setup port constants
const port_redis = process.env.PORT || 6379;
const port = process.env.PORT || 5000;

//configure redis client on port 6379
const redis_client = redis.createClient(port_redis);

//configure express server
const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Endpoint:  GET /starships/:id
//  @desc Return Starships data for particular starship id
app.get("/starships/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const starShipInfo = await axios.get(
      `https://swapi.co/api/starships/${id}`
    );

    //get data from response
    const starShipInfoData = starShipInfo.data;

    //add data to Redis
    redis_client.setex(id, 3600, JSON.stringify(starShipInfoData));

    return res.json(starShipInfoData);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.listen(port, () => console.log(`Server running on Port ${port}`));
