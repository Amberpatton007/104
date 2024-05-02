function displayCards(){
//get the HTML div to display cards
const DIV = document.getElementById("pets"); //this will not change
let card="";
//travel the array (for loop)

for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pet[i];
    card+=`
    <div class="pet">
    <p>${pet.name}</p>
    <p>${pet.service}</p>
    </div>`;

}
    //HTML template for the cards

//Insert the cards into HTML div
    DIV.innerHTML= card;
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
                <td>${pet.typeofpet}</td>
                <td>${pet.price}</td>
                <button onclick="deletePet(${i});"<i class= "fa-solid fa-trash"></i></button>
                </td>`;

        }
        TABLE.innerHTML=tr;
    }

function displayTypeCount(){


    }

function displayServiceCount(){
    //declare the variables
    let haircuts=0;
    let baths=0;
    let styles=0;
    let color=0;
    let dematting=0;
    let nailtrimmings=0;
    let profits=0;
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        //get the current pet
        let pet = petSalon.pets[i];
        if(pet.service.toLowerCase()=="haircuts"){
            haircuts++;
        }
        if(pet.service.toLowerCase()=="baths"){
            baths++;
        }
        if(pet.service.toLowerCase()=="styles"){
            styles++;
        }
        if(pet.service.toLowerCase()=="colors"){
            color++;
        }
        if(pet.service.toLowerCase()=="demattings"){
            dematting++;
        }
        if(pet.service.toLowerCase()=="nailtrimmings"){
            nailtrimmings++;
        }
        profits=profits+pet.price
        
    }
        document.getElementById("totalhaircuts").innerHTML=haircuts;
        document.getElementById("totalbaths").innerHTML=baths;
        document.getElementById("totalstyles").innerHTML=styles;
        document.getElementById("totalcolors").innerHTML=color;
        document.getElementById("totaldemattings").innerHTML=dematting;
        document.getElementById("totalnailtrimmings").innerHTML=nailtrimmings;
        console.log(profits);
}