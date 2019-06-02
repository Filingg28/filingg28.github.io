$(document).ready(function(){
	 
	$('.ok-sost').click(function(){
		var kol = $('.col-sost').val();
		 for (var i=0; i<kol; i++) {
		 	$('.table-matr-first').append('<div class="states"><div class="states-number"></div><div class="states-wrap"><div class="states-null"><input type="text" class="one-in"><input type="text" class="one-out"></div><div class="states-one"><input type="text" class="two-in"><input type="text" class="two-out"></div></div></div>');

		 	var statesnumber = $('.states-number');
		 	
		 }
          $('.states-number').each(function(i){
          	 $(this).text(i+1);
          });
		
		
	});



	$('.addclass').click(function(){ 
		var ksost=0;
		ksost=0;
			var massa = [];
			var massb = [];
			var massc = [];
			var massd = [];
			var masse = [];
			var massf = [];
		$(".table-p1").remove();
		$(".table-p2").remove();
		$(".table-p3").remove();
		massa = [];
		massb = [];
		massc = [];
		massd = [];
		masse = [];
		massf = [];
		$('.class-a').text('');
		$('.class-b').text('');
		$('.class-c').text('');
		$('.class-d').text('');
	    arr=[];
	    arrone=[];
		arrtwo=[];
		masstwo=[];
		arrpthree = [];
		arrthreenew=[];
		arrthreenewtwo=[];
		indexmass=[];

		 	for (var j=0; j<$('.states').length; j++) {
		 		if ($('.states').eq(j).find('.one-out').val()==='0' && $('.states').eq(j).find('.two-out').val()==='1') {
		 			
		 			$('.class-a').append(j+1,', ');
		 			$('.states').eq(j).attr('data-info', 'a');
		 			massa.push(j+1);
		 		}
		 		if ($('.states').eq(j).find('.one-out').val()==='1' && $('.states').eq(j).find('.two-out').val()==='0') {
		 			
		 			$('.class-b').append(j+1,', ');
		 			$('.states').eq(j).attr('data-info', 'b');
		 			massb.push(j+1);
		 		}
		 		if ($('.states').eq(j).find('.one-out').val()==='1' && $('.states').eq(j).find('.two-out').val()==='1') {
		 			
		 			$('.class-c').append(j+1,', ');
		 			$('.states').eq(j).attr('data-info', 'c');
		 			massc.push(j+1);
		 		}
		 		if ($('.states').eq(j).find('.one-out').val()==='0' && $('.states').eq(j).find('.two-out').val()==='0') {
		 			
		 			$('.class-d').append(j+1,', ');
		 			$('.states').eq(j).attr('data-info', 'd');
		 			massd.push(j+1);
		 		}
		 	}

             var kolmatr=$('.col-sost').val();

		 	 for (var y=0; y<kolmatr; y++) {

		 	 	$('.p1').append('<div class="table-p1"><div class="p1-class"></div><div class="p1-number"></div><div class="p1-wrap"><div class="p1-null"></div><div class="p1-one"></div></div></div>');

		 	
		 	 }

		 $('.p1-number').each(function(i){
          	 $(this).text(i+1);
          });

		 $('.one-in').each(function(i) {
		 	 if ($('.class-a').text().includes($('.one-in').eq(i).val())) {
		 	 	$('.one-in').eq(i).attr('data-info', 'a');
		 	 }
		 	  if ($('.class-b').text().includes($('.one-in').eq(i).val())) {
		 	 	$('.one-in').eq(i).attr('data-info', 'b');
		 	 }
		 	  if ($('.class-c').text().includes($('.one-in').eq(i).val())) {
		 	 	$('.one-in').eq(i).attr('data-info', 'c');
		 	 }
		 	  if ($('.class-d').text().includes($('.one-in').eq(i).val())) {
		 	 	$('.one-in').eq(i).attr('data-info', 'd');
		 	 }
		 	  if ($('.class-e').text().includes($('.one-in').eq(i).val())) {
		 	 	$('.one-in').eq(i).attr('data-info', 'e');
		 	 }
		 	 
		 });
		 $('.two-in').each(function(i) {
		 	 if ($('.class-a').text().includes($('.two-in').eq(i).val())) {
		 	 	$('.two-in').eq(i).attr('data-info', 'a');
		 	 }
		 	  if ($('.class-b').text().includes($('.two-in').eq(i).val())) {
		 	 	$('.two-in').eq(i).attr('data-info', 'b');
		 	 }
		 	  if ($('.class-c').text().includes($('.two-in').eq(i).val())) {
		 	 	$('.two-in').eq(i).attr('data-info', 'c');
		 	 }
		 	  if ($('.class-d').text().includes($('.two-in').eq(i).val())) {
		 	 	$('.two-in').eq(i).attr('data-info', 'd');
		 	 }
		 	  if ($('.class-e').text().includes($('.two-in').eq(i).val())) {
		 	 	$('.two-in').eq(i).attr('data-info', 'e');
		 	 }
		 	 
		 });

		 	$('.one-in').each(function(i) {
		 		
		 		$('.p1-null').eq(i).text($('.one-in')[i].getAttribute('data-info'));
		 	});

		 	$('.two-in').each(function(i) {
		 		
		 		$('.p1-one').eq(i).text($('.two-in')[i].getAttribute('data-info'));
		 	});



		 	$('.p1-number').each(function(i) {
		 		if ($('.class-a').text().includes($('.p1-number').eq(i).text())) {
		 	 		$('.p1-class').eq(i).text('a');
		 	 	}
		 	 	if ($('.class-b').text().includes($('.p1-number').eq(i).text())) {
		 	 		$('.p1-class').eq(i).text('b');
		 	 	}
		 	 	if ($('.class-c').text().includes($('.p1-number').eq(i).text())) {
		 	 		$('.p1-class').eq(i).text('c');
		 	 	}
		 	 	if ($('.class-d').text().includes($('.p1-number').eq(i).text())) {
		 	 		$('.p1-class').eq(i).text('d');
		 	 	}
		 	 	if ($('.class-e').text().includes($('.p1-number').eq(i).text())) {
		 	 		$('.p1-class').eq(i).text('e');
		 	 	}
		 	});
		 	var arr = [];
	
			$('.p1-class').each(function(i) {
				arr[i]=$('.p1-class').eq(i).text();
			});

		 	console.log(duplicate_values(arr)); 

		 	
		 	//вывод таблицы p2
		 	var kolstates = $('.states');

		 	 for (var i=0; i<kolstates.length; i++) {
		 		$('.p2').append('<div class="table-p2"><div class="p2-class"></div><div class="p2-number"></div><div class="p2-wrap"><div class="p2-null"></div><div class="p2-one"></div></div></div>');

		 	
		 	
		 	}

		 	 $('.p2-number').each(function(i){
          		 $(this).text(i+1);
          	});

		 	$('.p2-class').each(function(i) {
				$('.p2-class').eq(i).text($('.p1-class').eq(i).text());
			}); 

			var arrone=[];
			var arrtwo=[];
			for (var i=0; i<$('.p1-null').length; i++) {
				if (duplicate_values(arr)[0].includes($('.p2-class').eq(i).text())) {
					arrone.push($('.p1-null').eq(i).text());
					
				}
				
			}
			 console.log(arrone);

			 $('.p1-wrap').each(function(i) {
			 	if ($('.p1-class').eq(i).text()==='a') {
				 		if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('a');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('b');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('c');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('d');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('e');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('f');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('g');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('y');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('z');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('x');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('v');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('n');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('m');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('l');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('k');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('j');
				 	}
			 	}

			 	if ($('.p1-class').eq(i).text()==='b') {
			 		if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('a^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('b^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('c^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('d^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('e^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('f^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('g^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('y^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('z^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('x^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('v^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('n^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('m^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('l^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('k^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('j^');
				 	}
			 	}

			 	if ($('.p1-class').eq(i).text()==='c') {
			 		if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('a^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('b^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('c^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('d^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('e^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('f^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('g^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('y^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('z^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('x^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('v^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('n^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('m^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('l^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('k^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('j^^');
				 	}
			 	}

			 	if ($('.p1-class').eq(i).text()==='d') {
			 		if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('a^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('b^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('c^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='a' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('d^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('e^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('f^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('g^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='b' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('y^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('z^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('x^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('v^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='c' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('n^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='a'){
				 		$('.p2-class').eq(i).text('m^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='b'){
				 		$('.p2-class').eq(i).text('l^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='c'){
				 		$('.p2-class').eq(i).text('k^^^');
				 	}
				 	if ($('.p1-null').eq(i).text()==='d' && $('.p1-one').eq(i).text()==='d'){
				 		$('.p2-class').eq(i).text('j^^^');
				 	}
			 	}

			 });
			 var masstwo=[];
			$('.states-wrap').each(function(i) {

				masstwo.push($('.p2-class').eq(i).text());
			});
			console.log(masstwo);

			$('.p2-null').each(function(i) {
				if ($('.one-in').eq(i).val()==='1'){
					$('.p2-null').eq(i).text(masstwo[0]);
				}
				if ($('.one-in').eq(i).val()==='2'){
					$('.p2-null').eq(i).text(masstwo[1]);
				}
				if ($('.one-in').eq(i).val()==='3'){
					$('.p2-null').eq(i).text(masstwo[2]);
				}
				if ($('.one-in').eq(i).val()==='4'){
					$('.p2-null').eq(i).text(masstwo[3]);
				}
				if ($('.one-in').eq(i).val()==='5'){
					$('.p2-null').eq(i).text(masstwo[4]);
				}
	
			});

			$('.p2-one').each(function(i) {
				if ($('.two-in').eq(i).val()==='1'){
					$('.p2-one').eq(i).text(masstwo[0]);
				}
				if ($('.two-in').eq(i).val()==='2'){
					$('.p2-one').eq(i).text(masstwo[1]);
				}
				if ($('.two-in').eq(i).val()==='3'){
					$('.p2-one').eq(i).text(masstwo[2]);
				}
				if ($('.two-in').eq(i).val()==='4'){
					$('.p2-one').eq(i).text(masstwo[3]);
				}
				if ($('.two-in').eq(i).val()==='5'){
					$('.p2-one').eq(i).text(masstwo[4]);
				}
				
			});

			//вывод таблицы p3 
			 for (var i=0; i<kolstates.length; i++) {
		 		$('.p3').append('<div class="table-p3"><div class="p3-class"></div><div class="p3-number"></div><div class="p3-wrap"><div class="p3-null"></div><div class="p3-one"></div></div></div>');
		 	
		 	}

		 	$('.p3-number').each(function(i){
          		 $(this).text(i+1);
          	});

          	$('.p3-class').each(function(i){
          		$('.p3-class').eq(i).text($('.p2-class').eq(i).text());
          	});

          	var arrpthree = [];
	
			$('.p3-class').each(function(i) {
				arrpthree[i]=$('.p3-class').eq(i).text();
			});

		 	console.log(duplicate_values(arrpthree)); 

			var arrthreenew=[];
			var arrthreenewtwo=[];


			if (duplicate_values(arrpthree).length>0) {

			for (var i=0; i<$('.p1-null').length; i++) {
				if (duplicate_values(arrpthree)[0].includes($('.p3-class').eq(i).text())) {
					arrthreenew.push($('.p2-null').eq(i).text());
					
				}
				
			}

			for (var i=0; i<$('.p1-null').length; i++) {
				if (duplicate_values(arrpthree)[0].includes($('.p3-class').eq(i).text())) {
					arrthreenewtwo.push($('.p2-one').eq(i).text());
					
				}
				
			}


			 console.log(arrthreenew);
			  console.log(arrthreenewtwo);

			  var indexmass=[];

			  if (arrthreenew[0]!=arrthreenew[1] || arrthreenewtwo[0]!=arrthreenewtwo[1] ) {
			  	$('.p3-class').each(function(i){
			  		if (duplicate_values(arrpthree)[0].includes($('.p3-class').eq(i).text())) {
			  			indexmass[i]=$('.p3-number').eq(i).text();
			  		}
			  	});
			  	$('.p3-class').each(function(i) {
			  		$('.p3-class').eq(indexmass[0]).text('u^^');
			  	});
			  }

			  console.log(indexmass);

			  //заполнение p3

			   var massresfour=[];
			$('.states-wrap').each(function(i) {

				massresfour.push($('.p3-class').eq(i).text());
			});
			

			$('.p3-null').each(function(i) {
				if ($('.one-in').eq(i).val()==='1'){
					$('.p3-null').eq(i).text(massresfour[0]);
				}
				if ($('.one-in').eq(i).val()==='2'){
					$('.p3-null').eq(i).text(massresfour[1]);
				}
				if ($('.one-in').eq(i).val()==='3'){
					$('.p3-null').eq(i).text(massresfour[2]);
				}
				if ($('.one-in').eq(i).val()==='4'){
					$('.p3-null').eq(i).text(massresfour[3]);
				}
				if ($('.one-in').eq(i).val()==='5'){
					$('.p3-null').eq(i).text(massresfour[4]);
				}

				
			});

			$('.p3-one').each(function(i) {
				if ($('.two-in').eq(i).val()==='1'){
					$('.p3-one').eq(i).text(massresfour[0]);
				}
				if ($('.two-in').eq(i).val()==='2'){
					$('.p3-one').eq(i).text(massresfour[1]);
				}
				if ($('.two-in').eq(i).val()==='3'){
					$('.p3-one').eq(i).text(massresfour[2]);
				}
				if ($('.two-in').eq(i).val()==='4'){
					$('.p3-one').eq(i).text(massresfour[3]);
				}
				if ($('.two-in').eq(i).val()==='5'){
					$('.p3-one').eq(i).text(massresfour[4]);
				}

				
			});
		}

		var masskolsost=[];
		var kolpovtor=0;
		$('.p3-class').each(function(i) {
			 ksost++;
			masskolsost[i]=$('.p3-class').eq(i).text();

		});
		
		console.log(masskolsost);
		console.log(duplicate_values(masskolsost));
		$('.p3-class').each(function(i) {
			if (duplicate_values(masskolsost).includes($('.p3-class').eq(i).text())) {
					kolpovtor++;
					
			}
		});
		console.log(kolpovtor);
		if (kolpovtor>0) {
			ksost=ksost-kolpovtor+1;
		}
		
		$('.colichsost').append(ksost + ' ');


	});
	
	
	
function duplicate_values(arr) 
{
    var arr_res = []; // результирующий массив
    /* проход по массиву слева-направо */
    for (var i=1; i < arr.length; i++) {                   
        /* проходим массив в обратном порядке, начиная с элемента arr[i-1] */                   
        for (var j=i-1; j >= 0; j--) { 
            /* если ранее в массиве уже встречался элемент
               с таким же значением как и у текущего, 
               то помещаем это значение в результирующий массив
               (предварительно проверив, нет ли там уже такого значения), 
               завершаем внутренний цикл и переходим 
               на следующую итерацию внешнего цикла*/ 
            if (arr[j] === arr[i]) { 
                var is_unique = true; // флаг уникальности элемента
                for (var k=0; k < arr_res.length; k++) {
                    if (arr_res[k] === arr[i]) {
                        is_unique = false;
                        break;
                    }
                }
                if (is_unique) {
                    arr_res.push(arr[i]); 
                }
                break;
            } 
        } 
    } 
    return arr_res;
}
	
	$('.perebroska-one').click(function(){
		for (var i=0; i<4; i++) {
			if ($('.one-in').eq(0).val()==='1') {
				$('.one-in').eq(0).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(0).val()==='2') {
				$('.one-in').eq(0).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(0).val()==='3') {
				$('.one-in').eq(0).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(0).val()==='4') {
				$('.one-in').eq(0).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
		for (var i=0; i<4; i++) {
			if ($('.two-in').eq(0).val()==='1') {
				$('.two-in').eq(0).val('2');
				  $('.addclass').trigger( "click" );
			} else 
			if ($('.two-in').eq(0).val()==='2') {
				$('.two-in').eq(0).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(0).val()==='3') {
				$('.two-in').eq(0).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(0).val()==='4') {
				$('.two-in').eq(0).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
	});
	$('.perebroska-two').click(function(){
		for (var i=0; i<4; i++) {
			if ($('.one-in').eq(1).val()==='1') {
				$('.one-in').eq(1).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(1).val()==='2') {
				$('.one-in').eq(1).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(1).val()==='3') {
				$('.one-in').eq(1).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(1).val()==='4') {
				$('.one-in').eq(1).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
		for (var i=0; i<4; i++) {
			if ($('.two-in').eq(1).val()==='1') {
				$('.two-in').eq(1).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(1).val()==='2') {
				$('.two-in').eq(1).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(1).val()==='3') {
				$('.two-in').eq(1).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(1).val()==='4') {
				$('.two-in').eq(1).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
	});
	$('.perebroska-three').click(function(){
		for (var i=0; i<4; i++) {
			if ($('.one-in').eq(2).val()==='1') {
				$('.one-in').eq(2).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(2).val()==='2') {
				$('.one-in').eq(2).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(2).val()==='3') {
				$('.one-in').eq(2).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(2).val()==='4') {
				$('.one-in').eq(2).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
		for (var i=0; i<4; i++) {
			if ($('.two-in').eq(2).val()==='1') {
				$('.two-in').eq(2).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(2).val()==='2') {
				$('.two-in').eq(2).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(2).val()==='3') {
				$('.two-in').eq(2).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(2).val()==='4') {
				$('.two-in').eq(2).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
	});
	$('.perebroska-four').click(function(){
		for (var i=0; i<4; i++) {
			if ($('.one-in').eq(3).val()==='1') {
				$('.one-in').eq(3).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(3).val()==='2') {
				$('.one-in').eq(3).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(3).val()==='3') {
				$('.one-in').eq(3).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.one-in').eq(3).val()==='4') {
				$('.one-in').eq(3).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
		for (var i=0; i<4; i++) {
			if ($('.two-in').eq(3).val()==='1') {
				$('.two-in').eq(3).val('2');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(3).val()==='2') {
				$('.two-in').eq(3).val('3');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(3).val()==='3') {
				$('.two-in').eq(3).val('4');
				  $('.addclass').trigger( "click" );
			} else
			if ($('.two-in').eq(3).val()==='4') {
				$('.two-in').eq(3).val('1');
				  $('.addclass').trigger( "click" );
			}
		}
	});

});