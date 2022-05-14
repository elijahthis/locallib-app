 var async= require("async");
   var fs=require("fs");
var  path=require("path");
exports.getfiles=async (req,res,next)=>{
   
const directoryPath="/storage/";
    var musicArray=[];
async function fromDir(startPath, filter){
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }
    var files = await fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        let filename = path.join(startPath, files[i]);
         fs.access(filename,fs.constants.R_OK,(err)=>{
       
        if(err){
            console.log("Private");
        }
        else{
             var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); 
        }
         else if (filename.endsWith(filter)) {
            let fileObj=path.parse(filename);
/*            );*/
            musicArray.push(fileObj);
     console.log(musicArray)
        }
        }
    });
    return musicArray;
};
return musicArray;
}
/*console.log("Outside");
var out=Date.now();
async.parallel({
  local: function (callback){
    setTimeout(()=>{
          var a=fromDir(directoryPath,"mp3");    
      callback(null,1);

  },200);
  }
}).then(results=>{
    console.log(results);
    console.log(typeof(results));
    var _res=results.local;
    console.log(_res);
    console.log(typeof(_res));
    //console.log(_res.length);
    res.render("music",{
        lmusics:results.local
    })    
    }).catch(err=>{
        console.log(err);
    });
 */   
    
/*async.parallel({
    local: function(callback){
    setTimeout(()=>{
          var a=fromDir(directoryPath,"mp3"); 
          return a;

  },200);
  }
},(err,results)=>{
    console.log(results);
    console.log(typeof(results));
    var _res=results.local;
    console.log(_res);
    console.log(typeof(_res));
    //console.log(_res.length);
    res.render("music",{
        lmusics:results.local
            })    
})    
    
*/ 
const getfiles=async ()=>{
    return fromDir(directoryPath,".mp3");
}
  
const renderFiles=(files)=>{
    res.get("/",(req,res,next)=>{
        res.render("music",{
            lmusics:files
        });
    })
}

getfiles()
.then(files=>{renderFiles(files)})
.catch(err=>{console.log(err)});
}




