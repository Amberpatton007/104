function showNotificiation(msg,style){
    $("notification").show();
    $("notification").text(msg);
    $("notification").addclass(style);
    setTimeout(hideNotification, 3000);

}

function hideNotification(){
    $("notification").hide();

}

//function Hide(){

//$("#onediv").hide();
//}

//function Show(){
//    $("onedive").show();

//}