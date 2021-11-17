/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Crosschain Swaps',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Swap to and from your favorite blockchains. Crosschain.Quest is not limited to a single blockchain like many of the popular exchange. 
      </>
    ),
  },
  {
    title: 'Earn up to 80% as an Affiliate',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Want to run your own exchange? You can share an affiliate link with your friends and earn from every swap. Earn 20% of swap fees from every additional affiliate you recruit!
      </>
    ),
  },
  {
    title: 'Support #teamseas',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Crosschain.Quest is donating all transaction fees earned to #teamseas until they meet their ambitious goal of raising 30 million dollars to clear the ocean of trash!1
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
