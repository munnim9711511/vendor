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
   
 
   
  });
  authorizationLetter.mv(`public/upload/${req.body.name}authorizationLetter.pdf`, function(err) {
  
 

  });
  companyRegistration.mv(`public/upload/${req.body.name}companyRegistration.pdf`, function(err) {
   
   
  });
  gstRegistration.mv(`public/upload/${req.body.name}gstRegistration.pdf`, function(err) {

 
  
  });
  sharholdersID.mv(`public/upload/${req.body.name}sharholdersID.pdf`, function(err) {
    
 

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
  vendordb.save();
  res.redirect('https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/');
});

router.get("/vendor",(req,res,next)=>{
  res.render("vendor");
});
router.get("/vendor-info",(req,res,next)=>{
  vendor.find({},(err,resp)=>{
    res.send(resp);
  });
});
router.get("/vendor-info-detail/:id",(req,res,next)=>{
  const companyID = req.params.id;
  var data;

  vendor.find({"_id":companyID},(err,resp)=>{
   
  });


})
module.exports = router;
