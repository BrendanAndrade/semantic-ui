Package.describe({
    summary: "Accounts Templates styled for Semantic UI."
});

Package.on_use(function(api, where) {
    api.use([
        'service-configuration',
        'accounts-base',
        'accounts-templates-core',
        'templating',
        'less'
    ], 'client');

    api.add_files([
        'lib/at_form.html',
        'lib/at_form.js',
        'lib/at_input.html',
        'lib/at_input.js',
        'lib/at_social.html',
        'lib/at_social.js',
        'lib/full_page_at_form.html',
        'lib/at_semantic-ui.less'
    ], ['client']);

    api.use([
        'service-configuration',
        'accounts-password',
        'accounts-base',
        'accounts-templates-core',
    ], 'server');

    api.imply([
        'accounts-templates-core',
        'service-configuration',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use([
        'accounts-templates-semantic-ui',
        'accounts-templates-core',
    ]);
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-semantic-ui_tests.js', ['client', 'server']);
});
