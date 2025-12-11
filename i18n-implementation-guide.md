# VRCTドキュメント i18n対応実装ガイド

## 概要
Docusaurus v3を使用した多言語対応（i18n）の実装が完了しました。
英語（en）と日本語（ja）の2言語に対応しています。

## 実装内容

### 1. 設定変更
**ファイル: `docusaurus.config.ts`**

```typescript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ja'],
  localeConfigs: {
    en: {
      label: 'English',
      direction: 'ltr',
    },
    ja: {
      label: '日本語',
      direction: 'ltr',
    },
  },
}
```

- デフォルトロケールは英語（en）
- ナビゲーションバーに言語切り替えボタン（localeDropdown）を追加

### 2. 翻訳ファイル
**ディレクトリ: `i18n/ja/`**

以下の翻訳ファイルを作成：
- `code.json` - UI要素の翻訳
- `docusaurus-theme-classic/navbar.json` - ナビゲーションバーの翻訳
- `docusaurus-theme-classic/footer.json` - フッターの翻訳
- `docusaurus-plugin-content-docs/current.json` - サイドバーの翻訳

### 3. ドキュメント構造
**ディレクトリ: `i18n/ja/docroot/docs/`**

日本語版ドキュメント：
```
i18n/ja/docroot/docs/
├── 01-tutorial/
│   ├── index.mdx
│   ├── 01-installation.mdx
│   ├── 02-initial-setup.mdx
│   ├── 03-send-message.mdx
│   ├── 04-receive-message.mdx
│   ├── _category_.json
│   └── img/
├── 02-feature-guide/
│   ├── index.mdx
│   ├── _category_.json
│   └── img/
├── 03-ui-guide/
│   ├── index.mdx
│   ├── _category_.json
│   └── detail-config/
└── 04-FAQ/
    ├── index.mdx
    └── _category_.json
```

## 対応ページ

### チュートリアル
- ✅ index.mdx - チュートリアル概要
- ✅ 01-installation.mdx - インストール
- ✅ 02-initial-setup.mdx - 初期設定
- ✅ 03-send-message.mdx - メッセージ送信
- ✅ 04-receive-message.mdx - メッセージ受信

### 機能ガイド
- ✅ index.mdx - 機能ガイド概要

### UIガイド
- ✅ index.mdx - UIガイド概要

### FAQ
- ✅ index.mdx - よくある質問

## 今後の作業

以下のドキュメントについては、翻訳テンプレートフォルダを作成しているため、コンテンツ翻訳が必要です：

### Feature Guide
- [ ] 01-translation.mdx - リアルタイム翻訳
- [ ] 02-translation-engines.mdx - 翻訳エンジン選択
- [ ] 03-multi-target-language.mdx - 複数対象言語
- [ ] 04-voice-to-text.mdx - 音声からテキスト
- [ ] 05-speaker-to-text.mdx - スピーカーからテキスト
- [ ] 06-osc-integration.mdx - OSC連携
- [ ] 07-language-presets.mdx - 言語プリセット
- [ ] 08-overlay-mode.mdx - オーバーレイモード
- [ ] 09-vrc-mute-sync.mdx - VRCミュート同期
- [ ] 11-appearance.mdx - 外観のカスタマイズ
- [ ] 12-send-message.mdx - メッセージ送信
- [ ] 13-receive-message.mdx - メッセージ受信

### UI Guide
- [ ] 01-main-window.mdx - メインウィンドウ
- [ ] detail-config/ - 詳細設定

## ビルド & デプロイ

### ビルド
```bash
npm run build
```

ビルド結果：
- 英語版: `/build/` ディレクトリ
- 日本語版: `/build/ja/` ディレクトリ

### ローカルテスト
```bash
npm run serve
```

### デプロイ
```bash
npm run deploy
```

## URL構造

- 英語版: `https://misyaguziya.github.io/VRCT-Docs/docs/tutorial`
- 日本語版: `https://misyaguziya.github.io/VRCT-Docs/ja/docs/tutorial`

## 言語切り替え

ナビゲーションバーの右上に言語切り替えドロップダウンが表示されます。
ユーザーは「English」または「日本語」を選択して言語を切り替えできます。

## 翻訳ガイドライン

新しいドキュメントを追加する場合：

1. 英語版を `docs/` ディレクトリに作成
2. 日本語版を `i18n/ja/docroot/docs/` ディレクトリに作成
3. `_category_.json` ファイルで翻訳されたラベルを指定

### 例
```json
{
  "label": "日本語ラベル",
  "position": 1,
  "link": {
    "type": "doc",
    "id": "path/index"
  }
}
```

## 注意事項

- 画像ファイル（img/）は言語によって異なる場合と共通の場合があります
- 英語版に新しいコンテンツを追加した場合は、日本語版にも対応するドキュメントを追加してください
- UI要素の翻訳は `i18n/ja/code.json` などの翻訳ファイルで管理されます

## 参考リンク

- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- [GitHub Repository](https://github.com/misyaguziya/VRCT-Docs)
