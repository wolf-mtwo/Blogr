import ApplicationAdapter from 'blogr/adapters/application';

/**
 * Comments Adapters.
 *
 * @class BlogAdapter
 * @constructor
 */
export default ApplicationAdapter.extend({
    /**
     * builds comments's url API.
     *
     * @param modelName {String} model name
     * @param id {String} single id or array of ids or query
     * @param snapshot {Array} single snapshot or array of snapshots
     * @param requestType {String} store function's name
     */
    buildURL: function(modelName, id, snapshot, requestType) {
        var blogId = localStorage.getItem('blog_id');
        var url = this.get('host') + '/' + this.get('namespace') + '/';
        if (requestType === 'createRecord') {
            url += 'user/{0}/blog/{1}/comment'
            .replace('{0}', this.getUserId())
            .replace('{1}', blogId);
        } else {
            url += 'blog/{1}/comment'
            .replace('{1}', blogId);
        }
        url += (id) ? '/' + id : '';
        return url;
    }
});
