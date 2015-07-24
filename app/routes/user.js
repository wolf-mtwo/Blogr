import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(transition) {
        if (!localStorage.getItem('user_id')) {
            var controller = this.controllerFor('application');
            controller.set('transition', transition);
            this.transitionTo('login');
        }
    }
});
