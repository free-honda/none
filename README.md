# skill-typing Front

## ローカル開発構築手順

1. docker コンテナを立ち上げる

```
$ make up
```

2. モジュールのインストール（初回及びモジュール追加時のみ）

```
$ make install
```

3. 開発用サーバー起動

```
$ make dev
```

4. ブラウザから`http://localhost:5173`にアクセスしてブラウザ上で表示を確認

5. docker コンテナを削除

```
$ make down
```
