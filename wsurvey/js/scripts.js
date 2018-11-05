jQuery(document).ready(function ($) {

	// countdown
	var countdown = 15 * 60 * 1000;
	var timerId = setInterval(function(){
	  countdown -= 1000;
	  var min = Math.floor(countdown / (60 * 1000));
	  //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
	  var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

	  if (countdown <= 0) {
		 //alert("30 min!");
		 clearInterval(timerId);
		 //doSomething();
	  } else {
		 $("#countTime").html(min + " : " + sec);
	  }

	}, 1000); //1000ms. = 1sec.
	
	// load content and form
	$(".srv_btn-2").click(function(e){
		e.preventDefault();
		$("#srvPg1").css("height", 0).fadeOut();
		$("#srvPg2").fadeIn();
	});
	$(".srv_btn-3").click(function(){
		$("#srvPg2").css("height", 0).fadeOut();
		$("#srvPg3").fadeIn();
	});
	$(".srv_btn-4").click(function(){
		$("#srvPg3").css("height", 0).fadeOut();
		$("#srvPg4").fadeIn();
	});
	$(".srv_btn-5").click(function(){
		$("#srvPg4").css("height", 0).fadeOut();
		$("#srvPg4b").fadeIn();
		setTimeout(function(){
			$("p.first").fadeIn();
			setTimeout(function(){
				$("p.second").fadeIn();
				setTimeout(function(){
					$("#srvPg4b").css("height", 0).fadeOut();
					$("#srvPg5").fadeIn();
				}, 700);
			}, 700);
		}, 700);
	});
	
	$('input:checkbox').addClass("checked");
	$('input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$('input:checkbox').addClass("checked");
			$('input:checkbox').removeClass("unchecked");
		} else {
			$('input:checkbox').removeClass("checked");
			$('input:checkbox').addClass("unchecked");
		}
	});
	
	// comments btn click
	function mod3() {
		var a=$('.fnameclass').val();
		var b=$('.lnameclass').val();
		var c=$('.useremailclass').val();
		var d=$('.phonenumberclass').val();
		
        var patt = new RegExp(/^[0-9]*$/gm);
        var res = patt.test(d);
        //console.log(res);
		
		var csseco_mailCheck = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        var res2 = csseco_mailCheck.test(c);
		//console.log(res2);
		
		if ( $('input:checkbox').hasClass("unchecked") ) {
			return;
		}
		
		if ( a==null || a=="" || b==null || b=="" || b.length==0 || c==null || c=="" || d==null || d=="" || res == false || res2 == false ) {
			return;
		}
		
		$('#ty').remove();
		$('#ty2').modal('hide');
		setTimeout(function(){
			$('#ty3').modal();
		}, 700);
	}
	
	$(".leave-comments").find("button").click(function(){
		$('#ty2').modal();
		$('.form-wrap').appendTo('.csseco_mdl_cntnt');
		$('#ty2').find('form').submit(function(){
			mod3();
		});
	});
	
	$('#ty2').on('hide.bs.modal', function () {
		$('.form-wrap').appendTo('#srvPg5'); 
	});

});