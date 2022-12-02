$("select").change(function(){

    //Muuttuja aktiviteetille, hakee valitun aktiviteettityypin arvon
    var tekeminen = $("#activities option:selected").val();

    //Muuttuja, jossa API:n asetukset
    const settings = {
        type: "GET",
        url: "https://www.boredapi.com/api/activity?type="+ tekeminen //Aktiviteetin muuttuja
    }

    //Datan kutsu
    $.ajax(settings).done(function(data){
        $("#outCome").text(data.activity);
    });
});

//Toiminto, jolla otsikko muuttuu
$(document).ready(function () {
    $("#moreInfo").click(function () {
        $("h1").text("I can help you out! 😎");
    });
  });

//Toiminto, jolla saadaan lisätieto näkyviin
$(document).ready(function(){
    $("#moreInfo").click(function(){
      $("#desc").slideToggle();
    });
  });

//Toiminto, jolla tekstin läpinäkyvyys lisääntyy
$(document).ready(function(){
    $("#moreInfo").click(function(){
      $("h4").fadeTo(1000, 0.2);
    });
  });

//Toiminto, jolla infoteksti animoituu
$(document).ready(function(){
    $("#moreInfo").click(function(){
      $("#desc").animate({
        opacity: 1,
        fontSize: "15px"}, 800);
    });
  });

//Toiminto, jolla aktiviteettiehdotus animoituu
$(document).ready(function(){
    $("#activities").click(function(){
      $("#outCome").animate({
        fontSize: "25px"}, 3000);
    });
  });

