const studentsModel = require("../models/studentModels");



exports.studentCreate = async (req,res)=>{
    try {
        let reqBody = req.body;
        let data = await studentsModel.create(reqBody);
        return res.status(200).send({
            status: "success",
            data : data
        });
    }catch (e) {

        return res.status(500).send({
            status: "fail",
            msg:"Internal Server Error"
        })

    }
};

exports.allStudents = async (req,res)=>{
    try {
        let data = await studentsModel.find();
        return res.status(200).send({
            status:"success",
            data : data
        });
    }catch (e) {
        return res.status(500).send({
            status: "fail",
            msg:"Internal Server Error"
        })

    }
};
