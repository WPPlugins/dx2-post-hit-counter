window.onload = function(){
	if(document.getElementById("hitcanvas") != null) {
		var lineChartData = {
			labels : dashwidget.labels,
			datasets : [
				{
					label : "Overview",
					backgroundColor: "#0073aa",
					data :  dashwidget.data 
				}
			]

		}
		var ctx = document.getElementById("hitcanvas").getContext("2d");
		window.myLine = new Chart(ctx, {
			type: 'bar',
			data: lineChartData,
			options: {
				elements: {
					rectangle: {
						borderWidth: 2,
						borderColor: 'rgb(0, 115, 170)',
						borderSkipped: 'bottom'
					}
				},
				responsive: true,
				legend: {
					display:false,
					position: 'top',
				},
				title: {
					display: false,
					text: 'Visitor Summary'
				}
			}
		});
	}
	
	if(document.getElementById("networkhitcanvas") != null) {
		var networklineChartData = {
			labels : networkdashwidget.labels,
			datasets : [
				{
					label : "Overview",
					backgroundColor: "#0073aa",
					data :  networkdashwidget.data 
				}
			]

		}
		var ctx = document.getElementById("networkhitcanvas").getContext("2d");
		window.myLine = new Chart(ctx, {
			type: 'bar',
			data: networklineChartData,
			options: {
				elements: {
					rectangle: {
						borderWidth: 2,
						borderColor: 'rgb(0, 115, 170)',
						borderSkipped: 'bottom'
					}
				},
				responsive: true,
				legend: {
					display:false,
					position: 'top',
				},
				title: {
					display: false,
					text: 'Network Visitor Summary'
				}
			}
		});
	}
}