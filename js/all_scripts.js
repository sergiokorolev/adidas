

$(document).ready(function (){




$('.product-order').on('click', function(){

    var that = $(this).closest('.product-item').find('img');
    var bascket = $(".bascket");
    var w = that.width();
    
       that.clone()
           .css({'width' : w,
        'position' : 'absolute',
        'z-index' : '9999',
        top: that.offset().top,
        left:that.offset().left})
           .appendTo("body")
           .animate({opacity: 0.05,
               left: bascket.offset()['left'],
               top: bascket.offset()['top'],
               width: 50}, 1200, function() {   
                $(this).remove();
            });
});


//////////////////////////////

//����� jquery
});



