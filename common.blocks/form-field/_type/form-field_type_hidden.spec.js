modules.define('spec',
    ['i-bem__dom', 'BEMHTML', 'jquery', 'form-field'],
    function(provide, BEMDOM, BEMHTML, $) {

    function buildBlock(name, bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem(name);
    }

    describe('form-field_type_hidden', function() {

        var block;

        beforeEach(function() {
            block = buildBlock('form-field', {
                block : 'form-field',
                mods : { type : 'hidden' },
                name : 'field name',
                val : 'field value'
            });
        });

        afterEach(function() {
            BEMDOM.destruct(block.domElem);
        });

        it('should return value on getVal', function() {
            block.getVal().should.equal('field value');
        });

        it('should allow to change value', function() {
            block.setVal('new val');
            block.getVal().should.equal('new val');
        });
    });

    provide();

});
