import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('user');
    this.resource('blogs', function() {
        this.route('create', {path: 'create'});
        this.route('edit', { path: ':blogId/edit'});
        this.route('page', {path: '/:pageId'}, function() {
            this.route('detail', { path: 'blog/:blogId'}, function() {
                this.route('comments', function() {
                    this.route('create');
                });
            });
        });
    });
});

export default Router;
