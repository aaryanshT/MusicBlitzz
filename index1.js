var x=3;

function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box--hide");
            boxes[5].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}


// song
document.getElementById("card-"+x).addEventListener("click", newwindow);
// 

function newwindow() {
      var ID = this.id;
    //   module.exports = ID;
   

     

    console.log(ID);
    // window.location = './song/song.html';
    // var URL = './resources/images/' + ID + '.jpg';
    // console.log(URL);
   

}
  

document.querySelector(".right").addEventListener("click", open);
function open(){
 
    
        document.getElementById("card-"+x).removeEventListener("click", newwindow);
        x-=1;
        console.log(x);
        if(x==0)
        {
                 document.getElementById("card-7").addEventListener("click",newwindow);  
                 x=7;

        }
        else{
            document.getElementById("card-"+x).addEventListener("click", newwindow);    
    
        }
     
}
document.querySelector(".left").addEventListener("click", close);
function close()
{
 
        document.getElementById("card-"+x).removeEventListener("click", newwindow);
        x+=1;
        console.log(x);
        if(x==8)
        {
                 document.getElementById("card-1").addEventListener("click", newwindow);  
                 x=1;
        }
        else{
            document.getElementById("card-"+x).addEventListener("click", newwindow);    
        }
       
}

