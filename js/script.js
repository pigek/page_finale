var positionY;
var scrollTop;

var lastPositionX =0;
var hauteurFenetre;
var largeurFenetre;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
     hauteurFenetre = $(window).width();
     largeurFenetre = $(window).height();
    let scaleFactor=1.0;
    
 }); 
    
////vous pouvez rédiger vos modification ici !

/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); //création d'une varible contenant la "quantitée de scroll"
    var scrollReduit = mapValue(scrollTop,0,9*hauteurFenetre,1,10);

    $('main').css({
      'scale' :''+scrollReduit+'',
    });
 });

 
  $(window).on('mousemove', function(){
    positionY = event.pageY - scrollTop; // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll
    
});


/// mouvement 2 

$(document).ready(function(){
  $("#svg14").mouseenter(function(){
    $(".svg1, .svg2, .svg3, .svg4, .svg5,.svg6, .svg7, .svg8, .svg9, .svg10, .svg11, .svg12, .svg13").each(function () {
                    let obj = $(this);
                    let objPos = obj.offset();
                    let obj1Pos = $("#svg14").offset();

                    let dx = objPos.left - obj1Pos.left;
                    let dy = objPos.top - obj1Pos.top;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    let normX = dx / distance;
                    let normY = dy / distance;

                    obj.css("transform", `translate(${normX * 100}px, ${normY * 100}px)`);
                  
                });
            });

            $("#svg14").mouseleave(function () {
                $("#svg1, .svg2, .svg3, .svg4, .svg5,.svg6, .svg7, .svg8, .svg9, .svg10, .svg11, .svg12, .svg13").css("transform", "translate(0, 0)");
            });
        });


$(document).ready(function(){
  $("#svg15").mouseenter(function(){
    $(".svg16, .svg17, .svg18, .svg19, .svg20,.svg21, .svg22, .svg23, .svg24, .svg25, .svg26, .svg27, .svg28, .svg29").each(function () {
                    let obj = $(this);
                    let objPos = obj.offset();
                    let obj1Pos = $("#svg15").offset();

                    let dx = objPos.left - obj1Pos.left;
                    let dy = objPos.top - obj1Pos.top;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    let normX = dx / distance;
                    let normY = dy / distance;

                    obj.css("transform", `translate(${normX * 100}px, ${normY * 100}px)`);
                });
            });

            $("#svg15").mouseleave(function () {
                $(".svg16, .svg17, .svg18, .svg19, .svg20,.svg21, .svg22, .svg23, .svg24, .svg25, .svg26, .svg27, .svg28, .svg29").css("transform", "translate(0, 0)");
            });
        });

///mouvement 3


document.addEventListener('DOMContentLoaded', function() {
  // Parcourez les identifiants de svg1 à svg29
  for (let i = 1; i <= 29; i++) {
      // Ignorez svg14 et svg15
      if (i === 14 || i === 15) continue;
      const img = document.getElementById(`svg${i}`);
      if (img) {
          makeDraggable(img);
      }
  }
});

function makeDraggable(img) {
  let isDragging = false;
  let startX, startY, initialLeft, initialTop;

  img.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      // Obtenez les positions initiales
      initialLeft = parseInt(window.getComputedStyle(img).left, 10);
      initialTop = parseInt(window.getComputedStyle(img).top, 10);
      // Si les positions ne sont pas définies, initialisez-les à 0
      if (isNaN(initialLeft)) initialLeft = 0;
      if (isNaN(initialTop)) initialTop = 0;
      // Empêchez le comportement par défaut de l'image lors du glissement
      e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
      if (isDragging) {
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          img.style.position = 'absolute';
          img.style.left = `${initialLeft + dx}px`;
          img.style.top = `${initialTop + dy}px`;
      }
  });

  document.addEventListener('mouseup', function() {
      isDragging = false;
  });
}

// mouvement 4


$(document).ready(function() {
    $(document).on("mousemove", function(event) {
        let windowHeight = $(window).height();
        let mouseY = event.clientY;
  
        let heightPercentage = (mouseY / windowHeight) * 100;
        let gradientHeight = Math.max(0, Math.min(100, heightPercentage));
  
        // Calcul du dégradé dynamique
        let gradientValue = 'linear-gradient(to bottom, rgba(212, 32, 22, ' + (1 - gradientHeight / 100) + '), rgba(255, 255, 255, 1))';
  
  
        $(".gradient-overlay").css({
            "height": gradientHeight + "%",
            "background": gradientValue
        });
    });
});


$(document).on("dblclick", function() {
    $("body").fadeOut(0, function() {
        location.reload();
    });
});


