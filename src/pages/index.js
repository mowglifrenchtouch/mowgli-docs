import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ✅ IMPORT DES IMAGES (Webpack gère le chemin automatiquement)
import bandeauMowgli from '@site/static/img/bandeau-mowgli.png';
import robotGpsImg from '@site/static/img/robot-gps-v2.png';
import stepByStepImg from '@site/static/img/step-by-step-v2.png';
import interfaceWebImg from '@site/static/img/interface-web-v2.png';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Bienvenue sur ${siteConfig.title}`}
      description="Guide complet pour transformer votre Yardforce en robot OpenMower"
    >
      <main
        className="hero hero--primary"
        style={{
          backgroundImage: `url(${bandeauMowgli})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#fff',
          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 0',
        }}
      >
        <div className="container text--center">
          <h1 className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
            🤖 Mowgli Docs
          </h1>
          <p className="hero__subtitle" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Tuto complet pour robotiser votre tondeuse Yardforce 500 / 500B avec OpenMower + Mowgli
          </p>
          <div className="buttons" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link className="button button--info button--lg" to="/docs/Guide-OpenMower-Mowgli/">
              📘 Démarrer le guide
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/Guide-OpenMower-Mowgli/a-propos">
              👤 À propos du projet
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/Guide-OpenMower-Mowgli/mise-a-jour-guide">
              🆕 Mises à jour
            </Link>
          </div>
        </div>
      </main>

      <section className="features" style={{ padding: '5rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
        <div className="container">
          <div className="row">
            <div className="col col--4 text--center">
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src={robotGpsImg} 
                  alt="Robot GPS" 
                  style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--ifm-color-primary)' }} 
                />
              </div>
              <Heading as="h3">⚙️ Modifiez votre robot</Heading>
              <p>Ajoutez un GPS RTK, contrôlez les moteurs et configurez le firmware Mowgli pour une autonomie totale.</p>
            </div>
            
            <div className="col col--4 text--center">
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src={stepByStepImg} 
                  alt="Tutoriel pas à pas" 
                  style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--ifm-color-primary)' }} 
                />
              </div>
              <Heading as="h3">🧠 Tutoriels pas-à-pas</Heading>
              <p>Chaque étape est documentée : de l'ouverture du châssis aux premiers tests de tonte en extérieur.</p>
            </div>

            <div className="col col--4 text--center">
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src={interfaceWebImg} 
                  alt="Interface Web" 
                  style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--ifm-color-primary)' }} 
                />
              </div>
              <Heading as="h3">🌐 Interface Web & Mobile</Heading>
              <p>Contrôlez et diagnostiquez votre tondeuse à distance via une interface moderne et intuitive.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}