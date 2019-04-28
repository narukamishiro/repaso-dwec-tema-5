google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['pais', 'mll turistas'],
          ['france', 869],
          ['spain', 818],
          ['EEUU', 759],
          ['china', 607],
          ['italy', 583],
          ['mexico', 393],
		  ['RU', 377],
		  ['turkey', 376],
		  ['germany', 375],
		  ['thailand', 354]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }