// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let studentInfo: Array<any> = [
  {StudentName:"Lucky",StudentSurname:"Masharane",StudentGrade:"10",StudentAge:"20"},
  {StudentName:"Goodman",StudentSurname:"Ngomane",StudentGrade:"12",StudentAge:"19"},
  {StudentName:"Blessing",StudentSurname:"Mhlongo",StudentGrade:"09",StudentAge:"23"},
  {StudentName:"Fayve",StudentSurname:"Mandonsela",StudentGrade:"12",StudentAge:"26"},
  {StudentName:"Evans",StudentSurname:"Mabaso",StudentGrade:"10",StudentAge:"25"},
  {StudentName:"Bongani",StudentSurname:"Ndlamini",StudentGrade:"11",StudentAge:"31"},
  {StudentName:"Mcendisi",StudentSurname:"Nkosi",StudentGrade:"10",StudentAge:"24"},
  {StudentName:"Proud",StudentSurname:"Malale",StudentGrade:"11",StudentAge:"24"},
  {StudentName:"December",StudentSurname:"Masharane",StudentGrade:"12",StudentAge:"30"},
  {StudentName:"Samkelo",StudentSurname:"Lusenga",StudentGrade:"11",StudentAge:"31"},
];

getAllInfo(studentInfo);
function getAllInfo(studentInfo){
  for( var x = 0; x < studentInfo.length; x++){
    console.log(studentInfo[x].StudentName + " | " + studentInfo[x].StudentSurname + " | " + " Grade "+studentInfo[x].StudentGrade + " | " + studentInfo[x].StudentAge );
    
  }
}

console.log("==============================================");
console.log("The youngest student ");

var smallest = 100;
var name, surname,grade = "";
let arr_list:Array<any> =[];

for(var i = 0; i < studentInfo.length; i++){
  if(studentInfo[i].StudentAge < smallest){
    smallest = studentInfo[i].StudentAge;
    name = studentInfo[i].StudentName;
    surname = studentInfo[i].StudentSurname;
    grade = studentInfo[i].StudentGrade;
  }
}
console.log(name + " | " + surname + " | " + " Grade " + grade + " | " + smallest);

// console.log(studentInfo[1].StudentName + " | " + studentInfo[1].StudentSurname + " | " + " Grade "+studentInfo[1].StudentGrade + " | " + studentInfo[1].StudentAge );
