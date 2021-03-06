/*
Copyright 2015 G�bor Mez� aka unbornchikken (gabor.mezo@outlook.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

"use strict";

let Bluebird = require("bluebird");
let _ = require("lodash");

function synchronify(fire, f) {
    return function () {
        var err;
        var res;
        let cb = function (e, r) {
            err = e;
            res = r;
            done = true;
        };

        let done = false;
        let args = _.toArray(arguments).concat(cb);

        f.apply(this, args);

        while (!done) fire._doEvents();

        if (err) throw err;

        return res;
    }
}

function installAsyncAndSync(fire, obj, name) {
    if (_.isUndefined(name)) {
        for (let key of _.keys(obj)) {
            installAsyncAndSync(fire, obj, key);
        }
        return;
    }

    let f = obj[name];
    if (_.isFunction(f)) {
        if (!_.isFunction(obj[name + "Async"])) {
            obj[name + "Async"] = function () {
                let self = this;
                let args = _.toArray(arguments);
                return new Bluebird(function (resolve, reject) {
                    let cb = function (e, r) {
                        if (e) {
                            reject(e);
                        }
                        else {
                            resolve(r);
                        }
                    };
                    args.push(cb);
                    f.apply(self, args);
                });
            };
        }
        obj[name + "Sync"] = synchronify(fire, f);
    }
}

function Ext(self) {

    installAsyncAndSync(self, self);
    installAsyncAndSync(self, self.AFArray);
    installAsyncAndSync(self, self.AFArray.prototype);

    _.extend(self, {
        end: -1,
        types: {
            dtype: require("./dtype"),
            dDype: require("./dtype"),
            source: require("./source")
        },
        Dim4: require("./dim4"),
        Seq: require("./seq"),
        Complex: require("./complex"),
        getDevices: function () {
            let current = this.getDevice();
            try {
                let count = this.getDeviceCount();
                let result = [];
                for (let i = 0; i < count; i++) {
                    this.setDevice(i);
                    let info = this.deviceInfo();
                    info.id = i;
                    result.push(info);
                }
                return result;
            }
            finally {
                this.setDevice(current);
            }
        }
    });
}

module.exports = Ext;