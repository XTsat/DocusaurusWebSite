import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Steam指南',
    Svg: require('/static/img/steam (2).svg').default,
    description: (
      <>
        个人资料美化教程,平台有用的功能
      </>
    ),
  },
  {
    title: 'Steam++指南',
    Svg: require('/static/img/Steam++ico.svg').default,
    description: (
      <>
        「Steam++🛠」是一个开源跨平台的多功能Steam工具箱。
      </>
    ),
  },
  {
    title: 'windows 11 安卓应用指南',
    Svg: require('/static/img/Android2.svg').default,
    description: (
      <>
        教你用最简单的方式给win11安装安卓应用
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
