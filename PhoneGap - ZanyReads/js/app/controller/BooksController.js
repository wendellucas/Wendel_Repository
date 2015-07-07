define(function () {
	var swiperControl;
	var body;
	function BookController() {
   
    }
	
	BookController.prototype = {
		
		  setClick:function(swiperControl){
			  $('.close').click(function(){
			  $('.swiper-container').remove();
		  });
			  
			  this.swiperControl =swiperControl;
			  this.body=body;
				$("#books > div").each(function(){
					var context = $(this);
					
						var id=context.attr('id');
						context.click(function(){
						swiperControl.render(id);
					})
				});
		
		}
		
		    
	}
		
	
	
	 return BookController;
	
});