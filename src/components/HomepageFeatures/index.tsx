import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '💬 Send chat to VRChat',
    description: (
      <>
        Allows direct input into the VRChat ChatBox from VRCT.
      </>
    ),
  },
  {
    title: '🌐 Real-Time Translation',
    description: (
      <>
        Supports real-time translation between multiple languages, enabling communication across borders.
      </>
    ),
  },
  {
    title: '🎙/🔈 Real-Time Transcription of audio from microphone/speaker',
    description: (
      <>
        Support real-time transcription of audio from both microphone and speaker, making conversations more accessible.
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
          <h1>Screenshot</h1>
          <img src={screenshot} alt="VRCT Screenshot" />
        </div>
      </div>
    </section>
  );
}
