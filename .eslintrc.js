module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "node": true
    },
    "extends": "plugin:@typescript-eslint/recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "backtick"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": "off",
        "prefer-template": "error",
        "no-var": "error",
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "no-script-url": "error",
        "eqeqeq": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none"
                }
            }
        ]
    }
}