import Ember from 'ember';

/**
 * Create comment controller.
 *
 * @class BlogPageDetailCommentsController
 * @constructor
 */
export default Ember.Controller.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Add comment',

    /**
     * Comment empty object.
     *
     * @type {Object}
     */
    comment: {
        message: null
    },
    actions: {
        /**
         * Create a new comment.
         *
         * @param comment {Object} comment to store
         */
        createComment: function(comment) {
            var self = this;
            var blogId = self.controllerFor('blogs').get('blogId');
            localStorage.setItem('blog_id', blogId);
            var newComment = self.store.createRecord('comment', comment);
            newComment.save()
            .then(function(response) {
                self.set('comment', {message: null});
                alert('the message has been save successfull');
            });
        },

        /**
         * Redirect to comments's page.
         *
         * @action cancel
         */
        cancel: function() {
            this.set('comment', {message: null});
            this.transitionToRoute('blogs.page.detail.comments');
        }
    }
});
