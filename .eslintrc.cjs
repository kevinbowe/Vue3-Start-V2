/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
	// Note: you must disable the base rule as it can report incorrect errors
	// "no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": 'off', // JOY
	// "@typescript-eslint/no-unused-vars": 0 // JOY
	// "@typescript-eslint/no-unused-vars": "error"
	'vue/multi-word-component-names': 'off'
 }
}