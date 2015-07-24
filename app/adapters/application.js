import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://blogr-api.herokuapp.com',
    headers: {
        'session_id': localStorage.getItem('session_id')
    }
});
