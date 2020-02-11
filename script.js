var image = document.getElementsByClassName('offer-img');
new simpleParallax(image,
    {
        delay:2.8,
        scale:1.7
    });


    staticBtn = document.getElementById("staticBtn");

    var offer = document.getElementById("offer");

    window.onscroll = function() {scrollFunction()};

    
    function scrollFunction(){
        if (document.body.scrollTop>20||document.documentElement.scrollTop>20)
        {
            staticBtn.style.transform='rotate(180deg)';
        }else
        {
            staticBtn.style.transform='rotate(360deg)';
        }
    }

    function topFunction()
    {
        if (document.body.scrollTop>20||document.documentElement.scrollTop>20)
        {
            document.body.scrollTop=0;
            document.documentElement.scrollTop =0;
        }else
        {
            offer.scrollIntoView();
            
        }


    }


  
