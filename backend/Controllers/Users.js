const user = require("../modules/user");
const formidable = require("formidable");
const _ = require("lodash");

const fs = require("fs");

exports.getUserById = (req, res, next, id) => {
  user.findById(id).exec((err, User) => {
    if (err || !User) {
      return res.status(400).json({
        error: "No user was found in DB"
      });
    }
    req.profile = User;
    next();
  });
};

exports.createUser = (req,res) =>{


    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err , feilds , file) =>{
        if(err){
            return res.status(400).json({
                error : "Problem with image"
            })
        }

        const { username , latitude , longitude , class_name } = feilds;
        let contacts = new user(feilds);
        
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error : "File size too big"
                })
            }
            contacts.photo.data = fs.readFileSync(file.photo.path);
            contacts.photo.contentType = file.photo.type ;
        }
        contacts.save((err , contact ) =>{
            if(err){
                return res.status(400).json({
                    err : "Error saving the contacts"
                })
            }
            res.json(contact);
        })

    });

}

exports.UpdateContacts = (req,res) =>{


    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err , feilds , file) =>{
        if(err){
            return res.status(400).json({
                error : "Problem with image"
            })
        }

        
        let contacts = req.profile;
        
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error : "File size too big"
                })
            }
            contacts.photo.data = fs.readFileSync(file.photo.path);
            contacts.photo.contentType = file.photo.type ;
        }
        contacts.save((err , contact ) =>{
            if(err){
                return res.status(400).json({
                    err : "Error saving the contacts"
                })
            }
            res.json(contact);
        })

    });
}

exports.photo = (req, res, next) => {
  if (req.profile.photo.data) {
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
  next();
};


exports.DeleteContact = (req,res)=>{
    
  let product = req.profile;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the contact"
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedProduct
    });
  });

}


exports.getUserById_call = (req, res) => {
  req.profile.photo = undefined;
  return res.json(req.profile);
};