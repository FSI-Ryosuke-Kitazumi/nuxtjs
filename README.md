# NUXT3学習用

## コーディング規約

- RULE: コメントでコード上にルールを追記している、他にルール化したいものがあれば都度追加
- なるべくglobal stateは使わず、useQueryでfetchしたものを使う、refを使う
- リーダブルコードを意識
- 凝集度は高く、結合度は低くを意識
- コーディング規約を守ることで大幅に工数が増える場合は例外とすることも検討する

## コメントの主なprefix

- TODO: あとで追加、修正するべき機能がある。
- FIXME: 既知の不具合があるコード。修正が必要。
- HACK: あまりきれいじゃないコード。リファクタリングが必要。
- XXX: 致命的な問題がある。実装中の対応忘れ防止として使う。コミットはしない想定。
- NOTE: なぜ、こうなったという情報を残す。メンバーに共有したい内容など。
- RULE: コーディング規約。

## ディレクトリ構成

components: UIコンポーネント
composables: 機能ごとのビジネスロジック
mocks: APIモック
pages: ページファイル
plugins: アプリ初期化時に実行したい処理、ライブラリの設定、クライアントまたはサーバーのみで実行したい処理（詳しくはnuxtの公式ページ参照）
stores: グローバルステート
tests: テストコード
types: APIの型定義など
utils: 共通利用関数、定数定義

## 命名規則

- 基本はキャメルケース
- ページファイルはケバブケース
- 定数はアッパースネークケース。カテゴリー分けしてる場合、カテゴリー部分はキャメルケース（constants.sampleCategory.SAMPLE_CONST）
- type名はアッパーキャメルケース
