import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        login: function() {
            var self = this;
            var controller = self.controllerFor('login');

            // query data
            var url = 'http://blogr-api.herokuapp.com/login';
            var data = {
                username: controller.get('username'),
                password: controller.get('password')
            };
            Ember.$.ajax({
                method: 'POST',
                url: url,
                data: data
            }).done(function(response) {
                localStorage.setItem('user_id', response['user_id']);
                localStorage.setItem('session_id', response['session_id']);
                self.send('validateUser');
            }).fail(function() {
                console.error('error');
            });
            this.transitionTo('index');
        }
    }
});
