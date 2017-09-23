module.exports = {
    name: 'ember-unsafe-typings',

    included: function(app) {
        this._super.included.apply(this, arguments);

        app.import('vendor/ember-unsafe-typings.js');
    }
};
