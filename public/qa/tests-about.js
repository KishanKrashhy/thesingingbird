suite('"About" Page test', () => {
    test('Page should contain a link to a contact Page', () => {
        assert($('a[href ="/contact"]').length);
    });
});