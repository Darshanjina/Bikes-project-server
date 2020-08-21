var sc = require('../model/category.schema');

function insert(req,res){
    var record = new sc({
        img_name:req.body.img_name,
        name:req.body.name,
        page_url:req.body.page_url,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc
    });

    record.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:'record inserted'
        });
    })
    .catch(()=>{
        res.json({
            status:"NOK",
            message:'record does not inserted'
        });
    })
};

function select(req,res){
    sc.find()
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

function clientdetail(req,res){
    sc.find()
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}


function details(req,res){
    sc.findOne({_id:req.body._id})
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

function remove(req,res){
    sc.deleteOne({_id:req.body._id})
    .then((data)=>{
        res.json({
            status:"OK",
            message:'record deleted'  
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:'failed to delete'
        });
    })
}

function update(req,res){
    sc.updateOne({_id:req.body._id},{
        img_name:req.body.img_name,
        name:req.body.name,
        page_url:req.body.page_url,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc
    })
    .then((data)=>{
        res.json({
            status:"OK",
            message:'record updated'  
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:'failed to update'
        });
    })
}


module.exports.insert = insert;
module.exports.select = select;
module.exports.details = details;
module.exports.remove = remove;
module.exports.update = update;
module.exports.clientdetail = clientdetail;