const OFF = 0;
const WARN = 1;
const ERR = 2;

module.exports = {
	// In VS Code, ESLint only validates js by default. Be certain to enable
	// ts validation in eslint settings by adding the flowing to the
	// eslint.validate list:
	//   typescript
	//   typescriptreact
	extends: 'react-app',
	plugins: [
		'react-hooks',
	],
	rules: {
		'comma-dangle': [WARN, 'always-multiline'],
		'jsx-a11y/alt-text': OFF,
		'jsx-a11y/anchor-is-valid': OFF,
		'no-extra-semi': WARN,
		'no-shadow': ERR,
		'prefer-const': ERR,
		'react/jsx-uses-react': OFF,
		'react/react-in-jsx-scope': OFF,
		quotes: [WARN, 'single'],
		semi: ERR,
	},
};
