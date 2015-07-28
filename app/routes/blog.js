import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Handles blog routes.
 *
 * @class BlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     *	Load all existent blogs.
     *
     * @return a list of blogs
     */
    model: function() {
        return this.store.find('blog');
    }
});
