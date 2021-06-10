let fs = require("fs");
let extensions = require("./extensions");

let testFolderPath = "./testing";
let rfilePath = testFolderPath;

//function that gives content of directory


let contents = fs.readdirSync(testFolderPath);

for(let i=0; i<contents.length; i++){

    let File = contents[i];
    sortFile(File);
}

function sortFile(File){

    let ext = File.split(".")[1];

    if( ext!= undefined ){

    let folderName = getFolderName(ext);

    let FolderPath = testFolderPath + "/" + folderName;

    if(! fs.existsSync(FolderPath)){

        fs.mkdirSync(FolderPath);
    }

    let sourcePath = rfilePath + "/" + File;
    let destPath = FolderPath + "/"+ File;

    fs.copyFileSync(sourcePath, destPath);

    fs.unlinkSync(sourcePath);

   }

   else {

    for(let key in extensions){
        if(key == File){
           // console.log(key);
           return;
        }
    }
    
    let delFilePath = rfilePath;
    rfilePath = rfilePath + "/" + File;
    
    readFolder(File,rfilePath);
    fs.rmdirSync(rfilePath);
    rfilePath = delFilePath;

   }
   
}

function getFolderName(ext){

    for( let key in extensions){

        if(extensions[key].includes(ext)){
            return key;
        }
    }
}



function readFolder(File,rfilePath){

let rcontents = fs.readdirSync(rfilePath);

for(let i=0; i<rcontents.length; i++){

    let File = rcontents[i];
    //let Path = rfilePath
    sortFile(File);
}

}

// function rsort(File, Path){


// }

