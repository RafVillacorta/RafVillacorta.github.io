function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^(\(\d{3}\))(\s{1})\d{3}([-\/\.])(\d{4})$/; //(555) 555-5555
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail) {
    var a = document.getElementById(txtEmail).value;
    var filter = /^([A-Za-z_0-9\-]+)(\@)([A-Za-z_0-9\-]+)(\.)([A-Za-z]+)$/; //a@a.a
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCC(txtCC) {
    var a = document.getElementById(txtCC).value;
    var filter = /^(\d{4})(\s{1})(\d{4})(\s{1})(\d{4})(\s{1})(\d{4})$/; //5555 5555 5555 5555
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExpiration(txtExpiration) {
    var a = document.getElementById(txtExpiration).value;
    var filter = /^((0[1-9])|(1[1-2]))(\/)(\d{2})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExpirationDate(txtExpiration) {
    var a = new String(document.getElementById(txtExpiration).value);
    var temp = new Date();
    if (parseInt(a.substring(3)) > parseInt((new String(temp.getFullYear())).substring(2)) || ((parseInt(a.substring(3)) == parseInt((new String(temp.getFullYear())).substring(2))) && (parseInt(a.substring(0,2)) >= parseInt(new String(temp.getMonth()+1))))) {
        return true;
    }return false;
    
}

function validateCVV(txtCVV) {
    var a = document.getElementById(txtCVV).value;
    var filter = /^(\d{3})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var unavailableDates = [];
    switch(document.getElementById("expert").value) {
        case "1":
            for (let i = 0; i <= 90; i++) {
                var temp = new Date(new Date().getTime() + (i*86400000));
                if (temp.getDay() === 0 || temp.getDay() === 5 || temp.getDay() === 6) {
                    unavailableDates.push(("0" + (temp.getMonth()+1)).slice(-2)+ '/'+ ("0" + (temp.getDate())).slice(-2) + '/' + temp.getFullYear());
                }
            }
            break;
        case "2":
            for (let i = 0; i <= 90; i++) {
                var temp = new Date(new Date().getTime() + (i*86400000));
                if (temp.getDay() === 0 || temp.getDay() === 1 || temp.getDay() === 6) {
                    unavailableDates.push(("0" + (temp.getMonth() + 1)).slice(-2)+ '/'+ ("0" + (temp.getDate())).slice(-2) + '/' + temp.getFullYear());
                }
            }
            break;
        case "3":
            for (let i = 0; i <= 90; i++) {
                var temp = new Date(new Date().getTime() + (i*86400000));
                if (temp.getDay() === 0 || temp.getDay() === 6) {
                    unavailableDates.push(("0" + (temp.getMonth() + 1)).slice(-2)+ '/'+ ("0" + (temp.getDate())).slice(-2) + '/' + temp.getFullYear());
                }
            }
            break;
    }
    //console.log(unavailableDates);
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

var flag =true;
// HERE, JQuery "LISTENING" starts
$(document).ready(function(){
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
        $("#phone").addClass("error");
            alert("Le format n'est pas valide pour le numéro de téléphone");
            $("#phone").val("");
        }
        else {
            $("#phone").removeClass("error");
            flag =true;
        }
    });
    $("#email").on("change", function(){
        if (!validateEmail("email")){
        $("#email").addClass("error");
            alert("Le format n'est pas valide pour l'adresse e-mail");
            $("#email").val("");
        }
        else {
            $("#email").removeClass("error");
            flag =true;
        }
    });
    $("#expert").on("change", function(){
        if (document.getElementById("date").disabled){
            document.getElementById("date").disabled = false;
        } else {
            document.getElementById("date").value=null;
            flag =true;
        }
        if (document.getElementById("time").disabled){
            document.getElementById("time").disabled = false;
        } else {
            document.getElementById("time").value=null;
            flag =true;
        }
    });
    $("#date").datepicker({
        dateFormat: setDateFormat,
        minDate: 0,
        beforeShowDay: disableDates,
        maxDate: 90
    });
    $("#date").on("change", function(){
        flag =true;
    });
    $("#time").timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '9:00am',
        maxTime: '4:00pm',
        startTime: '9:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
    $("#time").on("change", function(){
        flag =true;
    });
    $("#ccNum").on("change", function(){
        if (!validateCC("ccNum")){
            $("#ccNum").addClass("error");
                alert("Le format n'est pas valide pour le numéro de carte crédit");
                $("#ccNum").val("");
            }
            else {
                $("#ccNum").removeClass("error");
                flag =true;
            }
    });
    $("#expiration").on("change", function(){
        if (!validateExpiration("expiration")){
            $("#expiration").addClass("error");
                alert("Le format n'est pas valide pour la date d'expiration. Votre entrée ne peut pas être accepté.");
                $("#expiration").val("");
            }
            else {
                $("#expiration").removeClass("error");
                if (!validateExpirationDate("expiration")){
                    $("#expiration").addClass("error");
                        alert("Carte de crédit a déjà expiré!");
                        $("#expiration").val("");
                    }
                    else {
                        $("#expiration").removeClass("error");
                        flag=true;
                    }
            }
    });
    $("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            $("#cvv").addClass("error");
                alert("Le format n'est pas valide pour la cvv");
                $("#cvv").val("");
            }
        else {
                $("#cvv").removeClass("error");
                flag =true;
            }
    });
    $("#ccNum").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#info").on("submit", function(){
        if (flag){
            alert("Reservation soumise. On se voit bientot selon votre indication!");
            flag = false;
        } else {
            alert("Votre reservation a déjà été soumise.");
        }
    });
})