document.getElementById("concatsomestring").onclick = function () {
  let num1 = '"1"';
  let num2 = '"2"';
  let numm1 = "1";
  let numm2 = "2";

  let sum = num1 + num2;

  document.getElementById("statement").innerText = "let =" + sum + " " + "are Strings";
  document.getElementById("output").innerHTML = numm1 + " " + numm2;
};

document.getElementById("asknameuser").onclick = function () {
  let message = "Good Day";
  let name = prompt("Please Enter Your Name");
  let banger = "!";

  document.getElementById("statement").innerText =
    message + " " + name + banger;
  document.getElementById("output").innerHTML = "";
};

document.getElementById("compareoperator").onclick = function () {
  let num1 = +prompt("Please Enter Number 1");
  let num2 = +prompt("Please Enter Number 2");
  

  if (num1 >= num2) {
    alert("Your Condition Is True");
    document.getElementById("statement").innerText = "Your Condition Is True";
    document.getElementById("output").innerHTML = "";
  } else {
    alert("Your Condition Is False");
    document.getElementById("statement").innerText = "Your Condition Is False";
    document.getElementById("output").innerHTML = "";
  }
};

document.getElementById("ifelseif").onclick = function () {
  let num1 = +prompt("Please Enter Number 1");
  let num2 = +prompt("Please Enter Number 2");

  if (num1 >= num2) {
    alert("Your Condition Is True");
    document.getElementById("statement").innerText = "Your Condition Is True";
    document.getElementById("output").innerHTML = "";
  } else if (num1 == num2) {
    alert("Your Condition Is Equal");
    document.getElementById("statement").innerText = "Your Condition Is Equal";
    document.getElementById("output").innerHTML = "";
  } else {
    alert("Your Condition Is False");
    document.getElementById("statement").innerText = "Your Condition Is False";
    document.getElementById("output").innerHTML = "";
  }
};

document.getElementById("testsetcondition").onclick = function () {
    let age = +prompt("What Is Your Age?");
    let weight = +prompt("What Is Your Weight?");
    
    if (age <= 18 && weight <= 70) {
        alert("You're a Smart Boy.");
        document.getElementById("statement").innerText = "You're a Smart Boy.";
        document.getElementById("output").innerHTML = "";
    } else if (age > 18 && weight > 70) {
        alert("You're a Fat Guy.");
        document.getElementById("statement").innerText = "You're a Fat Guy.";
        document.getElementById("output").innerHTML = "";
    } else {
        alert("You're a Baby.");
        document.getElementById("statement").innerText = "You're a Baby.";
        document.getElementById("output").innerHTML = "";
    }
};

document.getElementById("ifstatementnest").onclick = function () {
    let age = +prompt("What Is Your Age?");
    let weight = +prompt("What Is Your Weight?");

    if (age >= 18) {
        if (weight <= 70) {
            alert("You're a Smart Boy.");
            document.getElementById("statement").innerText = "You're a Smart Boy.";
            document.getElementById("output").innerHTML = "";
        } else {
            alert("You're a Fat Guy.");
            document.getElementById("statement").innerText = "You're a Fat Guy.";
            document.getElementById("output").innerHTML = "";
        }
    } else {
        alert("You're a Baby.");
        document.getElementById("statement").innerText = "You're a Baby.";
        document.getElementById("output").innerHTML = "";
    }
};

document.getElementById("login").onclick  = function () {
    let username = prompt("Please Enter Your Username")
    
    if (username = "Haris") {
        let password = prompt("Please Enter Your Password")
        if (password = 123) {
            alert("User Logged In.");
            document.getElementById("statement").innerText = "User Logged In.";
            document.getElementById("output").innerHTML = "";
        } else {
            alert("Password is Incorrect.");
            document.getElementById("statement").innerText = "Password is Incorrect.";
            document.getElementById("output").innerHTML = "";
          }
        } else {
          alert("Username or Password is Incorrect.");
          document.getElementById("statement").innerText = "Username or Password is Incorrect.";
          document.getElementById("output").innerHTML = "";
        }
}

document.getElementById("checkmark").onclick = function () {
  let marks = +prompt("Please Enter Your Mark")
  
  if (marks >= 100) {
    alert("You Got A+ Grade.");
    document.getElementById("statement").innerText = "You Got A Grade.";
    document.getElementById("output").innerHTML = "";
  } else if (marks >= 90){
    alert("You Got A Grade.");
    document.getElementById("statement").innerText = "You Got B Grade.";
    document.getElementById("output").innerHTML = "";
  } else if (marks >= 80){
    alert("You Got B Grade.");
    document.getElementById("statement").innerText = "You Got B Grade.";
    document.getElementById("output").innerHTML = "";
  } else if (marks >= 70){
    alert("You Got C Grade.");
    document.getElementById("statement").innerText = "You Got C Grade.";
    document.getElementById("output").innerHTML = "";
  } else {
    alert("You are Fail.");
    document.getElementById("statement").innerText = "You are Fail.";
    document.getElementById("output").innerHTML = "";
  }
}

// ...........................................

// clearstatement
document.getElementById("clearstatement").onclick = function () {
  document.getElementById("statement").innerHTML = "";
};
// clearoutput
document.getElementById("clearoutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};
