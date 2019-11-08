//Aplicar carrusel en la seccion de noticias
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//Estacionar menu en la parte superior
$(document).ready(function(){
  //Obtener ancho de ventana
  var ventana_ancho = $(window).width();
/*
  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header .menu").css({"position":"fixed"});
      $("header .menu").css({"width":"100%"});
      $("header .menu").css({"top":"0"});
      $("header .menu").css({"background":"#FFF"});
      $("header .menu").css({"box-shadow":"rgba(0, 0, 0, 0.22) 6px 1px 1px"});
      $("header .menu").css({"z-index":"100"});
      $("header .menu .contenedor a img").attr("src","Imagenes/logo-blanco.png");
      $("header .menu .contenedor nav .lista-menu li a").css({"color":"#000"});
    }else {
      $("header .menu").css({"position":"relative"});
      $("header .menu").css({"background":"#000"});
      $("header .menu").css({"box-shadow":"0 0 0"});
      $("header .menu .contenedor a img").attr("src","Imagenes/logo-negro.png");
      $("header .menu .contenedor nav .lista-menu li a").css({"color":"#C3C9CA"});
    }
  })
*/

  //Desplazamientos de la pagina
  $('.home').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 50);
	});

  $('.botonHistoria').click(function(){
		$('body, html').animate({
			scrollTop: $("#mi-historia").offset().top-60
		}, 50);
	});

  $('.botonEmprender').click(function(){
		$('body, html').animate({
			scrollTop: $("#emprendamos-juntos").offset().top-60
		}, 50);
	});

  if (ventana_ancho<800) {
    //Dinamica de la barra de menu para moviles
    $(".icono-menu").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonSobremi").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonHistoria").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonEmpresas").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonNoticias").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonEmprender").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })

    $(".botonContacto").click(function(){
      $("header .menu .contenedor nav").slideToggle();
    })
  }
})
