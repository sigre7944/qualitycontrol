function drawGraph() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number');
        data.addColumn('number');

        for (var i = 0; i < samples.length; i++) {
          data.addRow([i + 1, samples[i]]);
        }

        var options = {
          hAxis: {title: 'Samples', minValue: 0, maxValue: 26},
          vAxis: {title: 'Control Limit', minValue: 500, maxValue: 700},
          legend: 'none',
          crosshair: {trigger: 'both'}

        };

        var chart = new google.visualization.ScatterChart(document.getElementById('monitor'));

        chart.draw(data, options);
      }
}