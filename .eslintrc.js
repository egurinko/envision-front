module.exports = {
    root: true,
    parser: 'vue-eslint-parser', // parserをvue用に指定
    parserOptions: {
      parser: 'babel-eslint',    // es6用のparserはoptionsの仲へ
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'eslint:recommended',           // eslintの推奨ルール
      'airbnb-base',                  // airbnbルール(厳しめ)
      'plugin:prettier/recommended',  // 1.eslint-plugin-prettierをenable
                                      // 2.eslint-config-prettierをenable
                                      // 3.prettierの整形に問題がある場合にerrorを出す設定
      'plugin:vue/recommended',       // eslint-plugin-vueを推奨設定でenable
      'prettier/vue',                 // eslint-config-prettierのvue用ルールを適用(2019/1/16修正)
    ],
  
    // add your custom type here
    rules: {
      'no-plusplus': 'off',           // for文だけでなく、++は使いたかった
      'func-names': 'off',            // 無名関数を許可 
                                      // Vueだとスコープの問題で偶につかう
      'vue/component-name-in-template-casing': 'off', 
      // ↑ html部分をPascalにするかkebabにするかの選択です。
    },
  };