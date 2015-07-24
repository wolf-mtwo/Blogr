import Ember from 'ember';

export default Ember.Controller.extend({
    name: 'Login controller',
    errorMessage: null,
    crendential: {
        username: 'rolf',
        password: '.rolf'
    },
    actions: {
        validateParams: function(credential) {
            this.get('errorMessage', null);
            try {
                if (!credential.username) {
                    throw new Error('username is empty');
                }
                if (!credential.password) {
                    throw new Error('password is empty');
                }
                this.send('login', credential);
                this.send('clearform');
            } catch (e) {
                console.error(e.message);
                this.set('errorMessage', e.message);
            }
        },
        cancel: function() {
            this.transitionTo('index');
        },
        clearform: function() {
            this.set('username', null);
            this.set('password', null);
        }
    }
});
