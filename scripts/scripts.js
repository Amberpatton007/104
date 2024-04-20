//var colors =["white", "black", "blue", "green"];// <-- this is the index

//for (var i = 0; i <colors.length; i++)// i=i+1 i=index, if you want it to be 2 steps, you add i=i+2 etc.
//{
//console.log(colors[i]);

//} The example of for loops

var globalVariable = "hi Im a global variable"; //this is a global variable that functions anywhere in the code

function myFunction(){
    var localVariable = "hi Im a local variable";//localvaruables only work inside the function
    console.log(globalVariable);
    console.log(localVariable);
}

myFunction();//this is how you execute the function

//what is an object? Its something you want to build inside the code. to create an object, we need a recipe. it allows you to create as many objects as you want

//object literal The attributes: name, email, grades101, etc are the recipe.
let student1 = {
    name: "Kevin",
    email: "kevin@gmail.com",
    grades101: 10,
    grades102: 8,
    favSport: "futbol",
}

let student2 = {
    name: "Blake",
    email: "Blake@gmail.com",
    grades101: 8,
    grades102: 10,
    favSport: "Hunting",
}
let students = [student1, student2];
    console.log(students);
    console.log(student1.name);//try to get the email address from students and console log it.
    console.log(student1.email, student2.email);

    //display the sum all the grades of the 101

    function getSum(){
        let grades = 0;
        for(let i = 0;i<2;i++)
        {
            grades=grades=students[i].grades101;
        }
        console.log(grades)
;    }
getSum()

if(student2.name == "Blakea"){
    
    console.log("look at me",student2.name)
}else{
    console.log("Blakea not found")
}