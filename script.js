let total_classes = prompt("Enter total numner of classes :");

let attended_classe = prompt(
  "Enter the number of classes attended by the student"
);

let medical_condition = prompt(
  "Enter if the student has any medical condition or not?(Y/N)"
);

let attandance = (100 * attended_classe) / total_classes;

if (medical_condition == "Y") {
  if (attandance < 60) {
    console.log("False");
  } else {
    console.log("True");
  }
} else if (medical_condition == "N") {
  if (attandance < 75) {
    console.log("False");
  } else {
    console.log("True");
  }
}
