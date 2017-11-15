suite('Global Tests', () => {
    test('Page Has a Valid title', () => {
        assert(document.title && document.title.match(/\s/) && document.title.toUpperCase() != 'TODO');
    });
});