 
alert('GOOD LUCK :)')
function myFunction() {
    var person = prompt("Please enter your name", "Enter your name");
    var res = person.toUpperCase();
    if (person != null) {
      document.getElementById("demo").innerHTML =
      " <h1><u>Candidate Full Name</h1></u> " + " " + "<h2>" + "  " +  res + "</h2>" ;
    }
    var person = " ";

    var d = new Date();
document.getElementById("time").innerHTML = d;   
  }


  var score = 0;
  function question1(){
       
     var right_ans = document.getElementById("ques-1-1");
     var ans_2 =document.getElementById("ques-1-2");
     var ans_3 =document.getElementById("ques-1-3");
     var ans_4 =document.getElementById("ques-1-4");
     if (right_ans.checked == true ) {
         score++
         alert('Question:1 correct answer')
     }
     else{
         alert('Question:1 Incorrect answer')
        }


    var right_ans_2 = document.getElementById("ques-2-3");
    var ans2_2 = document.getElementById("ques-2-2");
    var ans2_3 = document.getElementById("ques-2-1");
    var ans2_4 = document.getElementById("ques-2-4");
    if (right_ans_2.checked == true ) {
      score++
      alert('Question:2 correct answer')
  }
  else{
      alert('Question:2 Incorrect answer')
     }
  


    var right_ans_3 = document.getElementById("ques-3-1");
    var ans3_2 = document.getElementById("ques-3-2");
    var ans3_3 = document.getElementById("ques-3-3");
    var ans3_4 = document.getElementById("ques-3-4");

    if (right_ans_3.checked == true ) {
      score++
      alert('Question:3 correct answer')
  }
  else{
      alert('Question:3 Incorrect answer')
     }
     document.write(' <h1> YOUR SCORE IS  ' + " " + " " + "" + score++  +"</h1>") 

    }
     