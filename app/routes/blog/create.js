import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Create blog route.
 *
 * @class CreateBlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     * Gets User Id.
     *
     * @return {String} unique user ID
     */
    getUserId: function () {
        return localStorage.getItem('user_id');
    },
    actions: {
        /**
         * Create a new blog.
         *
         * @param post {Object} new post to store.
         */
        savePost: function(blog) {
            var self = this;
            //TODO change code bellow instead of using jQuery
            //FIXME remove commented code
            // var newBlog = this.store.createRecord('blog', blog);
            // newBlog.save().then(function() {
            //     self.transitionTo('blog');
            // });
            var url = 'http://blogr-api.herokuapp.com/api/user/{0}/blog'.replace('{0}', this.getUserId());
            Ember.$.ajax({
                method: 'POST',
                url: url,
                data: blog,
                beforeSend: function (request) {
                    request.setRequestHeader('session_id', localStorage.getItem('session_id'));
                }
            }).done(function(blog) {
                self.transitionTo('blog');
                var blogRecord = self.store.createRecord('blog', {
                    id: blog['blog_id'],
                    title: blog['title'],
                    message: blog['message'],
                    creationDate: new Date(blog['creation_date']),
                    owner: blog['owner']['user_id']
                });
            }).fail(function(e) {
                var controller = self.controllerFor('create');
                controller.set('errorMessage', e.responseText);
            });
        }
    }
});
