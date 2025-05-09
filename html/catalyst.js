

$(document).ready(function() {
    function data() {
        var name = $("#name").val();
        var prn = $("#prn").val();
        var email = $("#email").val();
        var mob = $("#mob").val();

        if (name === "" || prn === "" || email === "" || mob === "") {
            alert("All fields are mandatory!");
            return false;
        } else if (mob.length != 10 || isNaN(mob)) {
            alert("Please Enter Valid Phone No.");
            return false;
        } else if (isNaN(prn)) {
            alert("Only Numbers are Allowed in PRN!");
            return false;
        } else if (prn.length != 8) {
            alert("Please Enter Valid PRN of 8 digits");
            return false;
        } else if (email.length > 50 || email.length < 5) {
            alert("Please Enter Valid Email");
            return false;
        }

        myfunc();

        alert("Your Response has been Recorded");
        return true;
    }

    function myfunc() {
        var name = $("#name").val();
        var prn = $("#prn").val();
        var email = $("#email").val();
        var mob = $("#mob").val();
        var clubs = $("#club").val();
        var div = $("#div").val();
        var branch = $("input[name='branch']:checked").val();
        var campus = $("input[name='campus']:checked").val();
        var position = $("input[name='position']:checked").val();

        localStorage.setItem("name", name);
        localStorage.setItem("prn", prn);
        localStorage.setItem("email", email);
        localStorage.setItem("mob", mob);
        localStorage.setItem("club", clubs);
        localStorage.setItem("div", div);
        localStorage.setItem("branch", branch);
        localStorage.setItem("campus", campus);
        localStorage.setItem("position", position);
    }

    $("form").on("submit", function() {
        return data();
    });
});


    // var name = document.getElementById("name").value;
    // var prn = document.getElementById("prn").value;
    // var email = document.getElementById("email").value;
    // var mob = document.getElementById("mob").value;
    // var clubs = document.getElementById("club").value;
    // var div = document.getElementById("div").value;
    // var branch = document.querySelector('input[name="branch"]:checked').value;
    // var campus = document.querySelector('input[name="campus"]:checked').value;
    // var position = document.querySelector('input[name="position"]:checked').value;
