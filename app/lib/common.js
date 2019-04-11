const crypto=require('crypto');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports={
  MD5_SUFFIX: 'pzhuweb',
  md5: function (str){
    var obj=crypto.createHash('md5');
    obj.update(str);
    return obj.digest('hex');
  },
  mkDir: function(){
    const time = new Date();
    return new Promise((resolve,reject)=>{
      fs.exists("static/upload/"+time.getFullYear()+'-'+(time.getMonth()+1),(exists)=>{
        if(!exists){
          fs.mkdir("static/upload/"+time.getFullYear()+'-'+(time.getMonth()+1),(err)=>{          
              if(err){          
                reject(false)
              }else{           
                resolve(true)
              }
          }) 
        }else{                    
            resolve(true)
        }
      })
    })
  },
  reName:function(oldPath){
    const time = new Date();
    const filedir = time.getFullYear()+'-'+(time.getMonth()+1);    
    return new Promise((resolve,reject)=>{
        let extName = "";
        const ext = path.parse(oldPath.originalname).ext;
        if(ext == ""){
          extName = ".jpg"
        }else{
          extName = ext;
        }        
        const newname = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+oldPath.filename+extName;
        const newPath ="static/upload/"+filedir+"/"+newname;  
        fs.rename(oldPath.path,newPath,(err)=>{
          if(err){           
            reject(err);
          }else{
            let picPath = "upload/" + filedir+"/" + newname;             
            resolve(picPath)
          }
        })
    })
  },  
  tokenCrypt:function(user_num){
    const token = jwt.sign({
      data: user_num,
      // 设置 token 过期时间
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2), // 60 seconds * 60 minutes * 2 = 2 hour
    }, "web")
    return token;
  },
  verifyToken:function(token){
    return new Promise((resolve,reject)=>{
      jwt.verify(token,"web",(err,decode)=>{
        if(err){
          reject(err)
        }else{
          resolve(decode)
        }
      });
    })
  }
};
