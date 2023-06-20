
const allSquares= document.querySelectorAll(".square");

const clickedElements=[];

for(const x of allSquares){
    x.addEventListener('click', function(){
        // push element in clicked array 
        const idOfElement=  x.getAttribute("id");
       const innerHTMLofElement =x.innerHTML;
       if(innerHTMLofElement.includes('black') || innerHTMLofElement.includes('white')){
        if(clickedElements.length>0){
            clickedElements[0].removeAttribute("style");
            clickedElements.length=0;
        }
        clickedElements.push(x);
        var computedStyle = window.getComputedStyle(x);
        if (computedStyle.backgroundColor === "rgb(238, 238, 210)") {x.style.backgroundColor = "#f7f585";}
        if (computedStyle.backgroundColor === "rgb(118, 150, 86)") { x.style.backgroundColor = "#bbc940";}

       }

        
    })
}