import Ember from 'ember';

/**
 * Blog's controller.
 *
 * @class BlogController
 * @constructor
 */
export default Ember.ArrayController.extend({
    /**
     * Controller's name.
     *
     * @type {Syting}
    */
    name: 'Blog\'s List',

    /**
     * Sort property.
     *
     * @type {Array}
    */
    sortProperties: ['creationDate'],

    /**
     * Pagination size.
     *
     * @type {Number}
     */
    pageSize: 5,

    /**
     * Pagination page.
     *
     * @type {Number}
     */
    page: 1,

    /**
     * Default blog's ID.
     *
     * @type {Number}
     */
    blogId: null,

    /**
     * Sort direction.
     *
     * @type {Boolean}
    */
    sortAscending: false,
    actions: {
        /**
         * Redirect to previous page.
         *
         * @action previous
         */
        previous: function() {
            var pageId = parseInt(this.get('page')) - 1;
            this.send('changePage', pageId);
        },

        /**
         * Redirect to next page.
         *
         * @action next
         */
        next: function() {
            var pageId = parseInt(this.get('page')) + 1;
            this.send('changePage', pageId);
        },

        /**
         * Change current page.
         *
         * @param pageId {Number} page id
         * @action changePage
         */
        changePage: function(pageId) {
            if (!pageId) {
                throw new Error('pageId is undefined');
            }
            var blogId = parseInt(this.get('blogId'));
            if (blogId) {
                this.transitionToRoute('blogs.detail', pageId, blogId);
            } else {
                this.transitionToRoute('blogs', pageId);
            }
        }
    }
});
