document.addEventListener("DOMContentLoaded",function(){
    $(window).scroll(function(){
       if (this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
       }
        else{
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });



    document.querySelector("#btn1").onclick = function(){
        alert("Hi, there!! Work is still in progress. Thanks for Understanding")
    }

    document.querySelector("#btn2").onclick = function(){
        alert("Hi, there! CV's construction is still in progress. Wait until it finishes. Thanks for Understanding")
    }

    document.querySelector(".btn").onclick = function(){
        const nam = document.querySelector(".nameZone").value;

        alert(`Hi, ${nam}. Work is still in progress. You will be notified on whatsapp when construction will be finished.  Thanks for understanding`);
    }

    $(".goTop").click(function(){
        scroll(0,0);
    })

    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{enabled:true}
    })
});