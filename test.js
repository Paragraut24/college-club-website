
// function data() {
// var name = document.getElementById("name").value;
// var prn = document.getElementById("prn").value;
// var email = document.getElementById("email").value;
// var mob = document.getElementById("mob").value;



// if(name=="" || prn=="" || email=="" || mob=="")
// {
//     alert("All fields are mandatory !");
//     return false;
// }
// else if(mob.length>10 || mob.length<10 ){
//      alert("Please Enter Valid Phone No.");
//      return false 
// }
// else if(isNaN(mob)){
//      alert("Only Numbers are Allowed in Mobile No. !");
//      return false;
// }
// else if(isNaN(prn)){
//      alert("Only Numbers are Allowed in PRN !");
//      return false;
// }
// else if(prn.length !=8){
//      alert("Please Enter Valid PRN of 8 digits");
//      return false;
// }
// else if(email.length > 50 || email.lenghth < 5){
//      alert("Please Enter Valid Email");
//      return false;
// }
// else{
//     true;
// }


// var e = onclick.alert("Your Response has been Recorded");

// }

// function myfunc(event){
//     event.preventDefault();

//     var name = document.getElementById("name").value;
// var prn = document.getElementById("prn").value;
// var email = document.getElementById("email").value;
// var mob = document.getElementById("mob").value;
// var campusb = document.getElementById("Bibwewadi").value;
// var campusk = document.getElementById("Kondhwa").value;
// var club = document.getElementById("club").value;
// var h = document.getElementById("cs").value;
// var i = document.getElementById("cs-ai").value;
// var j = document.getElementById("cs-aiml").value;
// var k = document.getElementById("cs-se").value;
// var l = document.getElementById("cs-ds").value;
// var m = document.getElementById("cs-cbi").value;
// var n = document.getElementById("civil").value;
// var o = document.getElementById("mech").value;
// var p = document.getElementById("entc").value;
// var q = document.getElementById("it").value;
// var r = document.getElementById("div").value;
// var s = document.getElementById("domain1").value;
// var t = document.getElementById("domain2").value;
// var u = document.getElementById("domain3").value;
// var v = document.getElementById("domain4").value;
// var w = document.getElementById("domain5").value;
// var x = document.getElementById("domain6").value;
// var y = document.getElementById("domain7").value;
// var z = document.getElementById("about").value;
// var interests = document.getElementById("interests").value;
// var contribution = document.getElementById("contribution").value;
// var AlreadyJoinedClubs = document.getElementById("already-joined-clubs").value;


// localStorage.setItem("name", name);
// localStorage.setItem('ls_prn', prn);
// localstorage.setItem('ls_email', email);
// localStorage.setItem('ls_mob', mob);
// localStorage.setItem('ls_Bibwewadi', Bibwewadi);
// localStorage.setItem('ls_Kondhwa', Kondhwa);
// localStorage.setItem('ls_club', club);
// localStorage.setItem('ls_div', div);
// localStorage.setItem('ls_about', about);
// localStorage.setItem('ls_contributions', contributions);
// localStorage.setItem('ls_already-joined-clubs', AlreadyJoinedClubs);

// }
// document.getElementById("form").addEventListener("submit", myfunc);






function data() {
    var name = document.getElementById("name").value;
    console.log(name);
    var prn = document.getElementById("prn").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    

    if(name == "" || prn == "" || email == "" || mob == "") {
        alert("All fields are mandatory !");
        return false;
    } else if(mob.length != 10 || isNaN(mob)) {
        alert("Please Enter Valid Phone No.");
        return false;
    } else if(isNaN(prn)) {
        alert("Only Numbers are Allowed in PRN !");
        return false;
    } else if(prn.length != 8) {
        alert("Please Enter Valid PRN of 8 digits");
        return false;
    } else if(email.length > 50 || email.length < 5) {
        alert("Please Enter Valid Email");
        return false;
    }

    myfunc();

    var e = alert("Your Response has been Recorded");
    return true;
}

function myfunc() {

    var name = document.getElementById("name").value;
    var prn = document.getElementById("prn").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var clubs = document.getElementById("club").value;
    var about = document.getElementById("about").value;
    var contribution = document.getElementById("contribution").value;
    var interests = document.getElementById("interests").value;
    var alreadyJoinedClubs = document.getElementById("interests").value;
    var div = document.getElementById("div").value;
    var branch = document.querySelector('input[name="branch"]:checked').value;
    var campus = document.querySelector('input[name="campus"]:checked').value;
    var domainElements = document.querySelectorAll('input[name="database"]:checked');
    var domains = [];
    domainElements.forEach(function(element) {
        domains.push(element.value);
    });

    localStorage.setItem("name", name);
    localStorage.setItem("prn", prn);
    localStorage.setItem("email", email);
    localStorage.setItem("mob", mob);
    localStorage.setItem("club",clubs);
    localStorage.setItem("about",about);
    localStorage.setItem("contribution",contribution);
    localStorage.setItem("interests",interests);
    localStorage.setItem("already-joined-clubs",alreadyJoinedClubs);
    localStorage.setItem("div",div);
    localStorage.setItem("branch", branch);
    localStorage.setItem("campus", campus);
    localStorage.setItem("domain", JSON.stringify(domains));
  

}

