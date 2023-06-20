
const arrayOfPawn = [];

for(const i of filesNameArray){
     arrayOfPawn.push(document.getElementById(i+2));
     arrayOfPawn.push(document.getElementById(i+7));
}

for( const i of arrayOfPawn){
     i.addEventListener('click',function(){
         const currId= i.getAttribute("id");
         let change =currId[1];
         const stepsSquare=[];
         if(i.innerHTML.includes("white")){
            for(let i=0;i<2;i++){
                change++;
                stepsSquare.push(
               document.getElementById(currId[0]+change)
                );
             }
             console.log(stepsSquare);
         }
         if(i.innerHTML.includes("black")){
            for(let i=0;i<2;i++){
                change--;
                stepsSquare.push(
               document.getElementById(currId[0]+change)
                );
             }
             console.log(stepsSquare);
         }

         

     })
}