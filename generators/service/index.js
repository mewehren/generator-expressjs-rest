'use strict';
const Generator = require('yeoman-generator');
// const chalk = require('chalk');
// const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appname` a required argument.
    this.argument("model", { type: String, required: true });
    // this.option("model", { type: String, required: true } );
    this.options.modelInstance = this.options.model.toLowerCase();
    this.options.prefix = this.options.model ? this.options.model.replace(/\/?$/, '/') : '';
    this.options.service = this.options.model.charAt(0).toUpperCase() + this.options.model.slice(1);

  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Services/Services.ts'),
      this.destinationPath(`src/API/Application/Services/${this.options.prefix}${this.options.modelInstance}Services.ts`),
      {props : this.props, options : this.options}
    );
  }
  
};
