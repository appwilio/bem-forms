/**
 * @module form-field
 */
modules.define('form-field',
    ['i-bem__dom', 'form-field__slugify'],
    function(provide, BEMDOM, slugify) {

/**
 * Field block
 */
provide(BEMDOM.decl(this.name, /** @lends form-field.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.setMod('name', slugify(this.getName()));
            }
        }
    },

    /**
     * Returns field name
     * @returns {String}
     * @abstract
     */
    getName : function() {
    },

    /**
     * Returns field value
     * @returns {String}
     * @abstract
     */
    getVal : function() {
        return '';
    },

    /**
     * Set value to field
     * @param {*|String} val
     * @abstract
     */
    setVal : function() {
    }
}, /** @lends form-field */{
    live : true
}));

});
