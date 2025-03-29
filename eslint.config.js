import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", ".fttemplates"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"@stylistic": stylistic,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			//"@typescript-eslint": tseslint,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"@stylistic/indent": ["error", "tab"],
			"@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
			"@stylistic/brace-style": ["error", "allman", { allowSingleLine: true }],
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"@stylistic/quotes": ["error", "double", { avoidEscape: true }],
		},
	},
)
