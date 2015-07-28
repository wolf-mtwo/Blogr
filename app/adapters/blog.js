import ApplicationAdapter from 'blogr/adapters/application';

/**
 * Blog Adapters.
 *
 * @class BlogAdapter
 * @constructor
 */
export default ApplicationAdapter.extend({
    /**
     * builds blog's url API.
     *
     * @param store {String} model's mane
     */
    buildURL: function(store) {
        var url = this.get('host') + '/' + this.get('namespace') + '/';
        if (store === 'createRecord') {
            url += 'user/{0}/blog'.replace('{0}', this.getUserId());
        } else {
            url += 'blog';
        }
        return url;
    }
});
