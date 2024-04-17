// exemple 1
var hello = 'world';
console.log(hello);                                   
//exemple 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//exemple 3
var brendan = 'super cool';
print();
function print(){
    var brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//exemple 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// exemple 5
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
//exemple 6

console.log(food);

var mean = function() {
    food = "chicken";
    console.log(food);

    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
//exemple 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//exemple 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {}
            dojo.name = name;
         dojo.students = students ;
  
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}












