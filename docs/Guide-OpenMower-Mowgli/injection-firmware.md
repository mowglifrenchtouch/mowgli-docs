---
title: "📀 Injection Firmware"
nav_order: 5
permalink: /docs/injection-firmware/
parent: "🏠 Guide OpenMower"
layout: default
---
<div style={{textAlign:"center"}}>
  <img src="/img/injection_firmware_cover.png" alt="Illustration firmware" style={{maxWidth:"200px", margin:"1rem auto", borderRadius:"10px", boxShadow:"0 2px 6px rgba(0,0,0,0.2)"}} />
</div>


# 📀 Compilation et injection du Firmware Mowgli

## 🗅️ Sauvegarde du firmware initial

Avant toute modification, sauvegardez votre firmware actuel avec un **STLINK** ( Optionnel: pas utile pour 500/500B ).

<div class="alert-blue">
  <div class="alert-title">ℹ️ Firmware d'origine 500/500B</div>
  <p>Besoin du firmware d'origine ? Le firmware Yardforce 500/500B officiel est disponible ici :<br />
  <a href="https://mega.nz/folder/icshEICL#QWDtu9Y2y_YmrNRwHSYzbA" target="_blank">🗅️ Télécharger le firmware Yardforce</a></p>
</div>

**Branchement STLINK** :

<div style={{textAlign:"center"}}>
  <img src="/img/branchement_stlink.jpg" alt="Schéma de connexion STLINK" style={{maxWidth:"300px", margin:"auto"}} />
</div>

<div class="alert-blue">
  <div class="alert-title">🗅️ Drivers ST-Link (Windows) - STSW-LINK009</div>
  <p>
    Ce pilote USB est essentiel pour les cartes ST-LINK/V2, ST-LINK/V2-1 et STLINK-V3, ainsi que leurs dérivés (kits Discovery, cartes Nucleo et d'évaluation STM8/STM32).<br /><br />
    💻 Il permet au système de reconnaître les interfaces USB du ST-LINK :<br />
    ✅ ST Debug<br />
    ✅ Port COM virtuel<br />
    ✅ ST Bridge interfaces<br /><br />
    ⚠️ Installation requise avant connexion pour ST-LINK/V2 et V2-1.<br />
    🔹 Facultative pour STLINK-V3 (mais permet de personnaliser les noms des ports COM virtuels).<br /><br />
    💫 <a href="https://mega.nz/folder/XEdGVTaB#KnQNzVhi9RzjMeEXjzvQ-g" target="_blank">Lien de téléchargement</a>
  </p>
</div>

<div class="alert-blue">
  <div class="alert-title">🛠️ Téléchargez STM32CubeProgrammer (STM32CubeProg)</div>
  <p>
    STM32CubeProgrammer est un outil logiciel multi-OS tout-en-un conçu pour la programmation des produits STM32.<br /><br />
    Il offre une interface intuitive et efficace pour lire, écrire et vérifier la mémoire des microcontrôleurs via :<br />
    🔹 Interfaces de débogage : JTAG & SWD<br />
    🔹 Interfaces bootloader : UART, USB DFU, I2C, SPI & CAN<br /><br />
    Avec STM32CubeProgrammer, vous pouvez :<br />
    ✅ Programmer les mémoires internes (Flash, RAM, OTP) et externes<br />
    ✅ Gérer les options de programmation et vérifier le contenu<br />
    ✅ Automatiser la programmation via des scripts<br /><br />
    Disponible en interface graphique (GUI) et en ligne de commande (CLI).<br /><br />
    💫 <a href="https://mega.nz/folder/2ZMHjJhT#DXUiH4I_ma5rL42wuUkJ_Q" target="_blank">Lien de téléchargement</a>
  </p>
</div>

---

# 📀 1. Téléchargement du firmware

**Pour Yardforce 500**  
🧸 [GitHub - CEDBOSSNEO / Mowgli (main)](https://github.com/cedbossneo/Mowgli/tree/main)

**Lien direct** : [ZIP](https://github.com/cedbossneo/Mowgli/archive/refs/heads/main.zip)

**Pour Yardforce 500B**  
🧸 [GitHub - Nekraus / Mowgli (yardforce-500b)](https://github.com/Nekraus/Mowgli/tree/yardforce-500b)

**Lien direct** : [ZIP](https://github.com/Nekraus/Mowgli/archive/refs/heads/yardforce-500b.zip)

<div class="alert-green">
  <div class="alert-title">✅ Note pour les utilisateurs Yardforce 500B</div>
  <p>
    Le firmware de Nekraus pour le Yardforce 500B permet d'utiliser pleinement le tableau de bord du robot.<br />
    Cela améliore l'expérience utilisateur en gardant l'affichage actif et fonctionnel.
  </p>
</div>

---

# 🛠️ 2. Compilation du firmware

<div class="alert-blue">
  <div class="alert-title">🎥 Vidéo explicative : Compilation du firmware</div>
  <p>Regardez directement la vidéo ci-dessous :</p>

  <div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", marginTop:"1rem"}}>
    <iframe src="https://www.youtube.com/embed/ID_COMPILATION_VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}></iframe>
  </div>
</div>

---

# 🚀 3. Injection du firmware

## 📁 Option 1 : Via Visual Studio Code

<div class="alert-blue">
  <div class="alert-title">🎥 Vidéo explicative : Injection avec VSCode</div>
  <p>Regardez directement la vidéo ci-dessous :</p>

  <div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", marginTop:"1rem"}}>
    <iframe src="https://www.youtube.com/embed/ID_VSCODE_VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}></iframe>
  </div>
</div>

<p>
  En cas d'erreur <code>Error: init mode failed (unable to connect to the target)</code>, vérifier les connections du st-link-v2 (il est très courant de les inverser).
  Si l'erreur persiste, plusieurs cas ont été observés où le remplacement du st-link-v2 a corrigé le problème.
</p>

## 📁 Option 2 : Via STM32CubeProgrammer

<div class="alert-blue">
  <div class="alert-title">🎥 Vidéo explicative : Injection avec STM32CubeProgrammer</div>
  <p>Regardez directement la vidéo ci-dessous :</p>

  <div style={{position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden", marginTop:"1rem"}}>
    <iframe src="https://www.youtube.com/embed/ID_CUBEPROG_VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}></iframe>
  </div>
</div>

---
