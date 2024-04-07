//* faulty calculator //////////////////

let add = "addition";
let sub = "subtraction";
let mul = "multiplication";
let div = "division";
let first;
let second;
let ans;
let percent = Math.floor(Math.random() * 100);
let choice = prompt("select arragmatics : addition, subtraction, multiplication, division ");

function result(answer) {
    document.write("the ans is: " + answer);
}



if (choice == add) {
    if (percent > 15) {
        first = prompt("type first number to add");
        second = prompt("type second number to add");
        ans = parseInt(first) + parseInt(second);
    }
    else {
        first = prompt("type first number to add");
        second = prompt("type second number to add");
        ans = parseInt(first) - parseInt(second);
    }

}
else if (choice == sub) {
    if (percent > 15) {
        first = prompt("type first number to sub");
        second = prompt("type second number to sub");
        ans = parseInt(first) - parseInt(second);
    }
    else {
        first = prompt("type first number to sub");
        second = prompt("type second number to sub");
        ans = parseInt(first) * parseInt(second);
    }

}
else if (choice == mul) {
    if (percent > 15) {
        first = prompt("type first number to mul");
        second = prompt("type second number to mul");
        ans = parseInt(first) * parseInt(second);
    }
    else {
        first = prompt("type first number to mul");
        second = prompt("type second number to mul");
        ans = parseInt(first) + parseInt(second);
    }
}
else if (choice == div) {
    if (percent > 15) {
        first = prompt("type first number to div");
        second = prompt("type second number to div");
        ans = parseInt(first) / parseInt(second);
    }
    else {
        first = prompt("type first number to div");
        second = prompt("type second number to div");
        ans = parseInt(first) ** parseInt(second);
    }

}

result(ans);
