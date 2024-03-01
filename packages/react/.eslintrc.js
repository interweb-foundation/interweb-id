module.exports = {
  plugins: [
    "prettier",
    "react-hooks",
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
  ],
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-debugger": 2,
    "no-alert": 2,
    "no-await-in-loop": 0,
    "no-prototype-builtins": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-unused-vars": [0],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-console": 1,
    "comma-dangle": 0,
    "jsx-quotes": [2, "prefer-double"],
    "linebreak-style": ["error", "unix"],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "prettier/prettier": 2,
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
    "unused-imports/no-unused-imports": 2,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "React|res|next|^_",
      },
    ],
  },
};
