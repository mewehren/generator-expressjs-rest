'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appname` a required argument.
    this.argument("command", { type: String, required: true });
    this.option("prefix", { type: String } );
    // this.options.commandInstance = this.options.command.charAt(0).toLowerCase() + this.options.command.slice(1);//this.options.command.toLowerCase();
    this.options.command = this.options.command.charAt(0).toUpperCase() + this.options.command.slice(1);

    this.options.prefix = this.options.prefix ? this.options.prefix.replace(/\/?$/, '/') : '';
    // this.options.commandsInstance = this.options.commandInstance.replace(/y$/, 'ie') +'s';
    // this.options.commands = this.options.command.replace(/y$/, 'ie') + 's';

    // console.log(this.options);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the smashing ${chalk.red('generator-expressjs-rest')} generator! prerelease`)
    );

    // const prompts = [
    //   {
    //     type: 'confirm',
    //     name: 'someAnswer',
    //     message: 'Would you like to enable this option?',
    //     default: true
    //   }
    // ];
    //
    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/Command.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.prefix}${this.options.command}Command.ts`),
      {props : this.props, options : this.options}
    );

    // Create handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/Handler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.prefix}${this.options.command}Handler.ts`),
      {props : this.props, options : this.options}
    );

  }

  install() {
//    this.installDependencies();
  }
};
