function showNotification(msg,style){
    $("#notification").show();
    $("#notificationText").text(msg);
    $("#notification").addclass(style);
    setTimeout(hideNotification, 3000);

}

function hideNotification(){
    $("#notification").hide();

}

//function Hide(){

//$("#onediv").hide();
//}

//function Show(){
//    $("onedive").show();

//}