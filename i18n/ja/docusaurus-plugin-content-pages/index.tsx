import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/i18n/ja/docusaurus-theme-classic/HomePage/HomepageFeatures';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from '@site/src/pages/index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary-base', styles.heroBanner)}>
      <div className="container">
        <div>
          <ThemedImage
            alt="VRCTロゴ"
            sources={{
              light: useBaseUrl('img/vrct_logo_black.png'),
              dark: useBaseUrl('img/vrct_logo_white.png'),
            }}
            style={{ width: '900px', objectFit: 'contain' }}
          />
        </div>
        <div className={styles.buttons} style={{ marginTop: '30px' }}>
          <Link
            className="button button--secondary button--lg"
            to="https://misyaguziya.booth.pm/items/5155325">
            ダウンロード
          </Link>
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial">
            チュートリアル
          </Link>
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/misyaguziya/VRCT">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="VRCTは、翻訳と文字起こし機能でVRChatの会話をサポートするソフトウェアです。">
      <HomepageHeader />
      <main>
        <Heading as="h2" className="text--center" style={{ marginTop: '40px' }}></Heading>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
