function validateForm() {
    var n = document.forms["myForm"]["fname"].value;
    var e = document.forms["myForm"]["femail"].value;
    var p = document.forms["myForm"]["fphone"].value;
    var r = document.forms["myForm"]["reason"].value;
    var yes = document.getElementById("choice1");
    var no = document.getElementById("choice2");
    
    var mon = document.getElementById("mon");
    var tues = document.getElementById("tues");
    var wed = document.getElementById("wed");
    var thur = document.getElementById("thur");
    var fri = document.getElementById("fri");

    if (n == "") {
      alert("Name must be filled out");
      return false;
    }

    if (e == "") {
        alert("email must be filled out");
        return false;
    }

    if (p == "") {
        alert("phone must be filled out");
        return false;
    }

    if (r == "") {
        alert("reason must be selected");
        return false;
    }

    if ((yes.checked == false)&& (no.checked == false)){
        alert("Please select Yes or No")
        return false;
    }

    if ((mon.checked == false)&&(tues.checked == false)&&(wed.checked == false)&&(thur.checked == false)&&(fri.checked == false)){
        alert("Plase choose a day.");
        return false;
    }


alert("Thank you for your Resonse!")
return false;
}


