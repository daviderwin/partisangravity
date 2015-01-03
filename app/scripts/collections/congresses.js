/*global define*/

define([
    'underscore',
    'backbone',
    'models/congresses'
], function (_, Backbone, CongressesModel) {
    'use strict';

    var CongressesCollection = Backbone.Collection.extend({
        model: CongressesModel
    });

    return CongressesCollection;
});
