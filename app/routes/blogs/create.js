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
         * @param blog {Object} new post to store.
         */
        savePost: function(blog) {
            var firstPage = 1;
            var self = this;
            var newBlog = this.store.createRecord('blog', blog);
            newBlog.save().then(function(response) {
                self.transitionTo('blogs.detail', firstPage, response.get('id'));
            });
        }
    }
});
