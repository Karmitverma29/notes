const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://karmitverma:karmit@cluster0.xj4aelf.mongodb.net/notesapp?retryWrites=true&w=majority');

module.exports={
    connection
}

