/*global define*/

define([
    'underscore',
    'backbone',
    'models/representatives'
], function (_, Backbone, RepresentativesModel) {
    'use strict';

    var RepresentativesCollection = Backbone.Collection.extend({
        model: RepresentativesModel
    });

    return RepresentativesCollection;
});
