const obj = {
    Paris : "Skopje",
    Zurich : "Amsterdam",
    Prague : "Zurich",
    Barcelona : "Berlin",
    Kiev : "Prague",
    Skopje : "Paris",
    Amsterdam : "Barcelona",
    Berlin : "Kiev",
    Berlin : "Amsterdam"
};

const visitPlace = {
    Amsterdam : false,
    Kiev : false,
    Zurich : false,
    Prague: false,
    Berlin : false,
    Barcelona : false
}

let count = 0;
let current_city = "Kiev";
let str = ""
while(count < 6){
    count++;
    visitPlace[current_city] = true;
    str  += current_city;
    str += "->";
    current_city = obj[current_city];
}
console.log(str);