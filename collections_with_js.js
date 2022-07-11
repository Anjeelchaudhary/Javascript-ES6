//here if the user entered name matches with the name presetn in array then it says welcome otherwise
//it says sorry see you next time  

var guest = ["Pradeep", "Arjun", "Prakash", "Sameer", "Sabin"];
var gName = prompt("Enter your name");

if (guest.includes(gName)) {
    console.log("Welcom to party");
} else {
    console.log("Sorry see you  next time");
}