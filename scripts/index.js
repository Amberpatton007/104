let petSalon = {

    name: "The Fashion Pet",
    phone: "999-999-9999",
    adress: {
        country:"US",
        city:"San Francisco",
        zipCode:"12345",
    },
    pets: [
        {
            name:"Storm",
            age: 4,
            gender:"Female",
            service: "nail trim",
            breed: "German Shephard/Beagle Mix",
        },
        {
            name: "Rogue",
            age: 1,
            gender:"Female",
            service: "Wash, cut, shave",
            breed: "maltese",
        },
        {
            name: "Gunnar",
            age: 6,
            gender:"Male",
            service: "Wash, nail trim",
            breed: "mutt",
        },
    ]
}

//*function getSum(){
//    let pets = 0;
//    for(let i = 0;i<3;i++)
//   {
//        pets=pets=petSalon[i].names;
//    }
//    console.log(names)
//}

function getSum(){
    let total = 0;
    for(let i = 0; i<petSalon.pets.length;i++)
    {
        total = total+petSalon.pets[i].pets;

    }
//    let amount = total+petSalon.pets.length;
    //totalAge+=petSalon.pets[i].age is another way to say average age = average age
//    console.log("the average age of the pets" + total);

}