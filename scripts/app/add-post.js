/**
 * AddActivity view model
 */

var app = app || {};

app.AddPost = (function () {
    'use strict'

    var addPostViewModel = (function () {
        
        var $newStatus;
        var validator;
        
        var init = function () {
            
            validator = $('#enterStatus').kendoValidator().data('kendoValidator');
            $newStatus = $('#newStatus');
        };
        
        var show = function () {
            
            // Clear field on view show
            $newStatus.val('');
            validator.hideMessages();
        };
        
       var savePost = function () {
            
            // Validating of the required fields
            if (validator.validate()) {
                
                // Adding new activity to Activities model
                var posts = app.Posts.posts;
                var post = posts.add();
                
                post.Title = $newStatus.val();
                post.User_id = app.Users.currentUser.get('data').Id;
                
                posts.one('sync', function () {
                    app.mobileApp.navigate('#:back');
                });
                
                activities.sync();
            }
        };

        return {
            init: init,
            show: show,
            me: app.Users.currentUser,
            savePost: savePost
        };
        
    }());
    
    return addPostViewModel;
    
}());
