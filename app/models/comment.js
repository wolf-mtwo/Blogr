import DS from 'ember-data';

/**
 * Comment's model.
 *
 * @class UserModel
 * @constructor
 */
export default DS.Model.extend({
    message: DS.attr(),
    owner: DS.belongsTo('user')
});
