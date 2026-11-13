# STABLE STAFF BUSINESS FLOW DIAGRAM V6: MINIMALIST PRESENTATION REFINEMENT REPORT

**Task ID:** `RH-DRAWIO-03`  
**Repository:** `thangnx-mc/config-building`  
**Branch:** `main`  
**Target Directory:** `stable_staff_flow_v6/`  
**Role:** `STABLE_STAFF` (Nhân viên chuồng / Groom / Field Operations Staff)  
**Baseline Reference:** Version V5 (`stable_staff_flow_v5/`, commit `5d4ce55`)

---

## 1. Executive Summary & Review Rationale

Following the user review of Stable Staff Flow Diagram V5, the overall architectural structure and visual direction were approved. However, two essential refinements were requested to make the diagram directly embeddable into existing presentation slides:

1. **Card Text Clutter Removal:** The four operational description groups, descriptive subtitles, repeated role labels, and bottom feature badges in V5 were unnecessarily dense for an executive/academic slide presentation.
2. **Slide-Level Framing Removal:** The dark forest-green outer background, large serif title, subtitle, and role badge were presentation layout artifacts mistakenly reproduced from the user-provided Club Manager slide crop. The actual workflow diagram must exist as an independent, cropped graphic on a pure white canvas (`#FFFFFF`).

Version V6 achieves this minimalist refinement: a clean, colorful, icon-based workflow diagram with pure white background, cropped tightly around the workflow geometry with balanced margins.

---

## 2. Transition Matrix: Version V5 vs. Version V6

| Feature / Element | Version V5 (Baseline) | Version V6 (Refined Minimalist) | Refinement Rationale |
|---|---|---|---|
| **Outer Background** | Dark forest-green (`#243c30`) | **Pure White (`#FFFFFF`)** | Removed presentation-slide frame; allows seamless embedding into any slide deck. |
| **Slide Header & Badges** | Serif italic title, subtitle, `Role: STABLE_STAFF` | **Completely Removed** | Header and metadata are managed directly by presentation slide authors. |
| **Diagram Canvas** | Nested rounded white box inside dark frame | **Single Unframed Canvas** | Direct diagram output with no nested container borders. |
| **Card Content** | Icon + Title + Subtitle + 4 Bullets + Bottom Badge | **Icon + Module Title ONLY** | Clean, minimalist, executive presentation density. |
| **Repeated Role Labels** | Repeated `STABLE STAFF` tags on all cards | **Completely Removed** | Eliminated redundant text noise. |
| **Card Height** | 565 px (tall rectangular containers) | **175 px (compact, balanced cards)** | Eliminated 390px of vertical height per card after removing bullet text. |
| **Authentication Logic** | Full 7-step decision flow with color coding | **Preserved 100% Unchanged** | Full login decision, denied branch, dashboard, and logout logic retained. |
| **Six Modules & Order** | 1 to 6 verified sidebar modules | **Preserved 100% Unchanged** | All 6 modules, icons, and official color themes preserved. |
| **Dashboard Distribution Bus** | Orthogonal bus with 6 drops | **Preserved & Perfectly Centered** | Bus stem drops at x=930 (midpoint of Card 3 & 4), providing exact symmetry. |
| **Dimensions / Crop** | 1920 × 1080 (forced 16:9 full slide) | **1840 × 490 (tightly cropped banner)** | Optimal aspect ratio for inserting into standard presentation slide body. |

---

## 3. Preserved Architecture & Six Verified Modules

All six operational modules verified from the Racehorse RTMS Stable Staff UI screenshot (`media_1794588267199_4ed57ee0.png`) are preserved in exact order with their established icon concepts and accent color themes:

| # | Module Title | Accent Color | Theme Hex | Icon Concept | Visual Style & Container |
|---|---|---|---|---|---|
| **1** | **Daily Tasks** | Blue | `#2563eb` | Clipboard Checklist | 60px circle (`#eff6ff`), bold title, 12px rounded card |
| **2** | **Training Preparation** | Indigo | `#4f46e5` | Calendar / Training Clock | 60px circle (`#eef2ff`), bold title, 12px rounded card |
| **3** | **Stable & Horse Activities** | Teal | `#0d9488` | Barn / Stable Quarters | 60px circle (`#f0fdfa`), bold title, 12px rounded card |
| **4** | **Feeding Management** | Amber | `#d97706` | Feeding Bowl & Grain | 60px circle (`#fffbeb`), bold title, 12px rounded card |
| **5** | **Incident Reporting** | Red | `#dc2626` | Warning Alert Triangle | 60px circle (`#fef2f2`), bold title, 12px rounded card |
| **6** | **Inventory & Supplies** | Emerald | `#059669` | 3D Warehouse Package Box | 60px circle (`#ecfdf5`), bold title, 12px rounded card |

---

## 4. Preserved Authentication & Session Workflow

The top authentication decision sequence remains intact, preserving standard flowchart decision semantics while removing repetitive role tags:

1. **Stable Staff Entry Card (`x=180, y=40, w=150, h=84`):** Green avatar icon + `Stable staff` label.
2. **Credentials Card (`x=385, y=40, w=175, h=84`):** Green padlock icon + `Enter username and password` label.
3. **Decision Diamond (`x=615, y=40, w=160, h=84`):** Warm amber rhombus (`#fffbeb` / `#f59e0b`) asking `Valid login with`.
4. **Invalid Branch (`NO`):** Red connector down to `Access denied / Check login details` (`#fef2f2` / `#fca5a5`).
5. **Valid Branch (`yes`):** Green connector right to `Open the staff dashboard` (`#f0fdf4` / `#86efac`) with green checkmark icon.
6. **Session Termination:** Directional connector labeled `Session end` leading to `Log out / Revoke the session`.

---

## 5. Geometric & Visual Specifications

```
  [Staff Entry] ──> [Credentials] ──> <Valid Login?> ──[yes]──> [Staff Dashboard] ──> [Log Out]
                                             │                         │
                                       [NO]  │                         │ (Central Bus Drop)
                                             ▼                         ▼
                                      [Access Denied]   ==================================== (Distribution Bus)
                                                        │        │        │        │        │        │
                                                        ▼        ▼        ▼        ▼        ▼        ▼
                                                      [CARD1]  [CARD2]  [CARD3]  [CARD4]  [CARD5]  [CARD6]
                                                       Daily    Train    Stable   Feed     Alert    Stock
                                                       Tasks    Prep     Living   Mgmt     Report   Inv
```

### 5.1. Dimensions & Proportions
- **Canvas Dimensions:** 1840 × 490 px.
- **Background:** `#ffffff` (Pure White).
- **Top Auth Row:** `y = 40` to `124 px`.
- **Access Denied Box:** `y = 164` to `214 px`.
- **Distribution Bus Bar:** `y = 236 px`. Symmetrical horizontal span from `x = 192` to `x = 1648`.
- **Bus Drop Stem:** Placed at `x = 930` (perfect geometric center between Card 3 and Card 4).
- **Card Grid:** 6 cards with width `265 px`, height `175 px`, starting at `y = 270` to `445 px`.
- **Margins:** Top 40 px, Bottom 45 px, Left 60 px, Right 60 px. Symmetrical and balanced.

---

## 6. Deliverables Manifest & Verification Proof

All required artifacts are generated and verified in directory `stable_staff_flow_v6/`:

1. **`STABLE_STAFF_FLOW_V6.drawio`:**
   Fully editable, native mxGraph XML diagram file. Completely unframed, pure white background, minimal cards with clean orthogonal connectors.
2. **`STABLE_STAFF_FLOW_V6.png`:**
   High-resolution (1840×490) raster export rendered via headless browser engine. Ready for direct insertion into slide decks.
3. **`STABLE_STAFF_FLOW_V6.svg`:**
   Scalable vector graphic with inline vector icons and zero XML syntax errors.
4. **`STABLE_STAFF_FLOW_V6_COMPARISON.png`:**
   Stacked vertical visual comparison demonstrating the direct evolution from V5 (slide frame & bullet lists) to V6 (minimalist white-canvas workflow).
5. **`STABLE_STAFF_FLOW_V6_REPORT.md`:**
   This comprehensive engineering and refinement report.

---

## 7. Slide Integration Guide

- **Placement:** Insert `STABLE_STAFF_FLOW_V6.png` directly into the content container of any standard 16:9 presentation slide (PowerPoint, Google Slides, or Canva).
- **Header Freedom:** The slide author can now place their own typography, slide title, role tags, or branding above the diagram without visual clash.
- **Scaling:** The 1840×490 aspect ratio (approx. 3.75:1) leaves ample room above for slide titles and below for presenter notes or take-away bullets.
