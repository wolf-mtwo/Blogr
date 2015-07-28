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
     * @param params {Object} URL params
     */
    model: function(params) {
        return this.store.find('blog', params.blogId);
    }
});
