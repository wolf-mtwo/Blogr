import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller) {
        // TODO: remove
        var userId = localStorage.getItem('user_id');

        if (userId) {
            this.store.find('user', userId).then(function(user) {
                controller.set('user', user);
            });
        } else {
            this.transitionTo('index');
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
            console.log('validate user');
            var controller = this.controllerFor('application');
            var userId = localStorage.getItem('user_id');
            if (userId) {
                this.store.find('user', userId).then(function(user) {
                    controller.set('user', user);
                });
            } else {
                this.transitionTo('index');
            }
        }
    }
});
