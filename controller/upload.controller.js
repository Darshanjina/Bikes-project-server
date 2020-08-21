var uploadFile = (req,res) =>{
    const fileObj = req.files[0];
    res.json({
        status:"OK",
        fileData:fileObj
    });
}

module.exports.uploadFile = uploadFile;