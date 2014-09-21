(function(){

  'use strict';

  var dragsterControllers = angular.module('dragsterControllers', []);

  dragsterControllers.controller('PortfolioController', ['$scope', function($scope) {
    // $scope.websites = Websites.query(); // fetch from JSON file
    this.websites = websites; // fetch from variable
    console.log(this.websites);

  }]);

  // DATA
  var websites = [
    {
      "id": "play",
      "name": "Play2Lead.co",
      "url": "https://play2lead.co/",
      "dates": {
        "start": "2014",
        "end": "2014"
      }
    },
    {
      "id": "keepal",
      "name": "Keepal",
      "url": "https://www.youtube.com/watch?v=FVQLZXlIS_Q",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "edumal",
      "name": "Edumal.tv",
      "url": "https://www.youtube.com/watch?v=YQeuJuQxZn4",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "sprite",
      "name": "PaddleGame",
      "url": "https://www.youtube.com/watch?v=RjGY3d_2ewI",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "codium",
      "name": "Codium",
      "url": "http://wdi3.herokuapp.com",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "little",
      "name": "LittleHumans",
      "url": "http://littlehumans.herokuapp.com",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "rick",
      "name": "RickRampage",
      "url": "http://rickrampage.herokuapp.com",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "umby",
      "name": "UmbyRacks",
      "url": "https://www.youtube.com/watch?v=bHuV2YY5Mn8",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "trend",
      "name": "TrendMyHunch",
      "url": "http://trendmyhunch.herokuapp.com",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "hangman",
      "name": "HangManGame",
      "url": "",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "apollo",
      "name": "ApolloSecurity",
      "url": "/assets/apollo.jpg",
      "dates": {
        "start": "2000",
        "end": "2006"
      },
      "presentations": "",
      "screenshots": [
      "",
      ""
      ],
      "skills": {
        "business": "XMind",
        "technology": "AngularJS"
      }
    },
    {
      "id": "mallard",
      "name": "Mallard4Bligh",
      "url": "/assets/mallard.jpg",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "iphi",
      "name": "IphiVonMoock",
      "url": "/assets/iphi.jpg",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "ozejobz",
      "name": "Ozejobz",
      "url": "/assets/ozejobz.jpg",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "fitnetusa",
      "name": "FitNetUSA",
      "url": "/assets/fitnetusa.jpg",
      "dates": {
        "start": "",
        "end": ""
      }
    },
    {
      "id": "super",
      "name": "SuperTraining",
      "url": "",
      "dates": {
        "start": "",
        "end": ""
      }
    }
  ]

})();