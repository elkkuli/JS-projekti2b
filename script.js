$("#education").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=education",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#recreational").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=recreational",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#social").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=social",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#diy").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=diy",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#charity").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=charity",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#cooking").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=cooking",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#relaxation").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=relaxation",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#music").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=music",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})

$("#busyWork").click(function(doApiRequest){
    $.ajax({
        type: "GET",
        url: "http://www.boredapi.com/api/activity?type=busywork",
        success: function (data) {
            console.log("Success", data)
            document.getElementById("outCome").textContent = data.activity;
        }
    });
})