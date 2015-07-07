define(function () {
	//this is the constructor of the controller deffinition, that sets the url images
     var  imgcount = 7;// imgcount, in the future it will receive the number from the server
	
    function controllerBase(Iurl) {
        this.Iurl = Iurl;
		 
    }
    //define function methods for the controller
    controllerBase.prototype = {
        //render the div for the slides inside the body
		setBody: function (bodyDom) {
           
        },
        render: function(id) {
			
			if(id=='01')
			{
				imgcount=11;
			}
			else if(id=='02')
			{
				imgcount=14;
			}
			else if(id=='03')
			{
				imgcount=12;
			}
			else if(id=='04')
			{
				imgcount=13;	
			}
			
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp=new XMLHttpRequest();
			}
             else
             {// code for IE6, IE5
                var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
             }
			xmlhttp.open("GET","./images/Book_"+id+"/book1.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML; 
			
			
			var xmlTex=xmlDoc.getElementsByTagName("PAGES");
			//xml.getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
			
			var string=xmlTex[0].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue;
			$('body').find('.swiper-container').remove();
            $('body').find('#modalcontent').prepend('<div class="swiper-container">'
           + '<div id="Wrapper" class="swiper-wrapper">'
           + '</div>'
           +'</div>');
		   
		   for(i=0;i<imgcount;i++)
		   {
			  $('#Wrapper').append('<div class="swiper-slide" id="img'+i+'"></div>');  
		   }
          
           //instance of the slider API
          var swiper = new Swiper('.swiper-container', {
		spaceBetween: 10,
        });
		   $('#img0').append('<div><img src="./images/Book_'+id+'/img0.jpg" style="width:100%; height:100%; position:relative;" /></div>');
		   $('#img1').append("<div>"+
										"<div><img src='./images/Book_"+id+"/img1.jpg' style='width:100%; height:100%; position:relative;' /></div>"+
										"<div class='rectangle-box-green'>"+
											"<div class='rectangle-box-inside'>"+
												"<div class='rectangle-content'><div><span>"+string+"</span></div></div>"+
											"</div>"+
									   "</div>"+
									"</div>");
			var ind=0;
			var dir=1;
			swiper.on('slideChangeStart', function () {
				 var tempindex = ind;
                ind = swiper.activeIndex; //ind receive the active index
				var slideRate=ind - tempindex;
				
				if(slideRate>1 || slideRate<-1)
				{
					ind=tempindex;
					var direction=0;
					if(slideRate>1)
					{
						direction=1;		
					}
					else
					{
						direction=-1;	
					}
					swiper.slideTo(tempindex+direction, 30, true);
				}
				else{
					var div=swiper.slides[ind];
					
					if(tempindex<=ind)
					{
						dir=1;
					}
					else 
					{
						dir=-1;
					}
					
					
					
					if(ind>0 && ind<imgcount-1)
					{
						div=swiper.slides[(ind+(1*dir))];
						if((ind+(1*dir))!=0)
						{
							var slide=(ind+(1*dir));
							string=xmlTex[0].getElementsByTagName("TEXT")[slide-1].childNodes[0].nodeValue;
							$(div).append("<div>"+
										"<div><img src='./images/Book_"+id+"/img"+slide+".jpg' style='width:100%; height:100%; position:relative;' /></div>"+
										"<div class='rectangle-box-green'>"+
											"<div class='rectangle-box-inside'>"+
												"<div class='rectangle-content'><div><span>"+string+"</span></div></div>"+
											"</div>"+
									   "</div>"+
									"</div>");
						}
						else
						{
							  $('#img0').append('<div><img src="./images/Book_'+id+'/img0.jpg" style="width:100%; height:100%; position:relative;" /></div>');
						}
					}
				
					if(ind<imgcount)
					{
						div=swiper.slides[(ind-(2*dir))];
						$(div).find('div').remove();
					}
				
					
						swiper.update();
					
					
				}
				
			});
			
			setTimeout(function(){
						swiper.update();
						}, 500);
			
         
        }
    }
		
	//return
    return controllerBase;
});