import DS from 'ember-data';

/**
 * Application Main Adapters.
* Sets default properties of RESTful API.
*
* @class ApplicationAdapter
* @constructor
*/
export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://blogr-api.herokuapp.com',
    headers: {
        'session_id': localStorage.getItem('session_id')
    },

    /**
     * Gets User Id.
     *
     * @return {String} unique user ID
     */
    getUserId: function () {
        return localStorage.getItem('user_id');
    }
});
