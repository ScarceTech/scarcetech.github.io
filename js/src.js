var pressed;

window.onload =function(){
    pressed=false;
}

function showMenu(){
    if(!pressed){
        var list=document.getElementById("h-list-id");
        list.classList.add("h-list-anim");
        var listChilds=document.getElementsByClassName("line");
        listChilds[0].style.display="none";
        listChilds[1].style.display="none";
        listChilds[2].style.display="none";
        document.getElementsByClassName("cross")[0].style.display="block";
    }else{
        var list=document.getElementById("h-list-id");
        list.classList.remove("h-list-anim");
        var listChilds=document.getElementsByClassName("line");
        listChilds[0].style.display="block";
        listChilds[1].style.display="block";
        listChilds[2].style.display="block";
        document.getElementsByClassName("cross")[0].style.display="none";
    }
    pressed=!pressed;
}