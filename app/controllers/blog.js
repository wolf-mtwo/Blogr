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
     * Sort direction.
     *
     * @type {Boolean}
    */
    sortAscending: false
});
