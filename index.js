const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { PORT = 3000 } = process.env;
const cors = require("./middlewares/cors");
const { errors } = require("celebrate");
const cookieParser = require('cookie-parser');
const routerStories = require("./routes/stories");
const routerTrips = require("./routes/trips");
const routerCountries = require("./routes/countries");
const routerContinents = require("./routes/continents");
const routerHashtags = require("./routes/hashtags");
const routerBestpics = require("./routes/bestpics");
const routerPictags = require("./routes/pictags")
const routerEntrance = require("./routes/entrance")
const { requestLogger, errorLogger } = require('./middlewares/loggers'); 

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/myfriendthewind", {
  useNewUrlParser: true,
});

app.use(requestLogger); 
app.use(cors);

app.use("/", routerEntrance)
app.use("/stories", routerStories);
app.use("/trips", routerTrips);
app.use("/countries", routerCountries);
app.use("/continents", routerContinents);
app.use("/hashtags", routerHashtags);
app.use("/bestpics", routerBestpics);
app.use("/pictags", routerPictags);

app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  res.status(err.statusCode
    ? err.statusCode
    : 500 ).send({message:
    err.message});
  next();
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
