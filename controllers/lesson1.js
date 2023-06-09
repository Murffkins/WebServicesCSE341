const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all the 'contacts' data
const getAllData = async (req, res, next) => {
    // Uses 'getDb' instead of 'initDb'
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists); 
    });
};

// Get a single 'contact' data
const getSingleData = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({_id: userId});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// const danRoute = (req,res) => {
//     res.send("Daniel Murff");
//   };

// const brettRoute = (req,res) => {
//     res.send("Brett Murff");
//   };

//   const ryanRoute = (req,res) => {
//     res.send("Ryan Murff");
//   };

//   const tylerRoute = (req,res) => {
//     res.send("Tyler Murff");
//   };

//   const jaredRoute = (req,res) => {
//     res.send("Jared Murff");
//   };

module.exports = {
    // danRoute,
    // brettRoute, 
    // ryanRoute,
    // tylerRoute,
    // jaredRoute, 
    getAllData,
    getSingleData
};