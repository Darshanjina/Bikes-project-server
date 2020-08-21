var mongoose = require('mongoose');

var schema = mongoose.Schema({
    cat_id:{
        type:String,
        require:true
    },
    cat_name:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    summary:{
        type:String,
        require:true
    },
    page_url:{
        type:String,
        require:true
    },
    meta_title:{
    type:String,
    require:true
    },
    meta_desc:{
        type:String,
        require:true
    },
    img_name:{
        type:String,
        require:true

    }
});

module.exports = mongoose.model('post',schema);