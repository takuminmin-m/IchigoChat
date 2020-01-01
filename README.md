# IchigoChat
## IchigoJamで動くチャットアプリIchigoChat
このチャットは、RubyとSinatraにより作られています。
## 動作要件
### クライアント側
IchigoJam,MixJuice
### サーバー側
WindowsとかLinuxとかのRubyが動くPC,Ruby2.7.0,Sinatra,LAN環境
### ディレクトリについて
|ディレクトリ名|主な使われ方|
|:--:|:--:|
|controller|アプリケーションを配置する|
|lib|汎用的なプログラムを配置する|
|public|静的ファイルのHTML,css,画像などを配置する|
|views|動的ファイルerbなどを配置する|
|app.rb|メインアプリケーション、アクセスの振り分け、メイン処理|
