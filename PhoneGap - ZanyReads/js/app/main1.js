define(function (require) {
	var book="";
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
		bookController = require('./controller/BookC'),
        model = require('./model/SwiperModel'),
		
        backbone = require('backbone'),
        underscore = require('underscore');

    //A fabricated API to show interaction of
    //common and specific pieces.
    //controller.setModel(model);
	// return {
     
    //};
	
    $(function () {
		controller.setBody(lib.getBody());
		bookController.setClick(controller,lib.getBody());
        //controller.render(lib.getBody(),'/images');
    });
});
