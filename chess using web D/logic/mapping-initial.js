

//selecting files using dom and storing into array

const arrayOfFiles= document.querySelectorAll(".files");


const filesNameArray = ["a","b","c","d","e","f","g","h"];

let fileNumber=0;

for(const i of arrayOfFiles){
    let counter=1;
    for(const el of i.children){
        el.setAttribute("id", filesNameArray[fileNumber] +(9-counter) );
        counter++;
    }
    fileNumber++;
}
