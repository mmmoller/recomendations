var mongoose = require('mongoose');

var suggestionSchema = mongoose.Schema({

	name: String, // Nome da Informação
    category: String, // Categoria
    link: {type: Object, default: {}}, // {type: url}
    userinfo: {type: Object, default: {}}, // _id : {"grade": grade, "comment": comment}
    tag: String,

}, {minimize: false});

module.exports = mongoose.model('Suggestion', suggestionSchema);