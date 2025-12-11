import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary-base', styles.heroBanner)}>
    {/* <header className={clsx('hero hero--primary', styles.heroBanner)}> */}
      <div className="container">
        <div>
          <ThemedImage
            alt="VRCT Logo"
            sources={{
              light: useBaseUrl('img/vrct_logo_black.png'),
              dark: useBaseUrl('img/vrct_logo_white.png'),
            }}
            style={{ width: '900px', objectFit: 'contain' }}
          />
        </div>
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons} style={{ marginTop: '30px' }}>
          <Link
            className="button button--secondary button--lg"
            to="https://misyaguziya.booth.pm/items/5155325">
            Download
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial">
            Tutorial
          </Link>
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
      description="VRCT is software that supports VRChat conversations with translation and transcription.">
      <HomepageHeader />
      <main>
        <Heading as="h2" className="text--center" style={{ marginTop: '40px' }}></Heading>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
