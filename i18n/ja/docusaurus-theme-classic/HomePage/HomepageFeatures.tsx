import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/components/HomepageFeatures/styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '💬 VRChatへチャット送信',
    description: (
      <>
        VRCTからVRChat ChatBoxへ直接入力できます。
      </>
    ),
  },
  {
    title: '🌐 リアルタイム翻訳',
    description: (
      <>
        複数言語間のリアルタイム翻訳をサポートし、国境を越えたコミュニケーションを可能にします。
      </>
    ),
  },
  {
    title: '🎙/🔈 マイク・スピーカー音声のリアルタイム文字起こし',
    description: (
      <>
        マイクとスピーカーの両方からの音声をリアルタイムで文字起こしし、会話をよりアクセシブルにします。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const screenshot = useBaseUrl('img/screenshot.png');

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr />
        <div style={{ textAlign: 'center'}}>
          <h1>スクリーンショット</h1>
          <img src={screenshot} alt="VRCTスクリーンショット" />
        </div>
      </div>
    </section>
  );
}
