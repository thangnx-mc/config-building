# STABLE STAFF BUSINESS FLOW DIAGRAM V7: COMPACT WIDTH & VERTICAL PROPORTIONS REPORT

**Task ID:** `RH-DRAWIO-04`  
**Repository:** `thangnx-mc/config-building`  
**Branch:** `main`  
**Target Directory:** `stable_staff_flow_v7/`  
**Role:** `STABLE_STAFF` (Nhân viên chuồng / Groom / Field Operations Staff)  
**Baseline Reference:** Version V6 (`stable_staff_flow_v6/`, commit `b986080`)

---

## 1. Executive Summary & Optimization Objectives

Following the team review of Stable Staff Flow Diagram V6, the layout was identified as having excessive horizontal width (1840 px) and disproportionately wide, squat functional cards (265 px wide × 175 px tall, ratio 1.51:1). This left noticeable horizontal empty space on the sides of each card when embedded into standard presentation slides.

**TASK RH-DRAWIO-04** refines the diagram geometry to achieve:
1. **Compact Overall Width:** Reduced total canvas width from **1840 px down to 1400 px** (−440 px, **−24% horizontal reduction**).
2. **Narrower Functional Cards:** Reduced card width from **265 px down to 200 px** (−65 px per card, **−25% card width reduction**), eliminating excess horizontal whitespace.
3. **Improved Vertical Proportions:** Increased card height from **175 px up to 205 px** (+30 px, **+17% vertical growth**), giving the cards a balanced, sturdy modern app-card form factor (200 × 205 px, near 1:1 ratio).
4. **Enlarged, Prominent Icons:** Increased icon circle diameter from **60 px to 68 px** (r = 34 px) and enlarged the internal vector glyphs from **30 px to 36 px** for immediate visual recognition at slide presentation distance.
5. **Exact Mathematical Symmetry:** The vertical distribution bus stem drops at **x = 700**, which is the exact mathematical midpoint between the left 3 cards and the right 3 cards, creating 100% symmetrical bus arms (550 px left, 550 px right).

---

## 2. Quantitative Dimension Comparison (V6 vs. V7)

| Metric / Dimension | Version V6 (Baseline) | Version V7 (Refined) | Delta / Engineering Change |
|---|---|---|---|
| **Total Canvas Dimensions** | 1840 × 490 px | **1400 × 500 px** | Width: −440 px (−23.9%), Height: +10 px |
| **Aspect Ratio** | 3.75 : 1 (ultra-wide banner) | **2.80 : 1 (compact widescreen)** | Fits naturally into standard slide content containers |
| **Card Dimensions (W × H)** | 265 × 175 px | **200 × 205 px** | Width: −65 px (−24.5%), Height: +30 px (+17.1%) |
| **Card Aspect Ratio** | 1.51 : 1 (squat landscape) | **0.98 : 1 (sturdy near-square)** | Eliminates lateral emptiness; emphasizes icon + title |
| **Card Gap** | 26 px | **20 px** | Tightened spacing between adjacent cards |
| **Total 6-Card Row Span** | 1720 px (from x=60 to 1780) | **1300 px (from x=50 to 1350)** | −420 px horizontal footprint saved |
| **Icon Circle Diameter** | 60 px (radius 30 px) | **68 px (radius 34 px)** | +8 px (+13.3% diameter increase) |
| **Internal Icon Glyph Size** | ~30 px | **~36 px** | +6 px (+20% visual prominence) |
| **Title Typography** | Mixed 1-line / 2-line | **Uniform 2-Line Rhythm (15.5 px bold)** | Identical baseline and vertical rhythm across all 6 cards |
| **Bus Drop Stem Position** | x = 930 px (offset from center) | **x = 700 px (exact geometric midpoint)** | Perfectly bisects Card 3 (cx=590) and Card 4 (cx=810) |
| **Distribution Bus Arms** | Asymmetrical | **Symmetrical (550 px left / 550 px right)** | Flawless geometric balance |

---

## 3. Preserved Architecture & Six Verified Modules

All six operational modules verified from the Racehorse RTMS Stable Staff UI screenshot (`media_1794588267199_4ed57ee0.png`) remain in their exact sequence and retain their established official color accents and icon concepts:

| # | Module Title | Accent Color | Theme Hex | Icon Concept | Card Geometry & Styling |
|---|---|---|---|---|---|
| **1** | **Daily Tasks** | Blue | `#2563eb` | Clipboard Checklist | 200 × 205 px card, 68 px circle (`#eff6ff`), 2 lines bold title |
| **2** | **Training Preparation** | Indigo | `#4f46e5` | Calendar / Training Clock | 200 × 205 px card, 68 px circle (`#eef2ff`), 2 lines bold title |
| **3** | **Stable & Horse Activities** | Teal | `#0d9488` | Barn / Stable Quarters | 200 × 205 px card, 68 px circle (`#f0fdfa`), 2 lines bold title |
| **4** | **Feeding Management** | Amber | `#d97706` | Feeding Bowl & Grain | 200 × 205 px card, 68 px circle (`#fffbeb`), 2 lines bold title |
| **5** | **Incident Reporting** | Red | `#dc2626` | Warning Alert Triangle | 200 × 205 px card, 68 px circle (`#fef2f2`), 2 lines bold title |
| **6** | **Inventory & Supplies** | Emerald | `#059669` | 3D Warehouse Package Box | 200 × 205 px card, 68 px circle (`#ecfdf5`), 2 lines bold title |

---

## 4. Preserved Authentication & Session Workflow

The top authentication decision sequence remains 100% complete with full decision logic:

1. **Staff Entry Node (`x=25, y=36, w=130, h=82`):** Green avatar icon + `Stable staff` label.
2. **Credentials Input Node (`x=205, y=36, w=160, h=82`):** Green padlock icon + `Enter username and password` label.
3. **Decision Diamond (`x=415, y=36, w=140, h=82`):** Amber rhombus (`#fffbeb` / `#f59e0b`) asking `Valid login with`.
4. **Invalid Branch (`NO`):** Red directional arrow down to `Access denied / Check login details` (`#fef2f2` / `#fca5a5`, `x=405, y=152`).
5. **Valid Branch (`yes`):** Green directional arrow right to `Open the staff dashboard` (`#f0fdf4` / `#86efac`, `x=605, y=36, w=190, h=82`).
6. **Session Termination:** Directional connector labeled `Session end` leading to `Log out / Revoke the session` (`x=865, y=36, w=160, h=82`).

---

## 5. Geometric Alignment & Distribution Bus Geometry

```
  [Staff Entry] ──> [Credentials] ──> <Valid Login?> ──[yes]──> [Staff Dashboard] ──> [Log Out]
                                             │                         │
                                       [NO]  │                         │ (Vertical Drop at x=700)
                                             ▼                         ▼
                                      [Access Denied]   ==================================== (Bus Bar: x=150..1250)
                                                        │        │        │        │        │        │
                                                        ▼        ▼        ▼        ▼        ▼        ▼
                                                      [CARD1]  [CARD2]  [CARD3]  [CARD4]  [CARD5]  [CARD6]
                                                       Daily    Train    Stable   Feed     Alert    Stock
                                                       Tasks    Prep     Living   Mgmt     Report   Inv
                                                      (cx=150) (cx=370) (cx=590) (cx=810) (cx=1030)(cx=1250)
```

- **Bus Stem:** Drops from Dashboard bottom at `(700, 118)` down to `(700, 220)`.
- **Bus Bar:** Horizontal connector at `y = 220 px`, spanning from `x = 150` to `x = 1250`.
- **Vertical Drops:** 6 lines dropping from `y = 220` to `y = 255`, each terminating in a solid arrowhead at the exact horizontal center of its target card (`cx = 150, 370, 590, 810, 1030, 1250`).
- **Zero Intersections:** Connectors maintain clear separation and never cross card containers, text labels, or icons.

---

## 6. Deliverables Manifest & Verification Proof

All required artifacts are generated and verified in directory `stable_staff_flow_v7/`:

1. **`STABLE_STAFF_FLOW_V7.drawio`:**
   Fully editable, native mxGraph XML diagram file. Completely unframed, pure white canvas, 200×205 px cards with symmetrical orthogonal connectors.
2. **`STABLE_STAFF_FLOW_V7.png`:**
   High-resolution (1400×500) raster export rendered via headless browser engine. Ready for instant embedding into slide decks.
3. **`STABLE_STAFF_FLOW_V7.svg`:**
   Scalable vector graphic with inline vector icons and zero XML syntax errors.
4. **`STABLE_STAFF_FLOW_V7_COMPARISON.png`:**
   Stacked visual comparison displaying the direct geometric evolution from V6 (1840 px wide) to V7 (1400 px compact width).
5. **`STABLE_STAFF_FLOW_V7_REPORT.md`:**
   This comprehensive engineering, layout, and proportion report.

---

## 7. Slide Integration Guide

- **Aspect Ratio Benefit:** The updated 2.8:1 aspect ratio integrates naturally into standard 16:9 presentation slides without stretching or creating empty side margins.
- **Visual Balance:** Cards now feature balanced internal padding (25 px top, 35 px bottom) with prominent 68 px icons and clear 2-line titles readable from distance.
