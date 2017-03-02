## Meteor Wrapper for HighCharts with a helper

This is similar to maazali:highcharts, except that the latest Highcharts is included and it supports client side exports.

Add to your Meteor app

```
meteor add daoli:highcharts
```

## Instructions for HighCharts

The plugin comes with a helper that can be used to quickly generate charts

```
// myTempmlate.html
{{> highchartsHelper chartId="test" chartWidth="100%" charHeight="100%" chartObject=topGenresChart}}
```

The `chartObject` basically takes the object that you would normally define using highCharts, example below:

```
// myTemplate.js
Template.myTemplate.topGenresChart = function() {
	return {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: this.username + "'s top genres"
		},
		tooltip: {
			pointFormat: '<b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					},
					connectorColor: 'silver'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'genre',
			data: [
				['Adventure',   45.0],
				['Action',       26.8],
				['Ecchi',   12.8],
				['Comedy',    8.5],
				['Yuri',     6.2]
			]
		}]
	};
};


```

## License (Highcharts)

Highcharts is free for personal and non-profit projects. For other purposes click [here](http://shop.highsoft.com/highcharts.html).


