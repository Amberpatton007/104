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
    <p>${pet.services}</p>
    </div>`;

}
    //HTML template for the cards

//Insert the cards into HTML div
    DIV.innerHTML= "<p> This is a test </p>";
}

function displayRow(){
    const TABLE = document.getElementById("petRows");
        let tr="";
        for(let i=0;i<petSalon.pets.length;i++){
            let pet=petSalon.pets[i];
            tr+=`
                <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>
                    <button onclick="deletePet(${i});"<i class= "fa-solid fa-trash"></i></button></td>`;

        }
        TABLE.innerHTML=tr;
    }

function displayTypeCount(){

    }

function displayServiceCount(){
    //declare the variation
    let haircuts=0;
    let bath=0;
    let style=0;
    let color=0;
    let dematting=0;
    let nailtrimming=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSAlon.pets[i];
        if(pet.service.toLowerCase()=="haircuts"){
            haircuts++;
        }
    }

    document.getElementById("total")
}