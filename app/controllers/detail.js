import Ember from 'ember';

/**
 * Blog detail's controller.
 *
 * @class BlogDetailController
 * @constructor
 */
export default Ember.ObjectController.extend({

    /**
     *	Message size.
     *
     * @type {String}
     */
    messageSize: 45,

    /**
     * Creates a short message from message.
     * messsage computed property.
     */
    shortMessage: function() {
        var messageSize = this.get('messageSize');
        var title = this.get('message');
        return (title.length < messageSize) ? title : title.substring(0, messageSize) + '...';
    }.property('message')
});
