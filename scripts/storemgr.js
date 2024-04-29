function save(item){
    let list = readItems();
    list.push(item);
    let val = JSON.stringify(list);
    localStorage.setItem("services",val);
}

function readItems(){
    let data = localStorage.getItem("services");
    if(!data){ //NO data??
        return [];//creating empty array
    }else{
        let list =JSON .parse(data);
        return list; //returning array
    }
}