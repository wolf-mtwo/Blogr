import DS from 'ember-data';

/**
 * Helper class to change object blog format.
 *
 * @class BlogSerializers
 * @constructor
 */
export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    /**
     * Ember blog's model reference
     *
     * @type {object}
     */
    attrs: {
        id: 'blog_id',
        creationDate: 'creation_date',
        owner: {
            embedded: 'always'
        }
    },

    /**
     * Convert API format on ember supported format.
     *
     * @method normalizePayload
     */
    normalizePayload: function(payload) {
        payload = payload instanceof Array ? payload : [payload];
        return {
          'blog': payload
        };
    },

    /**
     * Serialized ember object to send API service.
     *
     * @param snapshot {Object} container of model properties
     */
    serialize: function (snapshot) {
        return {
            title: snapshot.attr('title'),
            message: snapshot.attr('message')
        }
    },

    /**
     *  Customize the local model.
     *
     *  TODO: Add comment for parameters
     */
    serializeIntoHash: function(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    }
});
