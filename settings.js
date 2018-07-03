{
    // 以像素为单位控制字号。
    "editor.fontSize": 16,
    // 基础设置
    "editor.tabSize": 2,
    "workbench.startupEditor": "welcomePage",
    "window.title": "${activeEditorLong}${separator}${rootName}",
    "editor.quickSuggestions": {
        "strings": true
    },
    // vue设置
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    "files.associations": {
        "*.vue": "vue"
    },
    // vetur设置
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.postcss": "prettier",
    "vetur.format.defaultFormatter.css": "prettier",
    // eslint设置
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    // format设置
    "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
    "prettier.eslintIntegration": true,
    // "prettier.singleQuote": true,
    // "prettier.semi": true,
    // "prettier.useTabs": true,
}
