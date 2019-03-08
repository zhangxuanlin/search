module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions":
                [".js", ".jsx"]
            }
        ],
        "react/button-has-type": 0,
        "react/forbid-prop-types": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/media-has-caption": [0, {
            "audio": [ "Audio" ],
            "video": [ "Video" ],
            "track": [ "Track" ],
        }],
        "object-curly-newline": 0,
        "linebreak-style": [0, "windows"],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "window": true
    }
};