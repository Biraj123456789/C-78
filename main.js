name_of_the_student_array =[];
function submit()
{
var name_1=document.getElementById("n1").value;
var name_2=document.getElementById("n2").value;
var name_3=document.getElementById("n3").value;

name_of_the_student_array.push(name_1);
name_of_the_student_array.push(name_2);
name_of_the_student_array.push(name_3);

document.getElementById("display_name").innerHTML = name_of_the_student_array;

}
function sorting()
{
name_of_the_student_array.sort();
document.getElementById("display_name").innerHTML = name_of_the_student_array;
}