"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDBService = void 0;
var config_1 = require("../config");
var MongoClient = require("mongodb");
var MongoDBService = /** @class */ (function () {
    function MongoDBService(url, databaseName) {
        this.url = url;
        this.databaseName = databaseName;
    }
    MongoDBService.prototype.createDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) { console.log('DB Connected!'); db.close(); resolve(); })
                .catch(function (err) {
                console.log('DB Connection Error: ${err.message}');
                reject(err.message);
            });
        });
    };
    MongoDBService.prototype.createCollection = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.createCollection(collectionName).then(function (result) {
                    console.log("Collection ".concat(collectionName, " created!"));
                    db.close();
                    resolve();
                }, function (error) {
                    throw error;
                })
                    .catch(function (error) {
                    db.close();
                    reject(error.message);
                })
                    .finally(function () {
                    //db.close();
                });
            }, function (error) {
                console.log(error);
                reject(error.message);
            });
        });
    };
    MongoDBService.prototype.insertOneCollection = function (collectionName, collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).insertOne(collection, {
                /*useUnifiedTopology: true,
                useNewUrlParser: true,*/
                }).then(function (collection) {
                    if (collection.insertedCount != 1) {
                        throw new Error("Insert failed!");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Connection Error: ".concat(err.message));
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoDBService.prototype.listCollection = function (collectionName, query1, query2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).find(query1, query2).toArray().then(function (collection) {
                    db.close();
                    resolve(collection);
                }).catch(function (err) {
                    console.log("DB Connection Error: ".concat(err.message));
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoDBService.prototype.updateOneCollection = function (collectionName, query, newValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                console.log(newValues);
                return dbo.collection(collectionName).updateOne(query, newValues).then(function (collection) {
                    console.log(collection);
                    if (collection.modifiedCount == 0) {
                        throw new Error("Modification failed!");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Error: ".concat(err.message));
                    //error = err;
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoDBService.prototype.deleteOneCollection = function (collectionName, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).deleteOne(query).then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Delete failed!");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Connection Error: ".concat(err.message));
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoDBService.prototype.deleteCollection = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).drop().then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Delete failed!");
                    }
                    db.close();
                    resolve(collection);
                }).catch(function (err) {
                    console.log("DB Connection Error: ".concat(err.message));
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    return MongoDBService;
}());
exports.mongoDBService = new MongoDBService(config_1.URL, config_1.DATABASENAME);
