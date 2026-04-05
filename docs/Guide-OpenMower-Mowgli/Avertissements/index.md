---
title: "⚠️ Avertissements"
sidebar_position: 1
---

# Option A (La plus fiable avec Docusaurus) :
![Illustration avertissement](@site/static/img/illustration-avertissements.png)

# Option B (Si tu préfères rester en Markdown standard) :
![Illustration avertissement](/img/illustration-avertissements.png)
# ⚠️ Avertissements

Bienvenue dans ce guide dédié à la transformation de votre robot tondeuse **Yardforce 500 ou 500B** en robot autonome via le projet **OpenMower + Mowgli**.

:::tip 🔗 Ressources recommandées
La réussite de votre installation dépend de la compréhension globale du projet. Nous vous conseillons vivement de consulter ces ressources clés :

* [**Documentation OpenMower**](https://openmower.de/docs/robot-assembly/prepare-the-parts/prepare-the-robot/photo-guide/) : Le guide de montage original.
* [**Fork Mowgli (GitHub)**](https://github.com/cedbossneo/Mowgli) : Le cœur du projet.
* [**Mowgli Docker**](https://github.com/CedBossNeo/mowgli-docker) : La solution logicielle simplifiée.
* [**Communauté Telegram (FR)**](https://t.me/+x6U3UwU5lB4yOWNk) : Le groupe d'entraide indispensable.
:::

---

## ℹ️ Pourquoi lire cette page ?

Avant de passer à l'aspect technique, il est crucial de prendre connaissance des points suivants :
* La **compatibilité** précise de votre matériel.
* Les **limitations fonctionnelles** actuelles.
* Les **risques matériels et sécuritaires**.
* L’état de **maturité du firmware**.

---

## ✅ Modèles compatibles

Ce guide est spécifiquement optimisé pour :
* ✅ **Yardforce 500**
* ✅ **Yardforce 500B**

> **Prérequis Hardware :** Votre robot doit posséder sa carte mère d'origine (**STM32F103** ou **STM32F4xx**). La compatibilité avec d'autres modèles utilisant ces cartes est possible mais reste expérimentale.

---

## ⚙️ Fonctionnalités & Limitations

Selon votre modèle et le firmware choisi, certaines fonctions (boutons et voyants du capot) peuvent se comporter différemment.

### Yardforce 500
* ✅ **Voyant levage** fonctionnel.
* ✅ **Voyant batterie faible** fonctionnel.
* ✅ **Voyant de charge** fonctionnel.
* *Ces éléments opèrent nativement, sans modification spécifique du firmware.*

### Yardforce 500B
* 🚀 **Optimisation via le firmware de Nekraus (v. 25/04/2025) :**
    * ✅ **Clavier** pleinement opérationnel.
    * ✅ **Voyants** totalement fonctionnels.
* ⚠️ **Note :** L'utilisation d'autres firmwares peut entraîner la désactivation ou le dysfonctionnement de ces interfaces.

---

## 🛑 Clause de non-responsabilité

:::danger ATTENTION
La modification logicielle et matérielle de votre robot est réalisée **sous votre entière responsabilité**. En poursuivant la lecture de ce guide, vous acceptez les risques suivants :

1.  **Perte de garantie :** L'ouverture du robot et le flash du firmware annulent la garantie constructeur.
2.  **Sécurité :** Une tondeuse est un outil potentiellement dangereux. Des comportements imprévus peuvent survenir lors des phases de test.
3.  **Risque matériel :** Une mauvaise manipulation peut entraîner une panne définitive de vos composants.

**L'auteur et les contributeurs déclinent toute responsabilité** en cas de dommage matériel, de blessure ou de mauvaise manipulation.
:::

---

## 🔁 Mises à jour du guide

Le projet évolue très vite. Ne restez pas sur une version obsolète :

👉 [**Consulter le journal des mises à jour**](/docs/Guide-OpenMower-Mowgli/mise-a-jour-guide)