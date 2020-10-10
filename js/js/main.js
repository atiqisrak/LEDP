// var home;
// var home2;

// home="Dhaka";
// home2=" Nikunja";

// document.write(home);
// document.write(home2);

// var home3,home2;
// home3=" Khilkhet";
// home2=" Bogra";
// document.write(home3+"<br>"+home2);

// var data=23+"<br>"+"Niloy"+" Dhaka"+"<br>";
// document.write(data);

// var firstName="Atiq";
// var middleName="Israk";
// var lastName="Niloy";
// document.write(firstName+" "+middleName+" "+lastName);

// document.write("<br");

// var studentName=["MD"+"Atiq"+"Israk"+"Niloy"];
// studentName.push("Jack");
// document.write(studentName);
// document.write("<br");
// var a=5;

// var base=5;
// var exponent=5;
// var result = Math.pow(base,exponent);
// document.write(result);

// document.write("<br");

// function sum(x,y){
//     var x;
//     var y;
//     var result=x+y;
//     document.write("Summation is = "+result+"<br>");
// }
// sum(5,6);


// function sum(x,y){
//     var x;
//     var y;
//     var result=x+y;
//     document.write("Summation of "+x+" and "+y+ " is = "+result+"<br>");
// }
// sum(5,6);


// function sub(x,y){
//     var x;
//     var y;
//     var result=x-y;
//     document.write("Subtraction of "+x+" and "+y+ " is = "+result+"<br>");
// }
// sub(5,10);

// var x = 6;

// if(x%2==0){
//     document.write("The Number is even");
// }
// else {
//     document.write("The number is Odd");
// }



// let number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     document.write("The number is even.");
// }

// // if the number is odd
// else {
//     document.write("The number is odd.");
// }

// var i=1;
// var x=0;
// var x;

// for(i=1;i<=10;i++){
//     document.write(i);
//     document.write("<br>");
// }
// document.write("<br> While Loop");
// while(i<=100){
//     if(i%2==0){
//         x=x+i;
//     }
//     i=i+1;
// }

// document.write(x);


// do {
//     statement(s);
// }
// while(expression);

// var sum=0;
// var i = 1;

// do{
//     document.write(" "+i);
//     i++; //i+=1
// }
// while(i<=100);

// document.write("<br> Odd Numbers: ");

// var i=1;
// while(i<=20){
//     if(i%2==0){
//         console.log(i);
//     }
//     else if(i%2==1){
//         document.write(" "+i);
//     }
//     i=i+1;
// }


// var i=1;

// for(i=1;i<=10;i++){
//     console.log(i);
// }


// switch(expression){
//     case n:
//     conditions;
//     break;
//     case n2:
//     conditions;
//     break;
//     case n3:
//     conditions;
//     break;
//     case n4:
//     conditions;
//     break;
//     default:
// }

// var animal = 'Yo';

// switch (animal){
//         case 'Cow':
//         document.write("It's not a dog");
//         break;

//         case 'Hen':
//         document.write("It's not a dog");
//         break;

//         case 'Cat':
//         document.write("It's not a dog");
//         break;

//         case 'Dog':
//         document.write("It's a Dog");
//         break;

//         default:
//         document.write("Nothing matched");
// }

var grade;
var mark = prompt("What's your Mark Percentage?");

if(mark<=100&&mark>=0){

        if(mark>94){
                document.write("Your grade is A+");
        }
        else if(mark<=94&&mark>=90){
                document.write("Your grade is A");
        }
        else if(mark<=89&&mark>=85){
                document.write("Your grade is B+");
        }
        
        else if(mark<=84&&mark>=80){
                document.write("Your grade is B");
        }
        
        else if(mark<=79&&mark>=75){
                document.write("Your grade is C+");
        }
        
        else if(mark<=74&&mark>=70){
                document.write("Your grade is C");
        }
        
        else if(mark<=69&&mark>=65){
                document.write("Your grade is D+");
        }
        else if(mark<=64&&mark>=60){
                document.write("Your grade is D");
        }
        else if(mark<=59&&mark>=0){
                document.write("Your grade is F");
        }
}

else{
        document.write("Please input a valid mark");
}