$(document).ready(function () {
    $("#form").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            fname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            lname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },
            age: {
                number: true,
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            fname: {
                minlength: "Name should be at least 3 characters",
                number: "Name cannot not be a number",
            },
            lname: {
                minlength: "Last Name should be at least 3 characters",
                number: "Name cannot not be a number"
            },
            age: {
                number: "Please Age correctly"
            },

            email: {
                email: "The email should be in the format: abc@domain.tld"
            },
        }
    });
});

jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "We are Not Robots");

$(function () {
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_1").removeAttr("disabled");
            $("#day_1").focus();
        } else {
            $("#day_1").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_2").removeAttr("disabled");
            $("#day_2").focus();
        } else {
            $("#day_2").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_3").removeAttr("disabled");
            $("#day_3").focus();
        } else {
            $("#day_3").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_4").removeAttr("disabled");
            $("#day_4").focus();
        } else {
            $("#day_4").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_5").removeAttr("disabled");
            $("#day_5").focus();
        } else {
            $("#day_5").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_6").removeAttr("disabled");
            $("#day_6").focus();
        } else {
            $("#day_6").attr("disabled", "disabled");
        }
    });
    $("#nxt").click(function () {
        if ($(this).is(":checked")) {
            $("#day_7").removeAttr("disabled");
            $("#day_7").focus();
        } else {
            $("#day_7").attr("disabled", "disabled");
        }
    });
    $("#day_1").click(function () {
        if ($(this).is(":checked")) {
            $("#dd1").removeAttr("disabled");
            $("#dd1").focus();
        } else {
            $("#dd1").attr("disabled", "disabled");
        }
    });
    $("#day_2").click(function () {
        if ($(this).is(":checked")) {
            $("#dd2").removeAttr("disabled");
            $("#dd2").focus();
        } else {
            $("#dd2").attr("disabled", "disabled");
        }
    });
    $("#day_3").click(function () {
        if ($(this).is(":checked")) {
            $("#dd3").removeAttr("disabled");
            $("#dd3").focus();
        } else {
            $("#dd3").attr("disabled", "disabled");
        }
    });
    $("#day_4").click(function () {
        if ($(this).is(":checked")) {
            $("#dd4").removeAttr("disabled");
            $("#dd4").focus();
        } else {
            $("#dd4").attr("disabled", "disabled");
        }
    });
    $("#day_5").click(function () {
        if ($(this).is(":checked")) {
            $("#dd5").removeAttr("disabled");
            $("#dd5").focus();
        } else {
            $("#dd5").attr("disabled", "disabled");
        }
    });
    $("#day_6").click(function () {
        if ($(this).is(":checked")) {
            $("#dd6").removeAttr("disabled");
            $("#dd6").focus();
        } else {
            $("#dd6").attr("disabled", "disabled");
        }
    });
    $("#day_7").click(function () {
        if ($(this).is(":checked")) {
            $("#dd7").removeAttr("disabled");
            $("#dd7").focus();
        } else {
            $("#dad7").attr("disabled", "disabled");
        }
    });
});

function passvalue() {

    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var nxtcheck = document.getElementById("nxt").value
    var sun = document.getElementById("day_1").value
    var mon = document.getElementById("day_2").value
    var tue = document.getElementById("day_3").value
    var wed = document.getElementById("day_4").value
    var thur = document.getElementById("day_5").value
    var fri = document.getElementById("day_6").value
    var sat = document.getElementById("day_7").value

    var mond = document.getElementById("dd1").value
    var tued = document.getElementById("dd2").value
    var wedd = document.getElementById("dd3").value
    var thurd = document.getElementById("dd4").value
    var frid = document.getElementById("dd5").value
    var satd = document.getElementById("dd6").value
    var sund = document.getElementById("dd7").value


    localStorage.setItem("mondrop", mond);
    localStorage.setItem("tuedrop", tued);
    localStorage.setItem("weddrop", wedd);
    localStorage.setItem("thurdrop", thurd);
    localStorage.setItem("fridrop", frid);
    localStorage.setItem("satdrop", satd);
    localStorage.setItem("sundrop", sund);

    localStorage.setItem("nxtcheck", nxtcheck);

    localStorage.setItem("sund", sun);
    localStorage.setItem("mond", mon);
    localStorage.setItem("tues", tue);
    localStorage.setItem("wednes", wed);
    localStorage.setItem("thurs", thur);
    localStorage.setItem("frid", fri);
    localStorage.setItem("satur", sat);

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
}