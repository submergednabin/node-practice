exports.getPackages = async (req, res) => {
    try{
        res.status(200).json({
            message:'You can now get the requested packages for your request',
        })
    }catch(error){
        res.status(404).json({
            status:'fail',
            message:error
        })
    }
}

exports.bookPackage = async (req, res) =>{
    try{
        res.status(201).json({
            message: "New Bookings added for the post request."
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

exports.allPackages = async (req, res) => {
        res.status(404).json({
            status:'fail',
            message:"invalid path"
        })
    
}