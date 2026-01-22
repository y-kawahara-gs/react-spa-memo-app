# Reactを使ったメモアプリ（SPA：Single Page Application）
## アプリ概要
このWebアプリはReactを使ったメモアプリです。
また、このアプリはSPAでページの再読み込みをせずに動的に更新するWebアプリケーション
LocalStorageに保存して、永続的にデータを扱うことができます。
## 機能一覧
このアプリは以下の機能を満たします。
- メモの一覧表示
- メモの詳細表示（編集画面）
- メモの追加
- メモの編集機能
- メモの削除
## セットアップ・使用方法
1. Node.jsのインストール  
	https://nodejs.org/en/download を参照し、インストールする
2. 実行
	```sh
	npm run dev
	```
3. メモの追加
   - 追加ボタンを押し、編集画面を表示させます。
     
     <img width="323" height="342" alt="image" src="https://github.com/user-attachments/assets/be2ffcca-25fe-4dc8-9fe6-5838f8178c5b" />
   - 編集画面の１行目にタイトル、２行目以降に内容を入力します。入力が完了したら編集画面の追加ボタンを押します。
     
     <img width="418" height="627" alt="image" src="https://github.com/user-attachments/assets/cb820912-cce9-4243-b21d-7444979213ac" />
   - 編集画面が閉じ、一覧にメモが追加されます。

     <img width="338" height="331" alt="image" src="https://github.com/user-attachments/assets/772ee203-89f8-4c41-b759-eb0eea01d2ad" />
4. メモの詳細表示・編集
   - メモ一覧の詳細を表示させたいメモを押すと、編集画面として詳細を確認できます。
  
     <img width="315" height="627" alt="image" src="https://github.com/user-attachments/assets/8765d7ce-2768-4541-96f3-8f3ad7a6f49b" />
   - 編集画面の値を書き換え、更新ボタンを押すと内容が更新されます。

     <img width="306" height="618" alt="image" src="https://github.com/user-attachments/assets/1f09a8ae-a6a0-460e-b9ba-3bdba58ced5b" />
   - 更新ボタンを押すと編集画面が閉じます。
     
     <img width="335" height="339" alt="image" src="https://github.com/user-attachments/assets/c58df581-f0f2-498c-9f60-2ca533663a91" />
6. メモの削除
   - メモの削除方法は編集画面を開き、削除ボタンを押すことで削除できます。

     <img width="380" height="634" alt="image" src="https://github.com/user-attachments/assets/af63e392-0f02-44bb-94d7-dd94f0e775e1" />
   - メモ削除後も編集画面が閉じます。

     <img width="300" height="316" alt="image" src="https://github.com/user-attachments/assets/ca5cc89f-9232-4ebd-84eb-50b8a6357324" />
