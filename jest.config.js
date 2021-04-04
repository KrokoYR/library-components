module.exports = {
	collectCoverageFrom: [
		'**/*.{ts,tsx,js,jsx}',
		'!**/node_modules/**',
		'!**/.storybook/**',
		'!**/tests/**',
		'!**/coverage/**',
		'!jest.config.js',
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	setupFilesAfterEnv: ['<rootDir>/config/setup.js'],
	preset: 'ts-jest',
	testPathIgnorePatterns: [
		'/.next/',
		'/node_modules/',
		'/lib/',
		'/tests/',
		'/coverage/',
		'/.storybook/',
	],
	testMatch: ['**/src/**/*.test.(js|tsx)'],
	testRegex: '',
	testURL: 'http://localhost',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'svg'],
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
	snapshotSerializers: ['enzyme-to-json/serializer'],
	reporters: ['jest-silent-reporter'],
	transform: {
		'.(ts|tsx|js|jsx)': 'babel-jest',
		'^.+\\.svg$': 'jest-svg-transformer',
		'.+\\.(css|less|sass|scss)$': 'jest-transform-css',
	},
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!react-id-swiper|react-flagkit)',
	],
};
