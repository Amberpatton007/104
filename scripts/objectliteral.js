let petSalon = {

    name: "the fashion pet",
    phone: "999-999-9999",
    adress: {
        country:"US",
        city:"San Francisco",
        zipCode:"12345",
    },
    pets: [
        {
            name:"Scooby",
            age: 80,
            gender:"male",
        },
        {
            name: "Scrappy",
            age: 60,
            gender:"male"
        },
        {
            name: "Tweety",
            age: 85,
            gender:"female",
        },
        {
            name:"Sylvester",
            age:85,
            gender:"male",
        },
    ]
}
//just show the name of the pet
console.log(petSalon.pets[0].name)

//calculate the average age of the pets

function getAverage(){
    let totalAge = 0;
    for(let i = 0; i<petSalon.pets.length;i++)
    {
        totalAge=totalAge+petSalon.pet[i].age;

    }
    let averageAge = totalAge/petSalon.pets.length;
    //totalAge+=petSalon.pets[i].age is another way to say average age = average age
    console.log("the average age of the pets" + averageAge);

}


//length is how many arrays(in this case, pets)
//constructor