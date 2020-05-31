module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
//        "eslint:recommended",
        "standard",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "chrome": "readonly",
        "RUNNING_ON_CHROME": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error"
        //"semi": [2, "always"]
    },
    "plugins": ["prettier"]
};
