var topdiv = document.querySelector(".top-container");
topdiv.addEventListener("mouseover",function(event){
    var presentdiv = event.target.closest('.flex-slide');
    var presentdiv_heading = presentdiv.querySelector('.heading');
    var presentdiv_content = presentdiv.querySelector('.content');
    presentdiv_heading.style.transform = "rotate(0deg)";
    presentdiv_heading.style.top = " 10%";
    presentdiv_content.style.opacity = "1";
})
if(window.innerWidth<=768){
    topdiv.addEventListener("mouseout",function(event){
        var presentdiv = event.target.closest('.flex-slide');
        var presentdiv_heading = presentdiv.querySelector('.heading');
        var presentdiv_content = presentdiv.querySelector('.content');
        presentdiv_heading.style.transform = "rotate(0deg)";
        presentdiv_heading.style.top = " 50%";
        presentdiv_content.style.opacity = "0";
    })
}
else if(window.innerWidth>768 && window.innerWidth<=1023){
    topdiv.addEventListener("mouseout",function(event){
        var presentdiv = event.target.closest('.flex-slide');
        var presentdiv_heading = presentdiv.querySelector('.heading');
        var presentdiv_content = presentdiv.querySelector('.content');
        presentdiv_heading.style.transform = "rotate(0deg)";
        presentdiv_heading.style.top = " 50%";
        presentdiv_content.style.opacity = "0";
    })
}
else{
    topdiv.addEventListener("mouseout",function(event){
        var presentdiv = event.target.closest('.flex-slide');
        var presentdiv_heading = presentdiv.querySelector('.heading');
        var presentdiv_content = presentdiv.querySelector('.content');
        presentdiv_heading.style.transform = "rotate(90deg)";
        presentdiv_heading.style.top = " 50%";
        presentdiv_content.style.opacity = "0";
    })
}

function hire_me_now(){
    document.querySelector(".hire-me").style.display='block';
}
function cancel(){
    document.querySelector(".hire-me").style.display='none';
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