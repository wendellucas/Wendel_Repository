define(['jquery'], function ($) {
    return {
        getBody: function () {
            return $('body').find('#modalcontent');
        }
    }
});
