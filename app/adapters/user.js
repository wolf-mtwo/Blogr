import ApplicationAdapter from 'blogr/adapters/application';

export default ApplicationAdapter.extend({
    pathForType: function() {
        return 'user';
    }
});
