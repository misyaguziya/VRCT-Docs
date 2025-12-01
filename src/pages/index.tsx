import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary-base', styles.heroBanner)}>
      <div className="container">
        <div>
            <img src="img/vrct_logo_white.png" alt="VRCT Logo"/>
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
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Tutorial
          </Link>
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/misyaguziya/VRCT">
            GitHub
          </Link>
        </div>
      </div>
        <div>
            <img src="img/screenshot.png" alt="VRCT Screenshot"/>
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
