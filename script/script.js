/**
 * Created by Marta on 13.11.2015.
 */
$(document).ready(function() {

    var allPict=$('.gallery img');
    var  nextImg=$('#nextImg');
    var prevImg=$('#prevImg');
    var currentImg=0;
    var t=700;

    allPict.eq(currentImg).show();

    nextImg.on('click',function(){
        allPict.eq(currentImg).fadeOut(t,function(){
           allPict.hide();
            allPict.eq(currentImg).fadeIn(t);
        });
        currentImg++;
        if (currentImg>=allPict.length){
            currentImg=0;
        }

    });



    prevImg.on('click',function(){
        allPict.eq(currentImg).fadeOut(t,function(){
            allPict.hide();
            allPict.eq(currentImg).fadeIn(t);
        });
        currentImg--;
        if (currentImg<0){
            currentImg=allPict.length-1;
        }

    });

});