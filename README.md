# skill-typing Front
## ローカル開発構築手順

1. docker-composeコマンドでコンテナを立ち上げる
```
$ docker-compose up -d
```

2. コンテナの中に入る
```
$ docker-compose exec app bash 
```

3. プロジェクトのディレクトリに移動
```
$ cd skill-typing-front 
```

4. モジュールのインストール（初回及びモジュール追加時のみ）
```
$ npm install
```

5. 開発用サーバー起動
```
$ npm run dev
```

6. ブラウザから`http://localhost:5173`にアクセスしてブラウザ上で表示を確認
