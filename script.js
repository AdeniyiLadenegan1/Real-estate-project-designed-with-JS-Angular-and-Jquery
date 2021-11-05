
//fxn for the nav bar when the screen is responsive

$(document).ready(function () {

    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');


    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

});



//logo animation chaining
$(".logs").click(function () {
    $(".logo").fadeOut(500).fadeIn(500).delay(500).slideDown(2000).fadeIn(2000).fadeOut(1000).toggle().fadeIn(2000);
});


//fxn for the contact us page
$("#submit").click(function () {

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var buildingtype = $("#buildingtype").val();
    var date = $("#date").val();

    // test: alert(firstname);

    $("form").fadeOut(function () {
        $(".word").html("Thank you" + " " + firstname + " " + lastname + " " + "Your choie of house is a" + " " + buildingtype + " " + "And it will be ready on" + " " + date).fadeIn(1500);

    });

});

$("#submit").click(function () {

    var fullname = $("#fullname").val();
    var location = $("#location").val();

    // test: alert(firstname);

    // $("#black").click(function () {
    //     $(".color7").fadeToggle(2000);  
    // });

    $(".myform").fadeOut(function () {
        $(".word2").html("Awesome" + " " + fullname + " " + "You have successfully signed up. " + " " + location + " " + "is your area of choice").fadeIn(1500);

    });

});

var app = angular.module('appnew', []);
app.controller('appnewCtr', function ($scope) {
    $scope.count1 = "";
    $scope.count1 = "";

    $scope.result = function() {
        $scope.count1 = "You should consider getting a house in this location"; 
 if ($scope.count1 = 500)
 {
     return result(); 
 }
 else
 {
     return "";
        }
    }
});






//hide and show
$(".btn").click(function () {
    $(".content").show();
});

$(".mybtn").click(function () {
    $(".content").hide();
});




$(document).ready(function () {

    //hover fxn for the home page reviews


    $(".box").hover(function () {
        $(".notes2").fadeIn();
    }, function () {

        $(".notes2").fadeOut();

    });


    $(".box").hover(function () {
        $(".notes3").fadeIn();
    }, function () {

        $(".notes3").fadeOut();

    });

    $(".box").hover(function () {
        $(".notes4").fadeIn();
    }, function () {

        $(".notes4").fadeOut();

    });

    $(".box").hover(function () {
        $(".notes5").fadeIn();
    }, function () {

        $(".notes5").fadeOut();

    });

    $(".box").hover(function () {
        $(".notes6").fadeIn();
    }, function () {

        $(".notes6").fadeOut();

    })
});

//});



//Angular
var app = angular.module('appone', []);
app.controller('apponeCtr', function ($scope) {

    $scope.fincome = 0;
    $scope.mincome = 0;
    $scope.tincome = 0;

    $scope.result = function () {
        // $scope.result = $scope.fincome+$scope.mincome;

    }
    // return $scope.tincome = $scope.fincome + $scope.mincome;      



    var app = angular.module('appone', []);
    app.controller('apponeCtr', function ($scope) {

        $scope.income1 = 0;
        $scope.income2 = 0;

        $scope.income3 = 0;

        $scope.results = function () {

        }
    });

});




var app = angular.module('apptwo', []);
app.controller('apptwoCtr', function ($scope) {

    $scope.houses = ['Condo', 'F2F', 'Hostel', 'Estate', 'Basement', 'Townhouse', 'Apartments', 'OneBedroom', 'TwoBedroom', 'ThreeBedroom', 'FourBedroom'];
    $scope.house = "";

    $scope.leases = ['contact.html', 'Hotel', 'Acres', 'Farmland', 'Trailer', 'Studio', 'EventCenter', 'Halls', 'Theater', 'Arena'];
    $scope.lease = "";
    //return $scope.car;

    $scope.order = function (house) {
        $scope.orderInst = house;
    }

    $scope.order = function (lease) {
        $scope.orderInst = lease;
    }

});



//#cream, #purple, #pink, #green, #brown, #red, #gold, #grey, #black, #blue, #oxblood, #yellow

$(document).ready(function () {

    $("#red").mouseenter(function () {
        $("#house").css('color', 'red');
    });

    $("#blue").mouseenter(function () {
        $("#house").css('color', 'blue');
    });

    $("#green").mouseenter(function () {
        $("#house").css('color', 'green');
    });

    $("#yellow").hover(function () {
        $("#house").css('color', 'yellow');

    });

    $("#cream").mouseenter(function () {
        $("#house").css('color', 'cream');
    });

    $("#purple").mouseenter(function () {
        $("#house").css('color', 'purple');
    });

    $("#pink").mouseenter(function () {
        $("#house").css('color', 'pink');
    });

    $("#brown").hover(function () {
        $("#house").css('color', 'brown');


    });

    $("#gold").mouseenter(function () {
        $("#house").css('color', 'gold');
    });

    $("#bleak").mouseenter(function () {
        $("#house").css('color', 'bleak');
    });

    $("#grey").mouseenter(function () {
        $("#house").css('color', 'grey');
    });

    $("#black").mouseenter(function () {
        $("#house").css('color', 'black');
    });




    //mouseleaving
    $("#cream").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#brown").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#purple").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#grey").mouseleave(function () {
        $("#house").css('color', 'white');

    });


    $("#gold").mouseleave(function () {
        $("#house").css('color', 'white');
    });


    $("#bleak").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#pink").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#black").mouseleave(function () {
        $("#house").css('color', 'white');

    });


    $("#red").mouseleave(function () {
        $("#house").css('color', 'white');
    });


    $("#blue").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#green").mouseleave(function () {
        $("#house").css('color', 'white');
    });

    $("#yellow").mouseleave(function () {
        $("#house").css('color', 'white');

    });

    //homepage working
    $(".newbox1").hover(function () {
        $(".text1").slideDown(1000);
    }, function () {

        $(".text1").fadeOut(2000);

    });

    $(".newbox2").hover(function () {
        $(".text2").slideDown(1000);
    }, function () {

        $(".text2").fadeOut(2000);

    })
})



//colored houses
    $("#pink").hover(function () {
        $(".color1").slideDown(2000);
    }, function () {
        $(".color1").fadeOut(500);
    });

    $("#brown").click(function () {
        $(".color2").fadeToggle(2000);
        // $(".color2").fadeOut(2000);
    });

    $("#red").click(function () {
        $(".color3").fadeToggle(2000);  
    });

    $("#grey").click(function () {
        $(".color4").fadeToggle(2000);  
    });

    $("#gold").click(function () {
        $(".color5").fadeToggle(2000);  
    });



    $("#purple").click(function () {
        $(".color6").fadeToggle(2000);  
    });

    $("#black").click(function () {
        $(".color7").fadeToggle(2000);  
    });

    $("#blue").click(function () {
        $(".color8").fadeToggle(2000);  
    });

    $("#yellow").click(function () {
        $(".color9").fadeToggle(2000);  
    });

    $("#green").click(function () {
        $(".color10").fadeToggle(2000);  
    });



//The map API.
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRlb3JpIiwiYSI6ImNrdmxsYXp3aTM1dm4yb3AxbG82dDAyMGMifQ.xFJ3SWnw3TliT98E4ILuXQ';
    
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

    function successLocation(position) {
        console.log(position)
       setupMap([position.coords.longitude, position.coords.latitude])
    }

    function errorLocation() {
        setupMap([43.602757, -79.739128])
    }

    function setupMap(center) {

    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom:15
     })

     const nav = new mapboxgl.NavigationControl()
     map.addControl(nav)

// var mapboxgl = require('mapbox-gl');
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left");
}


//The click for project.

$(document).ready(function () {

$("#show").click(function () {
    $(".box1").show(); 
 
    });
});

  
    