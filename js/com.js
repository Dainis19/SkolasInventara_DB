
$.get("http://sigulda-web.azurewebsites.net/api/iron-man/oebjekts", function (objekti, status) {
// Izveidot katram objektam jaunu tabulas ierakstu, ņem no servisa, piem., iekarta.Iekartas_ID

objekts.forEach(function (objekts) {


var id = "<td>" + oebjekts.Objekta_ID + "</td>";
var ObjektaNosaukums = "<td>" + objekts.Obekta_NR + "</td>";
var Objektudaudzums = "<td>" + objekts.Objekta_Daudzums + "</td>";
var ObjektaCena = "<td>" + objekts.Objekta_Cena + "</td>";
var ObjektuTermiņš = "<td>" + objekts.Objekta_Termiņš + "</td>";
var ObjektuIegādesLaiks = "<td>" + objekts.Iegādes_Laiks + "</td>";
var ObjektaKabinets = "<td>" + objekts.Kabineta_ID + "</td>";

var objektuRinda = "<tr>" + id + Obekta_NR + Objekta_Daudzums + "</tr>";
$("#objektu_tabula").append(objektuRinda);

    })
});


          
    $("#objektu_poga").click(function () {

        // Atrod ievades laukus ar konkretam ID vertibam html formam

        var iekartasIdKaVirkne = $("#Objekta_ID").val();
        var iekartasNosaukumsKaVirkne = $("#Objekta_NR").val();
        var iekartuSkaitsKaVirkne = $("#Objekta_Daudzums").val();

        // Konvertē no virknes uz ciparu, ja nepieciesams

        var iekartasIdKaCipars = Number(iekartasIdKaVirkne);
        var iekartuSkaitsKaCipars = Number(iekartuSkaitsKaVirkne);

        // Objekts, ko nosūta servisam, nem no datu bazes kolonnu nosaukumiem

        var iekartas = {

            "Objekta_ID": iekartasIdKaCipars,
            "Numurs": iekartasNosaukumsCipars,
            "Skaits": iekartuSkaitsKaCipars,
            "Numurs" : iekartuSkaitsKaCipars,
            "Cena" : iekartuSkaitsKaCipars,
            "Termiņš" : iekartuSkaitsKaCipars,
            "Iegādes_Laiks" : iekartuSkaitsKaCipars,
            "Kabineta_ID" : iekartuSkaitsKaCipars,
        };

        $.post("http://sigulda-web.azurewebsites.net/api/iron-man/objekts",

            iekartas,

            function (data, status) {

            });
           
            $("#Objekta_ID").val(null);
            $("#Objekta_NR").val(null);
            $("#Objekta_Cena").val(null);
            $("#Objekta_Daudzums").val(null);
            $("#Objekta_Skaits").val(null);
            $("#Objekta_Termiņš").val(null);
   
   });
});
