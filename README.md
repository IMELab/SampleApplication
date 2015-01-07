#About
This is a sample application running on Node.js via Express.  
Node.js、Expressを用いたサンプルアプリケーションです。

[Try it on Heroku](https://imelab-sampleapp.herokuapp.com/)
[サンプルを試す](https://imelab-sampleapp.herokuapp.com/)

#Usage

```sh
$ git clone git@github.com:IMELab/SampleApplication.git
$ cd SampleApplication
$ npm install
$ npm start
```

#Contents

* Multipart uploader
* Doodle on Canvas

#Structure

```
.  
├── README.md
├── Procfile（heroku用の設定ファイル）
├── app.js（Webサーバーのメインファイル）  
├── bin  
│   └── www（npm startすると呼び出されるファイル）  
├── npm-debug.log（エラーが起きた時に書きこまれるファイル）  
├── package.json（アプリケーションの情報が書いてあるファイル）  
├── public（htmlやcss、javascriptファイルを入れておくディレクトリ）  
│   ├── images（画像を入れておくディレクトリ）  
│   ├── javascripts（javascriptを入れておくディレクトリ）  
│   │   ├── doodle.js（らくがきキャンバス用のjavascript）
│   │   └── upload.js（マルチパートアップローダー用のjavascript）  
│   └── stylesheets（cssを入れておくディレクトリ）
│       ├── doodle.css（らくがきキャンバス用のcss）
│       └── style.css（Expressデフォルトのcss）
├── routes（ルーティング設定ファイルのディレクトリ）  
│   ├── index.js
│   └── users.js  
└── views（ページテンプレートのディレクトリ）  
    ├── doodle.jade（らくがきキャンバス用のテンプレート）
    ├── error.jade（エラーページのテンプレート）
    ├── index.jade（トップページのテンプレート）
    ├── layout.jade（レイアウトのテンプレート）
    └── uploader.jade（マルチパートアップローダー用のテンプレート）

```