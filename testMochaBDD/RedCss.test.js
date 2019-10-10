const expect = require('chai').expect;
const assert =require('chai').assert;
const RedCss = require('../dist/RedCss.min');
const fs = require("fs");
const data = fs.readFileSync("./testMochaBDD/RedCss.run.js","utf8",function (err,data){console.log(err)});
console.log("data");
eval(data);