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

    <img width="289" height="319" alt="image" src="https://github.com/user-attachments/assets/49d22140-7fd3-4d6a-a599-833d781d051d" />
   - 編集画面の１行目にタイトル、２行目以降に内容を入力します。入力が完了したら編集画面の追加ボタンを押します。

     <img width="312" height="632" alt="image" src="https://github.com/user-attachments/assets/7b724db1-17fe-4e47-809b-8d3945624e9f" />
   - 編集画面が閉じ、一覧にメモが追加されます。

     <img width="319" height="349" alt="image" src="https://github.com/user-attachments/assets/c52b54bd-0d2c-4c45-bdec-4d1b596fe1d3" />

4. メモの詳細表示・編集
   - メモ一覧の詳細を表示させたいメモを押すと、編集画面として詳細を確認できます。

     <img width="311" height="640" alt="image" src="https://github.com/user-attachments/assets/c2feecb8-d8c2-4942-8e83-1313b6f0b6ca" />

   - 編集画面の値を書き換え、更新ボタンを押すと内容が更新されます。

     <img width="320" height="650" alt="image" src="https://github.com/user-attachments/assets/784ee3d5-1587-4608-9ebb-69203e431848" />

   - 更新ボタンを押すと編集画面が閉じます。

     <img width="300" height="333" alt="image" src="https://github.com/user-attachments/assets/5fbc2ba1-3598-45c1-9069-20f1e53ad7e5" />

5. メモの削除
   - メモの削除方法は編集画面を開き、削除ボタンを押すことで削除できます。

     <img width="309" height="646" alt="image" src="https://github.com/user-attachments/assets/4eb9bdb2-4efb-4148-9915-f81c38a388ad" />

   - メモ削除後も編集画面が閉じます。

     <img width="302" height="335" alt="image" src="https://github.com/user-attachments/assets/b20716f2-4a2b-45bb-b16f-8eda87369927" />
