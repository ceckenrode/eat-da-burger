var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var s = 'SELECT * FROM ' + tableInput + ';';
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    eatBurger: function(tableInput, burger_name, cb) {
        var s = 'UPDATE ' + tableInput + "SET devoured=true WHERE burger_name = '" + burger_name + "';";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    addBurger: function(tableInput, burger_name, cb) {
        var s = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + burger_name + "', false );";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteBurger: function(tableInput, burger_name, cb) {
        var s = "DELETE FROM " + tableInput + " WHERE burger_name = '" + burger_name + "';";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    eatBurger: function(tableInput, burger_name, cb) {
        var s = "UPDATE " + tableInput + " SET devoured = 1 WHERE burger_name = '" + burger_name + "';";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    addBurger: function(tableInput, burger_name, cb) {
        var s = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUES ('" +burger_name+ "',false);";
        connection.query(s, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
