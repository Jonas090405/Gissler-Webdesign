# Hosting Setup — Gissler Webdesign

## Übersicht: 2 separate GitHub Repos

| Repo | Inhalt | Domain |
|---|---|---|
| `jonas090405/gissler-webdesign` | Dieser Ordner (Hauptseite) | `gissler-webdesign.de` |
| `jonas090405/portfolio` | Nur der `Portfolio/` Ordner | `portfolio.gissler-webdesign.de` |

---

## Schritt 1 — Strato DNS einrichten

Im Strato-Kundenbereich → Domain → DNS-Einstellungen:

### A-Records (Apex-Domain → GitHub Pages)
| Typ | Name | Wert |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### CNAME-Records
| Typ | Name | Wert |
|---|---|---|
| CNAME | www | jonas090405.github.io. |
| CNAME | portfolio | jonas090405.github.io. |

> ⚠️ Den Punkt am Ende bei den CNAME-Werten mitschreiben, falls Strato ihn verlangt.

---

## Schritt 2 — Haupt-Repo (gissler-webdesign.de)

### 2a — GitHub Repo einrichten
1. Neues Repo auf GitHub: `jonas090405/gissler-webdesign`
2. Diesen Ordner pushen (ohne `Portfolio/` – der ist separat)

### 2b — GitHub Pages aktivieren
1. Repo → Settings → Pages
2. Source: **GitHub Actions** (nicht "Deploy from branch")

### 2c — Secrets setzen
Repo → Settings → Secrets and variables → Actions → New repository secret:

| Name | Wert |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | aus deiner `.env` |
| `VITE_EMAILJS_TEMPLATE_ID` | aus deiner `.env` |
| `VITE_EMAILJS_PUBLIC_KEY` | aus deiner `.env` |
| `VITE_GA_MEASUREMENT_ID` | aus deiner `.env` |

### 2d — Custom Domain
1. Repo → Settings → Pages → Custom domain: `gissler-webdesign.de`
2. "Enforce HTTPS" aktivieren (nach DNS-Propagation)

---

## Schritt 3 — Portfolio-Repo (portfolio.gissler-webdesign.de)

### 3a — Neues Repo erstellen
1. Neues Repo: `jonas090405/portfolio`
2. Navigiere in den `Portfolio/` Ordner
3. Git init & push:
```
cd Portfolio
git init
git add .
git commit -m "Initial portfolio deploy"
git remote add origin https://github.com/jonas090405/portfolio.git
git push -u origin main
```

### 3b — GitHub Pages aktivieren
1. Repo → Settings → Pages
2. Source: **GitHub Actions**

### 3c — Custom Domain
1. Repo → Settings → Pages → Custom domain: `portfolio.gissler-webdesign.de`
2. "Enforce HTTPS" aktivieren

> Der Workflow in `.github/workflows/static.yml` baut TradeRepublicXshisha und Forged automatisch neu und deployed dann alles.

---

## Was automatisch passiert (nach Setup)

- Jeder Push auf `main` im Haupt-Repo → Hauptseite wird automatisch gebaut & deployed
- Jeder Push auf `main` im Portfolio-Repo → Portfolio wird automatisch deployed
- HTTPS wird von GitHub Pages automatisch bereitgestellt

---

## DNS-Propagation

Kann 15 Minuten bis 48 Stunden dauern. Testen mit:
```
nslookup gissler-webdesign.de
nslookup portfolio.gissler-webdesign.de
```
