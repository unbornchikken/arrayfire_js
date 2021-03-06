"use strict";
let Bluebird = require("bluebird");
let async = Bluebird.coroutine;
let fire = require("../../..");
let common = require("../common");

const numberOfPoints = 20000000;

let pi = async(function*(fire, deviceInfo) {
    fire.setDevice(deviceInfo.id);
    let AFArray = fire.AFArray;

    console.log("Calculating pi on device:\n");
    common.printDeviceInfo(deviceInfo);
    console.log("");

    let x = fire.randu(numberOfPoints, fire.types.dtype.f32);
    let y = fire.randu(numberOfPoints, fire.types.dtype.f32);
    let dist = yield fire.sqrtAsync((x.mul(x)).add(y.mul(y)));
    let numInside = yield fire.sumAsync(dist.lt(1));
    let piVal = (4.0 *  numInside) / numberOfPoints;

    console.log(`PI = ${piVal}`);
});

common.runOnAllPlatfroms(pi, "pi example");
