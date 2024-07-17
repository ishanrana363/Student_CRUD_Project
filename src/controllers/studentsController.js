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

exports.studentUpdate = async (req,res)=>{
    try {
        let reqBody = req.body;
        let id = req.params.id;
        let filter  = {
            _id : id
        };
        let data =  await studentsModel.findByIdAndUpdate(filter,reqBody);
        return res.status(200).send({
            status:"success",
            msg : "Student Updated Successfully"
        });
    }catch (e) {

        return res.status(500).send({
            status: "fail",
            msg:"Internal Server Error"
        });
        
    }
};

exports.studentDelete = async (req,res)=>{
    try {
        let id = req.params.id;
        let filter  = {_id: id};
        await studentsModel.findByIdAndDelete(filter);
        return res.status(200).send({
            status:"success",
            msg:"Student Deleted Successfully"
        })
    }catch (e) {
        return res.status(500).send({
            status: "fail",
            msg:"Internal Server Error"
        })
    }
};

exports.studentSearch = async (req, res) => {
    try {
        let keyword = req.params.keyword ? decodeURI(req.params.keyword) : '';

        if (keyword) {
            let data = await studentsModel.find({
                name: { $regex: keyword, $options: 'i' } // Case-insensitive search
            });
            return res.status(200).send({
                status: "success",
                data: data
            });
        } else {
            return res.status(404).send({
                status: "fail",
                msg: "Keyword is missing"
            });
        }
    } catch (e) {
        console.error(e); // Log the error for debugging

        return res.status(500).send({
            status: "fail",
            msg: "Internal Server Error"
        });
    }
};