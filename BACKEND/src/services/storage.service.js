// cloude storage provider ka data ya code rehata hay 

var ImageKit = require("imagekit");
var mongoose = require("mongoose");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey :process.env.IMAGEKIT_PRIVATE_KET ,
    urlEndpoint :process.env.IMAGEKET_URL_ENDPOINT
});


function uploadfile(file){
    return new Promise((resolve , reject) => {
        imagekit.upload({
            file:file.buffer,
            fileName:"hello-song"
            // fileName:(new mongoose.Types.ObjectId().toString()),  //convet the random file name 
            // folder:'cohort-1'

        },(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}



module.exports = uploadfile;