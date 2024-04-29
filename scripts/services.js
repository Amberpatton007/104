
//constructor
function Services(title, price){
    this.title = title;
    this.price = price;
}
//validations
function isValid(service){
    let validation=true;
    if(services.title==""){
        validation=false
        alert("Please add service", "error");
    }

    if(services.price==""){
        validation=false
        alert("Please add price", "error");
    }

    return validation; //returning the result of the validation
}


    //register function
function register(){
    let inputService = document.getElementById("txtservice").value;
    let inputPrice = document.getElementById("txtprice").value;

 //use notification   
    let newService = new Services(inputService,inputPrice);
    if(isValid(newService)){
        showNotification("Service was registered", "Success");
        save(newService); //coming from store mngr
        $("input").val(""); //clears all the inputs
        
    }
    

}


