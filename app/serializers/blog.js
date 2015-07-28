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

    // TODO: implement code bellow
    // FIXME: remove commented code
    //serialize: function (snapshot, options) {
        // console.log(snapshot, options);
        // var json = this._super(snapshot, options);
        // return {
        //     title: 'next generation',
        //     message: 'next generation',
        // }
    //}
});
