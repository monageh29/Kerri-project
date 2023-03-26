
 
//  loading

//  هنا بتحكم ف loading 
// لو موقع جاهز اعمل slideUp

 $(window).ready(function(){
     $('#loading').slideUp(3000,function(){
         $('body').css('overflow-y','scroll')
     })
 })
//  اصتخدمت طريقة callback
//  عشان overflow يتنفذ بعد slideUp



// option box

$('.settings-icon i').click(function(){
    // استخدمت outer عشان مدي padding
    // وهنا بشوف صندوق مساحته كام عشان اعرف احركه
        let BoxWidth=  $('.optionsSide').outerWidth()
    
        // هنا بعرف div الاساسية شمالها بيبدأ منين  
          let leftOffset = $('.options').offset().left;
       
    
        //   لو شمالها 0 يعني مفتوحة رجعها بالسالب علي قد مساحتها يعني اقفلها 
      if(leftOffset == 0){
          $('.options').css({
              left:`-${BoxWidth}px`,
              transition:'all 1s'
          })
      }else{
        // لو مش ب 0 يعني مقفولة افتحها ورجعها 0 تاني 
          $('.options').css({
              left:`0px`,
              transition:'all 1s'
          })
      }
      })



    //   change background
      $('.options img').click(function(){
        let clickedImg  =$(this).attr('src')
        $('#home').css({backgroundImage:`url(${clickedImg})`,transition:'all 1s '})
     })
    

 //down icon 
 $('.down-icon i').click(function(){
  let aboutTop =$('#about').offset().top;
  $('body , html').animate({
    scrollTop:aboutTop
},2000)
})