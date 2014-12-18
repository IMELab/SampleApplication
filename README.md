#About
This is a sample application running on Node.js via Express.
Node.js、Expressを用いたサンプルアプリケーションです。

#Usage

```sh
$ git clone git@github.com:IMELab/SampleApplication.git
$ cd SampleApplication
$ npm install
$ npm start
```

#Contents

* Multipart uploader


#Structure

.
├── README.md
├── app.js（Webサーバーのメインファイル）
├── bin
│   └── www（npm startすると呼び出されるファイル）
├── npm-debug.log（エラーが起きた時に書きこまれるファイル）
├── package.json（アプリケーションの情報が書いてあるファイル。e.g. 依存モジュール、バージョン）
├── public（htmlやcss、javascriptファイルを入れておくディレクトリ）
│   ├── images（画像を入れておくディレクトリ）
│   ├── javascripts（javascriptを入れておくディレクトリ）
│   │   └── upload.js（マルチパートアップローダー用のjavascript）
│   └── stylesheets（cssを入れておくディレクトリ）
│       └── style.css（Expressデフォルトのcssファイル）
├── routes（ルーティング設定ファイルのディレクトリ）
│   ├── index.js
│   └── users.js
└── views（ページテンプレートのディレクトリ）
    ├── error.jade（エラーページテンプレート）
    ├── index.jade（メインページテンプレート）
    └── layout.jade（レイアウトテンプレート）
