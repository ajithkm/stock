
			   
			
		 

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
			}
