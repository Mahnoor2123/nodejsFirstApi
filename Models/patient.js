const mongoose = require ("mongoose");

const patient = new mongoose.Schema({
    name:
    {
        type:String,
        min:4,
        max:30,
        require:true,
        },
        disease:
        {
            type:String,
            require:true,
        },
        doctor:
        {
            type: String,
            require: true,
        },

})
module.exports = mongoose.model("patient", patient)