'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    // This makes `appname` a required argument.
    this.argument("model", { type: String, required: true });

    this.options.modelInstance = this.options.model.charAt(0).toLowerCase() + this.options.model.slice(1);//this.options.model.toLowerCase();
    this.options.model = this.options.model.charAt(0).toUpperCase() + this.options.model.slice(1);

    this.options.modelsInstance = this.options.modelInstance.replace(/y$/, 'ie') +'s';
    this.options.models = this.options.model.replace(/y$/, 'ie') + 's';

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

    // Entity base file
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Domain/Entities/Entity.ts'),
      this.destinationPath(`src/API/Application/Domain/Entities/${this.options.model}.ts`),
      {props : this.props, options : this.options}
    );


    // Schema base file
    this.fs.copyTpl(
      this.templatePath('src/API/Controllers/Schema.ts'),
      this.destinationPath(`src/API/Controllers/Schemas/${this.options.model}Schema.ts`),
      {props : this.props, options : this.options}
    );

    // Services layer
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Services/Services.ts'),
      this.destinationPath(`src/API/Application/Services/${this.options.models}/${this.options.model}Services.ts`),
      {props : this.props, options : this.options}
    );

    // Create command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/CreateCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/Create${this.options.model}Command.ts`),
      {props : this.props, options : this.options}
    );

    // Create handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/CreateHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/Create${this.options.model}Handler.ts`),
      {props : this.props, options : this.options}
    );

    // GetAll command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/GetAllCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/GetAll${this.options.models}Command.ts`),
      {props : this.props, options : this.options}
    );

    // GetAll handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/GetAllHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/GetAll${this.options.models}Handler.ts`),
      {props : this.props, options : this.options}
    );

    // GetSingle command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/GetSingleCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/GetSingle${this.options.model}Command.ts`),
      {props : this.props, options : this.options}
    );

    // GetSingle handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/GetSingleHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/GetSingle${this.options.model}Handler.ts`),
      {props : this.props, options : this.options}
    );

    // Update command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/UpdateCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/Update${this.options.model}Command.ts`),
      {props : this.props, options : this.options}
    );

    // Update handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/UpdateHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/Update${this.options.model}Handler.ts`),
      {props : this.props, options : this.options}
    );

    // Upsert command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/UpsertCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/Upsert${this.options.model}Command.ts`),
      {props : this.props, options : this.options}
    );

    // Upsert handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/UpsertHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/Upsert${this.options.model}Handler.ts`),
      {props : this.props, options : this.options}
    );

    // Delete command
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Commands/DeleteCommand.ts'),
      this.destinationPath(`src/API/Application/Commands/${this.options.models}/Delete${this.options.model}Command.ts`),
      {props : this.props, options : this.options}
    );

    // Delete handler
    this.fs.copyTpl(
      this.templatePath('src/API/Application/Handlers/DeleteHandler.ts'),
      this.destinationPath(`src/API/Application/Handlers/${this.options.models}/Delete${this.options.model}Handler.ts`),
      {props : this.props, options : this.options}
    );
  }

  install() {
//    this.installDependencies();
  }
};
