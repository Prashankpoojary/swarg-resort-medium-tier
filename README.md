# SWARG — Himalayan Cloud Retreat (Medium Tier)
### Architectural Studio Edition — Inspired by FORMA

This is the elevated **Medium Tier** client demonstration package for **SWARG**, completely redesigned taking direct inspiration from the minimalist architectural aesthetic of **FORMA** (full-bleed room-by-room walkthrough, bold typographic restraint, and clean museum-grade spatial storytelling).

🌐 **Live Demo**: [https://prashankpoojary.github.io/swarg-resort-medium-tier/](https://prashankpoojary.github.io/swarg-resort-medium-tier/)

---

## 🏛️ The FORMA-Inspired Architectural Experience

### 1. Full-Bleed Architectural Room Walkthrough Hero
- **Immersive Full-Screen Viewport**: Clean, high-impact spatial walkthrough of the retreat's primary living areas:
  - `01 / LIVING` &bull; **THE LIVING SPACE** &bull; *WHERE THE DAY GATHERS.*
  - `02 / DINING` &bull; **THE DINING ROOM** &bull; *MADE FOR LONG TABLES, LONGER EVENINGS.*
  - `03 / HEARTH` &bull; **THE DUAL HEARTH** &bull; *CARVED SLATE & AROMATIC BLUE PINE.*
  - `04 / SUITE` &bull; **PRIMARY SUITE** &bull; *A ROOM THAT HOLDS THE LIGHT.*
  - `05 / BATH` &bull; **THE BATH** &bull; *STONE, WATER, STILLNESS.*
  - `06 / HORIZON` &bull; **THE GRAND VIEW** &bull; *FULLY UNTOUCHED. ABOVE 8,250 FT.*
- **Interactive Spatial Controls**:
  - Clickable room category pills along the bottom.
  - Thin 2px progress bar track filling smoothly as you explore (`16.6%` &rarr; `100%`).
  - `← PREV` / `NEXT →` controls and keyboard arrow navigation.
  - Direct **"Inquire Stay"** and **"View CAD Specs"** triggers.

### 2. Architectural CAD Suite Inspector Drawer
- Click **"CAD Details"** on any residence to open the full architectural specifications modal:
  - **Multi-Angle Gallery**: Switch between exterior vista, bedroom hearth, cedar soaking tub, and alpine stargazing deck.
  - **Alpine Day vs. Mountain Dusk**: Real-time room lighting preview with smooth image crossfades.
  - **CAD Blueprint Schematics**: 1:100 scale architectural breakdown of room zones, footprints, and specifications.

### 3. Bespoke Stay & Experience Curation Engine
- An interactive VIP configurator where guests tailor their residency prior to arrival:
  - **Aviation Routing**: Private Helicopter from Kathmandu (28 min) or Pokhara (14 min) vs. VIP Alpine Rover.
  - **Haute Gastronomy**: 9-Course Foraged Glacial Tasting vs. Frost & Flame Hearth.
  - **Restorative Wellness**: 432 Hz Sound & Geothermal Soak vs. Vedic Alpine Herbal Therapy.
  - **Alpine Expeditions**: Heli-Glacier Champagne Picnic vs. Nocturnal Stargazing.
- Live real-time currency calculation with **"Transfer Curated Itinerary to Reservation"**.

### 4. Interactive Alpine Gastronomy & Sommelier Cellar Explorer
- Tabbed switcher exploring *The Summit Cantilevered Salon* (Haute Degustation), *Frost & Flame Sunken Pits* (Open-hearth yak wagyu), and *The Subterranean Grand Cru Cellar* (1,400+ vintage labels).

### 5. Private Aviation & Helipad Logistics Desk
- Dedicated diplomatic flight desk showing ICAO helipad clearance (`ZSWG`, `28°35'N, 83°57'E`), radio frequency (`122.80 MHz`), and interactive flight corridor selector (Kathmandu, Pokhara, New Delhi private jet connection).

### 6. Live Multi-Currency Conversion
- Real-time conversion across **USD ($)**, **EUR (€)**, **MVR (Rf)**, and **INR (₹)** throughout the walkthrough, residences, curation engine, and booking modal.
- Generates realistic VIP confirmation toast (`SWG-XXXXXX`) with direct concierge dispatch status.

---

## 🚀 How to Run / Demo

```bash
# Serve locally with Python:
cd /home/lazylad/Projects/Website-demo/Medium_tier
python3 -m http.server 8000
```
Then open **[http://localhost:8000](http://localhost:8000)** in your browser, or launch directly:
```bash
xdg-open /home/lazylad/Projects/Website-demo/Medium_tier/index.html
```
