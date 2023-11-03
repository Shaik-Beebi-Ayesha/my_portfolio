function download_resume(){

}

// const showmenu = () =>{
//     document.querySelector(".menu").style.display="";
// }

var my_menu_icon = document.getElementById("menu_icon");
my_menu_icon.addEventListener("click",function(){
    console.log("helo");
    var toshow = document.querySelector(".menu");
    if(toshow.style.display === 'none'){
        toshow.style.display = 'block';
    }
    else{
        toshow.style.display = 'none';
    }
})

function calltwo(){
    hide_menu();
    download_resume();
}


function hide_menu(){
    document.querySelector(".menu").style.display ='none';
}