// An array is a speacial variablel , which can hold more than
// one value at a time

// The Array object let's you store multiple value in a single variable

var friends = ["zybra", "manoj", "ram", "sham"];
// document.writeln(friends[0]);
// document.writeln(friends[2]);
document.writeln(friends);
document.writeln("<br></br>");

var friend = new Array(["manoj", "ram", "sham"]);
document.writeln(friend);
var lengt = friends.length;
alert(lengt);

document.writeln(lengt);
document.writeln("<br></br>");
document.writeln(friends.sort());
friends.push("Mango");
document.writeln("<br></br>");
document.writeln(friends);

friends.pop("manoj");
document.writeln("<br></br>");
document.writeln(friends);
