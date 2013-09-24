			function getcurrency(){
				$('#quot').html('');
				document.getElementById('loading').show();
				var from;
				var to;
				from = document.getElementById('fromcurrency').value;
				to = document.getElementById('tocurrency').value;		
				if( from == to){
					document.getElementById('loading').hide();				
					$('#quot').html('Conversion rate not applicable for same currencies!');			
					}
				else{
					$.getJSON('http://rate-exchange.appspot.com/currency?from=' + from + '&to=' + to + '', function (data) {
						document.getElementById('loading').hide();
						$('#quot').html('Conversion rate is : ' + data.rate);
						});
					}
			};
			function getstock(){
				$('#quotstocknse').html('');
				stock = document.getElementById('stocks').value;
				document.getElementById('loading2').show();
				var response = new String;
				$.get("http://www.google.com/finance/info?q=NSE:"+stock,function(data,status){
					response=data;
					var values = response.split(",");
					var l = values[3].split(":");
					var last = l[1].substring(2,l[1].lastIndexOf("\""));
					document.getElementById('loading2').hide();
					$('#quotstockbse').html('Last Traded Value is : ' + last );
				});
			};
			
