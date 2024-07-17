exports.studentCreate = async (req,res)=>{
    try {
        res.send({
            status:"success"
        })
    } catch (error) {
        res.status({
            status:"fail"
        })
    }
}