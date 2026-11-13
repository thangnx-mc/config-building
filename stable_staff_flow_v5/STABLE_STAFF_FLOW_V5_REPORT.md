# STABLE STAFF BUSINESS WORKFLOW DIAGRAM V5: VISUAL REDESIGN REPORT

**Task ID:** `RH-DRAWIO-02`  
**Repository:** `thangnx-mc/config-building`  
**Branch:** `main`  
**Target Directory:** `stable_staff_flow_v5/`  
**Role:** `STABLE_STAFF` (Nhân viên chuồng / Groom / Field Operations Staff)  
**Baseline Reference:**
- Lecturer Feedback on Previous Baseline (`stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.png`): "Too simple, plain black-and-white flowchart, lacks visual richness and business presentation appeal."
- Visual Reference Standard: **Club Manager Flow Diagram** (`media_1794588421520_35a53051.jpg`) — Dark forest-green outer frame, white canvas, serif italic header, card-based authentication workflow, central bus connector, and rounded multi-column capability cards with representative icons.
- Application Navigation Baseline: **Racehorse RTMS Stable Staff Sidebar UI** (`media_1794588267199_4ed57ee0.png`) — Verifying all six active field operations modules.

---

## 1. Executive Summary & Design Transformation

The primary objective of **TASK RH-DRAWIO-02** is to elevate the Stable Staff workflow diagram from a basic monochromatic flowchart into an academic and business presentation-ready visual architecture artifact.

### 1.1. Core Shortcomings of the Previous Baseline
1. **Visual Simplicity:** The previous diagram relied on plain black-and-white wireframe boxes without visual hierarchy, color accents, or branding aesthetics.
2. **Coarse Functional Grouping (4 Boxes instead of 6 Modules):** The baseline arbitrarily collapsed six verified front-end modules into four generic boxes (`Daily Tasks & Training`, `Stable Management`, `Feeding Management`, `Incidents & Inventory`), which concealed critical operational duties like training tack inspection and warehouse replenishment.
3. **Lack of Presentation Polish:** It looked like an internal developer sketch rather than an executive-level business process visualization.

### 1.2. The V5 Presentation Breakthrough (Club Manager Design Language)
Following the lecturer-approved **Club Manager** visual paradigm, the redesigned V5 diagram delivers:
- **Dark Forest-Green Outer Frame (`#243c30`):** Provides high visual contrast, luxury equestrian club branding, and clean framing for Canva / PowerPoint slide presentations (16:9 ratio, 1920×1080).
- **Playfair Display Header:** Elegant white serif italic role title (`Stable Staff`) paired with an emerald status pill (`Role: STABLE_STAFF`).
- **Pristine Central Canvas (`#ffffff`):** Generous rounded rectangle canvas housing the entire logical workflow.
- **Top Authentication Workflow:** Exact replica of the reference authentication sequence:
  `Stable staff` role card → `Enter username and password` → `Valid login with` decision diamond → `Access denied / Check login details` (NO branch) vs. `Open the staff dashboard` (YES branch) → `Log out / Revoke the session`.
- **Orthogonal Hub & Distribution Bus:** A single balanced bus drops from the authenticated staff dashboard and branches orthogonally across six functional columns without line crossings.
- **Six Discrete Functional Cards:** Directly mapped to the actual six sidebar navigation items discovered in the Racehorse RTMS UI screenshot, each styled with custom themed icons, dual-tone badges, bold primary actions, and supporting explanatory text.

---

## 2. Six Functional Modules: UI Verification & Functional Mapping

Based on the verified Stable Staff UI screenshot (`media_1794588267199_4ed57ee0.png`), the application sidebar contains exactly six operational modules:

| # | Sidebar Module (UI) | English Architecture Title | Accent Theme | Representative Icon | Key Core Operations & Responsibilities |
|---|---|---|---|---|---|
| **1** | **Nhiệm vụ trong ngày** | **Daily Tasks** | Blue (`#2563eb`) | Clipboard Checklist | • Review daily task list & shift routine<br/>• Track task progress (active, pending, overdue)<br/>• Execute routine care (mucking, grooming, walking)<br/>• Confirm & mark tasks completed in real-time |
| **2** | **Chuẩn bị huấn luyện** | **Training Preparation** | Indigo (`#4f46e5`) | Exercise Clock & Calendar | • Check daily training schedule & horse assignments<br/>• Inspect tack & gear (saddles, bridles, protective boots)<br/>• Prep horse for exercise (warm-up walk & grooming)<br/>• Safe track-side handover to exercise rider/trainer |
| **3** | **Ô chuồng & Sinh hoạt** | **Stable & Horse Activities** | Teal (`#0d9488`) | Barn / Stable House | • Review barn stall map & paddock allocations<br/>• Inspect stall hygiene (fresh bedding, water & ventilation)<br/>• Log daily living activities (turnout & walker sessions)<br/>• Assist horse intake & moves (verify veterinary clearance) |
| **4** | **Khẩu phần & Cho ăn** | **Feeding Management** | Amber (`#d97706`) | Feeding Bowl & Grain | • Review approved daily nutritional recipes<br/>• Weigh exact rations (grains, hay & supplements)<br/>• Apply veterinary dietary orders & recovery diets<br/>• Log meal attendance, intake & appetite notes |
| **5** | **Báo cáo sự cố** | **Incident Reporting** | Red (`#dc2626`) | Warning Alert Triangle | • Spot abnormal symptoms (colic, lameness, cuts, fever)<br/>• Create incident report with photos & severity notes<br/>• Dispatch instant urgent alert to Vet, Trainer & Manager<br/>• Track resolution status until horse is medically cleared |
| **6** | **Vật tư & Tồn kho** | **Inventory & Supplies** | Emerald (`#059669`) | 3D Warehouse Box | • Monitor barn supplies (feed bags, straw & grooming kits)<br/>• Detect low-stock thresholds & depletion warnings<br/>• Submit restock requisitions directly to Club Manager<br/>• Receive & inspect delivered stock against orders |

---

## 3. Geometric & Visual Design Specifications

The diagram was engineered using strict geometric alignment and modern SVG/vector techniques:

```
+---------------------------------------------------------------------------------------------------------+
| [Playfair Italic: Stable Staff]   Field Operations & Daily Care Workflow          [● Role: STABLE_STAFF] |
| +-----------------------------------------------------------------------------------------------------+ |
| |                                                                                                     | |
| |  [Staff Role] ──> [Username/Pass] ──> <Valid Login?> ──[yes]──> [Staff Dashboard] ──> [Log Out]   | |
| |                                            │                           │                            | |
| |                                      [NO]  │                           │                            | |
| |                                            ▼                           │ (Hub Bus Drop)             | |
| |                                     [Access Denied]                    ▼                            | |
| |                                               ==================================== (Bus Bar)        | |
| |                                               │        │        │        │        │        │        | |
| |                                               ▼        ▼        ▼        ▼        ▼        ▼        | |
| |                                             [CARD1]  [CARD2]  [CARD3]  [CARD4]  [CARD5]  [CARD6]    | |
| |                                             Daily    Train    Stable   Feed     Alert    Stock      | |
| |                                             Tasks    Prep     Living   Mgmt     Report   Inv        | |
| +-----------------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------+
```

### 3.1. Canvas Layout & Symmetry
- **Total Canvas Dimensions:** 1920 × 1080 px (Standard 16:9 widescreen presentation format).
- **Outer Frame Fill:** `#243c30` (Forest Green).
- **Inner Canvas Dimensions:** `x = 50`, `y = 105`, `width = 1820`, `height = 925`, `rx = 14`.
- **Top Auth Row Height:** 92 px (`y = 145` to `237`).
- **Decision Diamond:** Rhombus at `(685, 145)` to `(845, 237)`.
- **Access Denied Box:** Placed at `(680, 285)`, centered below the decision diamond.
- **Distribution Bus:** Drops vertically from dashboard center `(1010, 237)` down to `y = 385`, then spans horizontally from `x = 232` to `x = 1687`.
- **Card Grid:** 6 cards with width `265px`, height `565px`, starting at `y = 425`. Inter-card spacing is exactly `26px`, leaving `50px` padding on the left and right canvas edges.

### 3.2. Color Hierarchy
- **Header Role Badge:** Background `#1b2e25`, Border `#365344`, Active Indicator `#34d399`, Label `#d1fae5`.
- **Decision Diamond:** Background `#fffbeb`, Border `#f59e0b` (Amber-500), Text `#92400e`.
- **Authentication Error:** Background `#fef2f2`, Border `#fca5a5`, Text `#b91c1c` (Red-700).
- **Dashboard Hub:** Background `#f0fdf4`, Border `#86efac`, Accent `#15803d` (Green-600).
- **Module Accent Themes:**
  - Card 1 (Daily Tasks): `#2563eb` (Blue-600)
  - Card 2 (Training Prep): `#4f46e5` (Indigo-600)
  - Card 3 (Stable Activities): `#0d9488` (Teal-600)
  - Card 4 (Feeding Management): `#d97706` (Amber-600)
  - Card 5 (Incident Reporting): `#dc2626` (Red-600)
  - Card 6 (Inventory & Supplies): `#059669` (Emerald-600)

---

## 4. Deliverables Manifest & Integrity Proof

All deliverables are generated and stored in directory `stable_staff_flow_v5/`:

1. **`STABLE_STAFF_FLOW_V5.drawio`:**
   Fully editable, native mxGraph XML diagram file. Can be imported and modified directly in diagrams.net / draw.io desktop and web apps.
2. **`STABLE_STAFF_FLOW_V5.png`:**
   Ultra high-resolution (1920×1080) raster export rendered via headless browser engine. Ready for instant embedding into slide decks or documents.
3. **`STABLE_STAFF_FLOW_V5.svg`:**
   Clean, scalable vector graphic with inline SVG icons and zero XML syntax errors.
4. **`STABLE_STAFF_FLOW_V5_COMPARISON.png`:**
   Wide-format (3840×1200) side-by-side visual comparison demonstrating the direct evolution from the previous 4-box baseline to the redesigned 6-card Club Manager presentation layout.
5. **`STABLE_STAFF_FLOW_V5_REPORT.md`:**
   This comprehensive architectural, functional, and visual redesign report.

---

## 5. Slide Integration & Presentation Recommendations

- **Canva / PowerPoint Slide Placement:** The 16:9 aspect ratio matches modern 1080p slide dimensions exactly. For best visual impact, place this graphic as a full-bleed slide or inside a dark-themed slide deck.
- **Presentation Narrative:**
  1. Highlight the **single-entry role security** at the top (`STABLE_STAFF` credentials validation and secure dashboard dispatch).
  2. Explain that the Stable Staff account directly manages **six physical care pillars** on the ground.
  3. Walk through the workflow from left to right: starting with morning **Daily Tasks**, moving into **Training Prep**, managing **Living Quarters & Feeding**, handling emergency **Incidents**, and maintaining **Inventory**.
