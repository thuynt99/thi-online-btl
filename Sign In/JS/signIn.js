$(document).ready(function(){
    $("#signIn").on('click', checkSignIn);
})
function checkSignIn(){
    // var user = document.getElementById("user");
    // var pass = document.getElementById("pass");
    // if(user == "thuynt" && pass == "123"){
    //     alert("Dang nhap thanh cong");
    // }
    debugger
    $.ajax({
        url: "/api/authenticate",
        success: function (result){
                alert("user: " + user);
        },
        error: function(){
            alert("error")
        }
    })
}
