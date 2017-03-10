/**
 * Created by duanguang on 2017/3/10.
 */
var path=require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ReactPackage=yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function() {
        this.directory('src', 'src');
        this.copy('package.json', 'package.json');
        this.copy('README.md', 'README.md');
        this.copy('webpack.dev.config', 'webpack.dev.config');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = ReactPackage;