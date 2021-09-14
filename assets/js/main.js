/*
*=======================
*      HEADER FLOW
*=======================
*/
$(document).ready(function(){
  
  const lastScrollTop = 0;
  $(window).scroll(function(event){
    const st = $(this).scrollTop();
    const $header = $('.header-section');
    const $a = $('.menu-list a')
    

    if(st >= 40){
      $header.addClass('active')
      $a.addClass('active-color')
    }else{
      $header.removeClass('active')
      $a.removeClass('active-color')
    }
  });

      
      //hakkımda
  $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
});

;(function () {
	
    'use strict';
  
    // Scroll Animations

    
	// Animate Bio
	var animateBio = function() {
		if ( $('#about').length > 0 ) {
			$('#about .to-animate').each(function(k){

				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};

    var bioWayPoint = function() {
      if ($('#about').length > 0 ) {
        $('#about').waypoint( function( direction ) {
                      
          if( direction === 'down' && !$(this).hasClass('animated') ) {
            
            setTimeout( animateBio , 200);
            
            $(this).addClass('animated');
              
          }
        } , { offset: '90%' } );
      }
    };
  
    
    $(function(){
      bioWayPoint();
    });
}());

 /* function new_element(){
    var text = $('#message').val();
    $('#yorum').append('<p style="color:black;">'+text+'</p>')
  }*/

  window.onload = () => {
    const form1 = document.querySelector("#addForm");
  
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
  
    let editItem = null;
  
    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};
  
function addItem(e) {
    e.preventDefault();
  
    if (submit.value != "Submit") {
        console.log("Hello");
  
        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;
  
        submit.value = "Submit";
        document.getElementById("item").value = "";
  
        document.getElementById("lblsuccess").innerHTML
            = "Text edited successfully";
  
        document.getElementById("lblsuccess")
                        .style.display = "block";
  
        setTimeout(function() {
            document.getElementById("lblsuccess")
                            .style.display = "none";
        }, 3000);
  
        return false;
    }
  
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
  
    let li = document.createElement("li");
    li.className = "list-group-item";
  
    let deleteButton = document.createElement("button");
  
    deleteButton.className = 
        "btn-danger btn btn-sm float-right delete";
  
    deleteButton.appendChild(document.createTextNode("Delete"));
  
    let editButton = document.createElement("button");
  
    editButton.className = 
            "btn-success btn btn-sm float-right edit";
  
    editButton.appendChild(document.createTextNode("Edit"));
  
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    items.appendChild(li);
}
  
function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you Sure?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML
                = "Text deleted successfully";
  
            document.getElementById("lblsuccess")
                        .style.display = "block";
  
            setTimeout(function() {
                document.getElementById("lblsuccess")
                        .style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}
  
function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}