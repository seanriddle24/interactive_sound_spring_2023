// hello weather idiots

const maxApi = require("max-api");
const weather = require('openweather-apis');
weather.setAPPID("0ac9dcae590d33e1bfae23cbd87c013e");
weather.setLang("en");
weather.setUnits("imperial");



maxApi.addHandler("denver", () => {
  weather.setCity("denver");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("new york", () => {
  weather.setCity("new york");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("portland", () => {
  weather.setCity("portland");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("seoul", () => {
  weather.setCity("seoul");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("houston", () => {
  weather.setCity("houston");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});
maxApi.addHandler("novosibirsk", () => {
  weather.setCity("novosibirsk");
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});
