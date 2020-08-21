var mongoose = require('mongoose');

var schema = mongoose.Schema({
    img_name:{
        type:String,
        require:true
    },
    name:{
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
    }
});

module.exports = mongoose.model('category',schema);