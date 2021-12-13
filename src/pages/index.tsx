import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import BackCanvas from '../components/BackCanvas';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <BrowserOnly>
        {() => <BackCanvas />}
        </BrowserOnly>
        <div className="padding"></div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.crosschain.quest">
            Launch App
          </Link>
          
        </div>
        <div className={styles.testnetButton}>
        <Link
            className="button button--secondary button--sm"
            to="https://testnet.crosschain.quest">
            Try Testnet
          </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Swap across blockchains.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
