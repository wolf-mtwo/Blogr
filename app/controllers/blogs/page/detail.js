import Ember from 'ember';

/**
 * Detail blog controller.
 *
 * @class DetailBlogController
 * @constructor
 */
export default Ember.ObjectController.extend({
    /**
     * Controller's name.
     *
     * @type {String}
    */
    name: 'Detail blog controller',

    /**
     * Display create blog's errors.
     *
     * @type {String}
    */
    errorMessage: null,

    user: null,

    isOwner: false,

    /**
     * Creates a short message from message.
     * messsage computed property.
     */
    isOwner: function() {
        var user = this.get('user');
        var owner = this.get('owner');
        return (user.id == owner.id) ? true : false;
    }.property('owner')
});
