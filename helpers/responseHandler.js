module.exports = (res, error, message, data = null, status = 200) => {
    if(error){
        return res.status(status).json({
            status: !error,
            message,
            status: false,
            data,
        });
    }else{
        return res.status(status).json({
            status: !error,
            message,
            data,
        });
    }
};