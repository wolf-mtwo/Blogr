import Ember from 'ember';

/**
 * Handles user routes.
 *
 * @class UserRoute
 * @constructor
 */
export default Ember.Route.extend({
    /**
     * Validarte if user session exist otherwise redirect to home page.
     * @param transition {Object} current page transition
     */
    beforeModel: function(transition) {
        if (!localStorage.getItem('user_id')) {
            var controller = this.controllerFor('application');
            controller.set('transition', transition);
            this.transitionTo('login');
        }
    },

    /**
     * Load user information.
     */
    model: function() {
        var userId = localStorage.getItem('user_id');
        return this.store.find('user', userId);
    }
});
