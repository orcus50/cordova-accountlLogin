
//On finish loading

var a;
var height;

document.body.onload = function (){
    
    document.getElementById("buttonHolder").classList.add("doSwipe");
    document.getElementById("fading").classList.add("fade");

    height = window.innerHeight;

};

function onResize(){
        
    var cur = document.getElementById("fading").style.display;

        if (cur == "none"){
            document.getElementById("fading").style.display = "block";
            document.getElementById("buttonHolder").style.top = "45vh";
            document.getElementById("buttonHolder").style.height = "35vh";
            document.body.style.backgroundSize = "100% "+(height)+"px;";
            
        }
        else{
            document.getElementById("fading").style.display = "none";
            document.getElementById("buttonHolder").style.top = "15vh";
            document.getElementById("buttonHolder").style.height = "80vh";
            document.body.style.backgroundSize = "100% "+(height)+"px;";
        }

}