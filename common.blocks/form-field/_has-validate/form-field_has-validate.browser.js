/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'validation'],
    function(provide, BEMDOM, Validation, FormField) {

/**
 * Field block
 */
FormField.decl({ block : this.name, modName : 'has-validate', modVal : true }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._status = null;
                this._validator = Validation.create();

                this.on('blur', this.validate);
            }
        }
    },

    /**
     * Validate form-field
     * @public
     * @returns {Boolean}
     */
    validate : function() {
        this._status = this._validator.check(this.getVal());
        this._updateStatus();

        return this._status;
    },

    _updateStatus : function() {
        this.toggleMod('invalid', true, Boolean(this._status));

        this.getControl().toggleMod('invalid', true, Boolean(this._status));

        this.hasMod('message') && this.setMessageVal(this._status);
    }
});

provide(FormField);

});
