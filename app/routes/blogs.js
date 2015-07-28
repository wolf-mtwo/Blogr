import SessionRoute from 'blogr/routes/common/SessionRoute';

/**
 * Handles blog routes.
 *
 * @class BlogRoute
 * @constructor
 */
export default SessionRoute.extend({
    /**
     *	Load existent blogs by pages.
     *
     * @param params {Object} URL parameters
     * @return a list of blogs
     */
    model: function(params) {
        var blogController = this.controllerFor('blogs');
        var pageId = (params.pageId <= 0) ? 1 : params.pageId;
        blogController.set('page', pageId);
        return this.store.find('blog', {
            pageSize: blogController.get('pageSize'),
            page: pageId
        });
    }
});
