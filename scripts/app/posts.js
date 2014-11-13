/**
 * Activities view model
 */

var app = app || {};

app.Posts = (function () {
    'use strict'

    // Posts model
    var postsModel = (function () {

        var postModel = {

            id: 'Id',
            fields: {
                Title: {
                    field: 'Title',
                    defaultValue: ''
                },
                CreatedAt: {
                    field: 'CreatedAt',
                    defaultValue: new Date()
                },
                Picture: {
                    fields: 'Picture',
                    defaultValue: null
                },
                User_id: {
                    field: 'User_id',
                    defaultValue: null
                },
                Description: {
                    field: 'Description',
                    defaultValue: []
                },
                Location: {
                    field: 'Location',
                    defaultValue: []
                },
                Price: {
                    field: 'Price',
                    defaultValue: null
                },
                Category_id: {
                    field: 'Category_id',
                    defaultValue: null
                },
                PostType_id: {
                    field: 'PostType_id',
                    defaultValue: null
                },
                SaleEndDate: {
                    field: 'SaleEndDate',
                    defaultValue: new Date()
                },

            },
            CreatedAtFormatted: function () {

                return app.helper.formatDate(this.get('CreatedAt'));
            },
            PictureUrl: function () {

                return app.helper.resolvePictureUrl(this.get('Picture'));
            },
            User: function () {

                var user_id = this.get('User_id');

                var user = $.grep(app.Users.users(), function (e) {
                    return e.Id === user_id;
                })[0];

                return user ? {
                    DisplayName: user.DisplayName,
                    PictureUrl: app.helper.resolveProfilePictureUrl(user.Picture)
                } : {
                    DisplayName: 'Anonymous',
                    PictureUrl: app.helper.resolveProfilePictureUrl()
                };
            },
            isVisible: function () {
                var currentUserId = app.Users.currentUser.data.Id;
                var user_id = this.get('User_id');

                return currentUserId === user_id;
            }
        };

        // Activities data source. The Backend Services dialect of the Kendo UI DataSource component
        // supports filtering, sorting, paging, and CRUD operations.
        var postsDataSource = new kendo.data.DataSource({
            type: 'everlive',
            schema: {
                model: postModel
            },
            transport: {
                // Required by Backend Services
                typeName: 'Posts'
            },
            change: function (e) {

                if (e.items && e.items.length > 0) {
                    $('#no-posts-span').hide();
                } else {
                    $('#no-posts-span').show();
                }
            },
            sort: { field: 'CreatedAt', dir: 'desc' }
        });

        return {
            posts: postsDataSource
        };

    }());

    // Activities view model
    var postsViewModel = (function () {

        // Navigate to activityView When some activity is selected
        var postSelected = function (e) {

            app.mobileApp.navigate('views/postView.html?uid=' + e.data.uid);
        };

        // Navigate to app home
        var navigateHome = function () {

            app.mobileApp.navigate('#welcome');
        };

        // Logout user
        var logout = function () {

            app.helper.logout()
            .then(navigateHome, function (err) {
                app.showError(err.message);
                navigateHome();
            });
        };

        return {
            posts: postsModel.posts,
            postSelected: postSelected,
            logout: logout
        };

    }());

    return postsViewModel;

}());
