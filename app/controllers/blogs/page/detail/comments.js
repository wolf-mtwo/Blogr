import Ember from 'ember';

/**
 * Object comment controller.
 *
 * @class BlogPageDetailCommentsController
 * @constructor
 */
export default Ember.ArrayController.extend({
    /**
     * Controller's name.
     *
     * @type {String}
    */
    name: 'Comment\'s List',

    /**
     * Object controller.
     *
     * @type {String} controller name
     */
    itemController: 'blogs.page.detail.comment'
});
