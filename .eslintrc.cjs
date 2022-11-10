module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/recommended",
    "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended", "eslint-config-prettier",],
  "plugins": ["eslint-plugin-prettier"],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect'
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    "react/react-in-jsx-scope": ["off"],
    "prettier/prettier": ["error", {
      "trailingComma": "all",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "printWidth": 120,
      "bracketSpacing": true,
      "endOfLine": "auto"
    }, {
        "usePrettierrc": false
      }]
  }
};