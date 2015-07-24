import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    attrs: {
        id: 'user_id',
        username: 'username',
        firstName: 'first_name',
        lastName: 'last_name'
    },
    normalizePayload: function (payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
          'user': payload
        };
    }
});
