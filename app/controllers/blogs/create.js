import Ember from 'ember';

/**
 * Create blog controller.
 *
 * @class CreateBlogController
 * @constructor
 */
export default Ember.Controller.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Create blog controller',

    /**
     * Display create blog's errors.
     *
     * @type {Syting}
    */
    errorMessage: null,

    /**
     * Post container data.
     *
     * @type {Object}
     */
    blog: {
        title: null,
        message: null
    },
    actions: {
        /**
         *	Create and validated new post.
         *
         * @param post {Object} new post to store.
         * @action createPost
         */
        createPost: function(blog) {
            try {
                if (!blog) {
                    throw new Error('blog is undefined');
                }
                if (!blog.title) {
                    throw new Error('title is empty');
                }
                if (!blog.message) {
                    throw new Error('message is empty');
                }
                this.send('savePost', blog);
            } catch (e) {
                console.error(e.message);
                this.set('errorMessage', e.message);
            }
        },

        /**
         * Redirect to blog's main page.
         *
         * @action cancel
         */
        cancel: function() {
            this.transitionTo('blogs');
        }
    }
});
