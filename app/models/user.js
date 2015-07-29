import DS from 'ember-data';

/**
 * User's session model contains main information.
 *
 * @class UserModel
 * @constructor
 */
export default DS.Model.extend({
    username: DS.attr(),
    firstName: DS.attr(),
    lastName: DS.attr(),
    fullName: Ember.computed('firstName', 'lastName', function() {
        return this.get('firstName') + ' ' + this.get('lastName');
      })
});
