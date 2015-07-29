import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Handles blog's comment routes.
 *
 * @class BlogsPageDetailCommentsRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     * Loads blog's comments.
     *
     * @param params {object} URL params
     * @return a list of comments
     */
    model: function(params) {
        this.store.unloadAll('comment');
        return this.store.find('comment');
    }
});
