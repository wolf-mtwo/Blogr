import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Detail blog route.
 *
 * @class DetailBlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     * Load a blog by Id.
     *
     * @param params {Object} URL parameters
     * @return a blog model instance
     */
    model: function(params) {
        var blogId = params.blogId;
        //TODO don't user local storage
        localStorage.setItem('blog_id', blogId);
        this.controllerFor('blogs').set('blogId', blogId);
        return this.store.find('blog', blogId);
    }
});
