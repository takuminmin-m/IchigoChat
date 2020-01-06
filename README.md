# IchigoChat
## IchigoJamで動くチャットアプリIchigoChat
このチャットは、RubyとSinatraにより作られています。
また、我々は未熟なため、安全性の確認やサーバーへの負荷などの検証は行っておりません。そのため、このプログラムを使用して起こった損害の一切の責任を負いません。ご了承ください。ですが、このプログラムの改良や修正は大歓迎です。また、バグの報告やアドバイスもお待ちしております。
## 動作要件
### クライアント側
IchigoJam, MixJuice
### サーバー側
WindowsとかLinuxとかのRubyが動くPC, Ruby2.7.0, Sinatra, bundler, LAN環境
### 実行
`bundler install`で必要なgemをインストールして、`bundler exec ruby app.rb -o 0.0.0.0`で実行してください。実行できない場合はポートが開いていないと思われます。`4567`ポートをファイヤーウォールの設定で開放してください。
### ディレクトリについて
|ディレクトリ名|主な使われ方|
|:--:|:--:|
|controller|アプリケーションを配置する|
|lib|汎用的なプログラムを配置する|
|public|静的ファイルのHTML,css,画像などを配置する|
|views|動的ファイルerbなどを配置する|
|app.rb|メインアプリケーション、アクセスの振り分け、メイン処理|
