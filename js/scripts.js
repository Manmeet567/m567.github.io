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

    document.querySelector(".btn").onclick = function(){
        const nam = document.querySelector(".nameZone").value;

        alert(`Hi, ${nam}.Work is still in progress.You will be notified on whatsapp when construction will be finished. Thanks for understanding`);
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