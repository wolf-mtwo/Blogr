import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('login');
    this.route('user');
    this.resource('blogs', {path: 'blogs/:pageId'}, function() {
        this.route('create', {path: 'blog/create'});
        this.route('edit', { path: 'blog/:blogId/edit'});
        this.route('detail', { path: 'blog/:blogId' });
    });
});

export default Router;
