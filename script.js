

/*$("#education").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=education",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#recreational").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=recreational",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#social").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=social",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#diy").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=diy",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#charity").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=charity",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#cooking").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=cooking",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#relaxation").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=relaxation",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#music").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=music",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#busyWork").click(function(){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=busywork",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})*/

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
        console.log("Success", data)
        $("#outCome").text(data.activity);
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
      $("h4").fadeTo(1000, 0.4);
    });
  });

$(document).ready(function(){
    $("#moreInfo").click(function(){
      $("#desc").animate({
        opacity: 1,
        fontSize: "20px"}, 1000);
    });
  });

  
$(document).ready(function(){
    $("#activities").click(function(){
      $("#outCome").animate({
        fontSize: "25px"}, 3000);
    });
  });

