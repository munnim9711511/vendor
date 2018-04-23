var express = require('express');
var router = express.Router();
var vendor = require("../config/vendor");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/vendor-data-entry",(req,res,next)=>{

  var companyProfile = req.files.companyProfile;
  var authorizationLetter = req.files.authorizationLetter;
  var companyRegistration = req.files.companyRegistration;
  var gstRegistration = req.files.gstRegistration;
  var sharholdersID = req.files.sharholdersID;
  companyProfile.mv(`public/upload/${req.body.name}companyprofile.pdf`, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
  authorizationLetter.mv(`public/upload/${req.body.name}authorizationLetter.pdf`, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });

  var vendordb = new vendor({
    companyName:req.body.name,
    companyReg:req.body.reg_no,
    companyEmail:req.body.email,
    tel:req.body.contact1,
    mobile:req.body.contact2,
    address:req.body.address,
    state:req.body.state,
    city:req.body.city,
    zipCode:req.body.zip,
    Country:req.body.country,
    typOfBussiness:req.body.categories,
    companyProfile:`/upload/${req.body.name}companyprofile.pdf`,
    authorizationLetter:`/upload/${req.body.name}authorizationLetter.pdf`,
    copanyRegistration:`/upload/${req.body.name}companyRegistration.pdf`,
    GSTRegistration:`/upload/${req.body.name}gstRegistration.pdf`,
    sharholder:`/upload/${req.body.name}sharholdersID.pdf`


  });
  vendordb.save().then(() => console.log('data saved'));
});

module.exports = router;
