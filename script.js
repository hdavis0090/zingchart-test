$(document).ready(function () {
	$( "form" ).submit(function( event ) {
	  if ( $( "input:first" ).val() != null ) {
		$( "span" ).text( "Validated..." ).show();
		//
		
			var num = $( "input:first" ).val()
			var myChart=
			{
			  "type": "line",
			  "title":{
			   "text":"Hello ZingChart World!"
			},
			  "series": [
				{
				  "values": [5,10,15,5,10,5]
				},
				{
				  "values": [2,4,6,8,10,12]
				}
			  ]
			};
				zingchart.render({
			id:"myChartDiv",
			data:myChart,
			height:400,
			width:"100%"
		});
		return;
	  }
	 
	  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
	  event.preventDefault();
	});
  });