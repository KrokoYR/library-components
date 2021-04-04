module.exports = (plop) => {
	const createComponentFile = {
		type: 'add',
		path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
		templateFile: '.plop/component.tsx.hbs',
	};

	const createIndexFile = {
		type: 'add',
		path: 'src/components/{{pascalCase name}}/index.ts',
		templateFile: '.plop/index.ts.hbs',
	};

	const createCssFile = {
		type: 'add',
		path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
		templateFile: '.plop/component.css.hbs',
	};

	const createStoryFile = {
		type: 'add',
		path:
			'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
		templateFile: '.plop/component.stories.tsx.hbs',
	};

	const createTestFile = {
		type: 'add',
		path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
		templateFile: '.plop/component.test.tsx.hbs',
	};

	const getComponentName = {
		type: 'input',
		name: 'name',
		message: 'What is the component name?',
		validate: (value) => {
			if (/.+/.test(value)) {
				return true;
			}

			return 'name is required';
		},
	};

	plop.setGenerator('component', {
		description: 'component',
		actions: [
			createComponentFile,
			createIndexFile,
			createCssFile,
			createStoryFile,
			createTestFile,
		],
		prompts: [getComponentName],
	});
};
