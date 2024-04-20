function displayCards(){
//get the HTML div to dosplay cards
const DIV = document.getElementById("pets"); //this will not change
let card="";
//travel the array (for loop)

for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pet[i];
    card+=`
    <div class="pet">
    <p>${pet.name}</p>
    </div>`;

}
    //HTML template for the cards

//Insert the cards into HTML div
    DIV.innerHTML= "<p> This is a test </p>";
}

function displayRow(){


}
