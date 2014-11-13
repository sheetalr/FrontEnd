/**
 * Activity view model
 */

var app = app || {};

app.Post = (function () {
    'use strict'
    
    var $commentsContainer,
        listScroller;
    
    var postViewModel = (function () {
        
        var postUid,
            post,
            $postPicture;
        
        var init = function () {
            $commentsContainer = $('#comments-listview');
            $postPicture = $('#picture');
        };
        
        var show = function (e) {
            
            $commentsContainer.empty();
            
            listScroller = e.view.scroller;
            listScroller.reset();
            
            postUid = e.view.params.uid;
            // Get current activity (based on item uid) from Activities model
           post = app.Posts.posts.getByUid(postUid);
            $postPicture[0].style.display = post.Picture ? 'block' : 'none';
            
            app.Comments.comments.filter({
                field: 'PostId',
                operator: 'eq',
                value: post.Id
            });
            
            kendo.bind(e.view.element, post, kendo.mobile.ui);
        };
        
        var removePost = function () {
            
            var posts = app.Posts.post;
            var post = posts.getByUid(postUid);
            
            app.showConfirm(
                appSettings.messages.removePostConfirm,
                'Delete Post',
                function (confirmed) {
                    if (confirmed === true || confirmed === 1) {
                        
                        posts.remove(post);
                        posts.one('sync', function () {
                            app.mobileApp.navigate('#:back');
                        });
                        posts.sync();
                    }
                }
            );
        };
        
        return {
            init: init,
            show: show,
            remove: removePost,
            post: function () {
                return post;
            },
        };
        
    }());
    
    return postViewModel;
    
}());
