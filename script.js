var my_menu_icon = document.getElementById("menu_icon");
my_menu_icon.addEventListener("click",function(){
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
    window.location.href = "#https://drive.google.com/file/d/1-tNfFBrg3ydovP_wnRC28eRlqz_KAzA0/view?usp=sharing";
}


function hide_menu(){
    document.querySelector(".menu").style.display ='none';
}

function validation(){
    var my_user_name =document.querySelector(".user_name").value;
    var user_mail_id =document.querySelector(".email_id").value;
    var user_message = document.querySelector(".message").value;
    if(my_user_name && user_mail_id && user_message){

    }
    else{
        window.alert("Please fill all fields");
    }
}


function hire_me_now(){
    document.querySelector(".hire-me").style.display='block';
}
function cancel(){
    document.querySelector(".hire-me").style.display='none';
}