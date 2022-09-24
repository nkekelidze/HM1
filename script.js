
//task1

let user = {
    firstname: "giorgi",
    lastname:"smith",
    age: 25,
    studentstatus: "active"
};
console.log(user.studentstatus);


//task2

let mylist =[ "apples", "oranges", "bananas", "pears"];

for(let x=0; x<4; x++) {
    console.log(mylist[x]);
}
let i=0;
while(i < mylist.length){
    console.log(mylist[i]);
    i++;
}

//task3

let mynumbers = [2, 5, 10, 4, 9];
for (let a=0; a<mynumbers.length; a++){
if (mynumbers[a]>5){
    console.log(mynumbers[a]);
}
}

//task4

let array = ["watermelon", "pear", 10, 45, 50, "apple", "banana"]
for(let a of array){
    if(typeof a=="string"){
        console.log(a);
    }
}

//task6

let array1 =[[2, -3, 5, 10],[25, -24, -11, 100],[-6, -7, 10]]
for(let a of array1[0]){
    if(a>0){
        console.log(a);
    }
}
for(let a of array1[1]){
    if(a>0){
        console.log(a)
    }
}
for(let a of array1[2]){
    if(a>0){
        console.log(a);
    }
}

//task7
let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for(let a of array2){
    if (a%2 ==0){
        console.log(a);
    }
}
for(let a of array2){
    if (a%2 ==1){
        console.log(a);
    }
}


//task8
let usernames = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
 for(let i=0; i <usernames.length; i++){
    if(user[i].status==true){
        console.log(usernames[i]);
    }
 }
