const ObjectId = require('mongoose').Types.ObjectId;

module.exports.validateIdMongo = async (id, message) => {
  let err = new Error();
  err.code = 400;
  
  if(!id){
    err.message = "you must add an id";
    throw err;
  }


  if(!ObjectId.isValid(id)){
    err.message = message ? message : "the ID is wrong";
    throw err;
  }

  return;
}