/**
 * @module message
 */
modules.define('test-form',
['i-bem__dom'],
function(provide, BEMDOM) {

/**
 * test-form block
 */
provide(BEMDOM.decl(this.name, /** @lends test-form.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                console.log('this is test');

                this._form = this.findBlockInside('form');

                this._form.on('submit', function(e, val) {
                    this._prepare(val);
                }.bind(this));

                // You can bind to anothe form events
                // this._form.on('change', function(e, data) {
                //     console.log('changed form', data);
                // });

                // this._form.on('focus', function(e, data) {
                //     console.log('focused form', data);
                // });
            }
        }
    },

    _prepare : function(val) {
        console.log(val);

        // exec validators
        this._form.validate();

        // get status
        // true - valid
        // false - invalid
        if(this._form.getStatus()) {
            console.log('form valid');
        } else {
            console.log('form invalid');
        }

    }

}));

});
