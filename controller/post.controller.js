var post = require('../model/post.schema');

function insert(req,res){
    var postData = new post({
        cat_id:req.body.cat_id,
        cat_name:req.body.cat_name,
        title:req.body.title,
        summary:req.body.summary,
        page_url:req.body.page_url,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc,
        img_name:req.body.img_name
    });

    postData.save()
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
    post.find()
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

function postdetail(req,res){
    post.find()
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
    post.deleteOne({_id:req.body._id})
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
    post.updateOne({_id:req.body._id},{
        cat_id:req.body.cat_id,
        cat_name:req.body.cat_name,
        title:req.body.title,
        summary:req.body.summary,
        page_url:req.body.page_url,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc,
        img_name:req.body.img_name
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


function sort(req,res){
    post.find(req.body.query)
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

module.exports.insert = insert;
module.exports.select = select;
module.exports.remove=remove;
module.exports.update=update;
module.exports.postdetail = postdetail;
module.exports.sort= sort;


