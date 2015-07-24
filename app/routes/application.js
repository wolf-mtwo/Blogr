import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function() {
        this.validateUser();
    },
    validateUser: function() {
        var controller = this.controllerFor('application');
        var userId = localStorage.getItem('user_id');
        if (userId) {
            this.store.find('user', userId).then(function(user) {
                controller.set('user', user);
            });
        }
    },
    actions: {
        logout: function() {
            // Removing user
            this.controllerFor('application').set('user', null);
            // removing local-storege session
            localStorage.removeItem('user_id');
            localStorage.removeItem('session_id');

            this.transitionTo('index');
        },
        validateUser: function() {
            this.validateUser();
        }
    }
});
