import ApplicationAdapter from 'blogr/adapters/application';

/**
 * User Adapters.
 *
 * @class UserAdapter
 * @constructor
 */
export default ApplicationAdapter.extend({
    /**
     * User service root path.
     *
     * @return {String} user service path.
     */
    pathForType: function() {
        return 'user';
    }
});
