// ==========================================================================
// Project:   Ember Handlebar Views
// Copyright: ©2011 Strobe Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require("ember-handlebars/ext");
require("ember-views/views/view");
require("ember-handlebars/controls/text_support");

/** @class */

var get = Ember.get, set = Ember.set;

Ember.TextArea = Ember.View.extend(Ember.TextSupport, {

  classNames: ['ember-text-area'],

  tagName: "textarea",

  /**
    @private
  */
  didInsertElement: function() {
    this._updateElementValue();
  },

  _updateElementValue: Ember.observer(function() {
    this.$().val(get(this, 'value'));
  }, 'value')

});
