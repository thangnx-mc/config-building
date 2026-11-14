# STABLE STAFF BUSINESS FLOW DIAGRAM V8: AUTHENTICATION ALIGNMENT & CANVAS OPTIMIZATION REPORT

**Task ID:** `RH-DRAWIO-05`  
**Repository:** `thangnx-mc/config-building`  
**Branch:** `main`  
**Target Directory:** `stable_staff_flow_v8/`  
**Role:** `STABLE_STAFF` (Nhân viên chuồng / Field Operations Staff)  
**Baseline Reference:** Version V7 (`stable_staff_flow_v7/`, commit `ac5c4fe`)

---

## 1. Executive Summary & Design Objectives

Following user and team review of Stable Staff Flow Diagram V7, two primary layout refinements were requested:
1. **Upper Authentication Workflow Balance (Change A & B):** In V7, the upper authentication sequence (`Stable staff` → `Enter credentials` → `Decision Diamond` → `Dashboard` → `Logout`) was skewed significantly to the left ($x = 25 \dots 1025$), leaving an empty $375\text{ px}$ void above the rightmost modules (`Incident Reporting` and `Inventory & Supplies`). The entire upper authentication row has been shifted $+150\text{ px}$ to the right ($x = 175 \dots 1175$), establishing exact symmetrical $150\text{ px}$ visual insets from both outer ends of the six-card row.
2. **Dashboard Connector & Bus Adaptation (Change B):** The user explicitly approved moving the Dashboard rightward ($x = 755 \dots 945$, center $cx = 850$). The downward vertical branching connector now drops directly from the Dashboard bottom center at $x = 850$ down to $y = 220$, connecting into the horizontal branching bus. The horizontal bus distributes across all six functional modules ($x = 125 \dots 1225$) with zero crossings.
3. **Canvas Space Optimization & Padding Reduction (Change C):** The outer left margin before Card 1 and the outer right margin after Card 6 have been tightened from $50\text{ px}$ down to $25\text{ px}$ (a 50% margin reduction), bringing the canvas boundaries closer to the diagram content without clipping borders or drop shadows.
4. **Draw.io Source Integrity (Change E):** Every icon visible in the PNG and SVG exports is natively embedded inside `STABLE_STAFF_FLOW_V8.drawio` as an independent, editable `mxCell` using URL-encoded SVG vector data URIs. Both `STABLE_STAFF_FLOW_V8.png` and `STABLE_STAFF_FLOW_V8.svg` are exported directly from the final Draw.io source via the official Draw.io desktop CLI engine (`draw.io.exe`).

---

## 2. Quantitative Dimension Comparison (V7 vs. V8)

| Metric / Dimension | Version V7 (Baseline) | Version V8 (Refined) | Delta / Engineering Change |
|---|---|---|---|
| **Canvas Dimensions (W × H)** | 1400 × 500 px | **1350 × 500 px** | Width: −50 px (−3.6%), compact whitespace |
| **Outer Canvas Margins (L / R)** | 50 px left / 50 px right | **25 px left / 25 px right** | −50% lateral padding; content brought to edges |
| **Upper Auth Sequence Span** | x = 25 to 1025 px (left-skewed) | **x = 175 to 1175 px (centered)** | Shifted **+150 px rightward** |
| **Upper Row Outer Insets** | 0 px left (flush) / 375 px right (void) | **150 px left / 150 px right** | **100% Symmetrical balance** above card row |
| **Dashboard Card Position** | x = 605..795 (cx = 700) | **x = 755..945 (cx = 850)** | Shifted **+150 px** with auth sequence |
| **Dashboard Stem Drop Coordinate** | x = 700 px (at card midpoint) | **x = 850 px (aligned with Dashboard)** | Direct orthogonal T-junction to bus bar |
| **Access Denied Position** | x = 405..565 (cx = 485) | **x = 555..715 (cx = 635)** | Kept directly below Decision Diamond |
| **Branching Bus Bar Span** | x = 150 to 1250 px | **x = 125 to 1225 px** | Connects all 6 module centers (cx: 125..1225) |
| **Card Dimensions (W × H)** | 200 × 205 px | **200 × 205 px** | 100% Preserved sturdy near-square ratio |
| **Functional Module Sequence** | 6 cards in 1 row | **6 cards in 1 row** | 100% Preserved order and verified features |
| **Draw.io Native Icon Cells** | Text-only XML | **10 Native SVG Vector Cells** | 100% Draw.io source integrity resolved |

---

## 3. Upper Authentication Workflow Geometry

The complete six-node authentication sequence preserves its verified business logic while achieving balanced horizontal alignment:

```
[Card 1 Left: x=25]                                                                               [Card 6 Right: x=1325]
      │                                                                                                     │
      │◄─────── 150px Inset ──────►[Start: x=175]                          [End: x=1175]◄──── 150px Inset ──►│
      │                                                                                                     │
      ▼                                                                                                     ▼
    ┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
    │  Stable staff │────►│ Enter username│────►│  Valid login  │─yes►│Open the staff │─end►│    Log out    │
    │   (x=175..305)│     │ & pass (355)  │     │  with? (565)  │     │dashboard (755)│     │(x=1015..1175) │
    └───────────────┘     └───────────────┘     └───────┬───────┘     └───────┬───────┘     └───────────────┘
                                                        │ [NO]                │ (Stem drops at x=850)
                                                        ▼                     │
                                                ┌───────────────┐             │
                                                │ Access denied │             │
                                                │ (x=555..715)  │             │
                                                └───────────────┘             ▼
──────────────────────────────────────────────────────────────────────┬─────────────────────────────────────── (Bus: y=220)
       │                    │                    │                    │                    │                    │
       ▼ (cx=125)           ▼ (cx=345)           ▼ (cx=565)           ▼ (cx=785)           ▼ (cx=1005)          ▼ (cx=1225)
   [ Daily Tasks ]     [ Training Prep ]   [ Stable Quarters ]  [ Feed Management ]   [ Alert Reporting ]  [ Inventory & Stock ]
```

- **Node 1 (Stable staff):** $x = 175 \dots 305, y = 36 \dots 118$. Features green user avatar icon.
- **Node 2 (Enter credentials):** $x = 355 \dots 515, y = 36 \dots 118$. Features green padlock icon.
- **Node 3 (Valid login with):** $x = 565 \dots 705, y = 36 \dots 118$. Amber rhombus.
- **Node 4 (Access denied):** $x = 555 \dots 715, y = 152 \dots 200$. Centered directly beneath Decision Diamond ($cx = 635$).
- **Node 5 (Open staff dashboard):** $x = 755 \dots 945, y = 36 \dots 118$. Features green checkmark badge icon.
- **Node 6 (Log out):** $x = 1015 \dots 1175, y = 36 \dots 118$. Features green padlock icon.

---

## 4. Connector Routing & Distribution Topology

- **Authentication Path:** Clean horizontal arrows between nodes with $50\text{ px}$ spacing.
  - Decision diamond to Dashboard: arrow labeled `yes` with white label background.
  - Decision diamond to Access Denied: downward arrow labeled `NO` with white label background.
  - Dashboard to Logout: arrow labeled `Session end` with white label background.
- **Dashboard Bus Stem:** Drops from bottom center of Dashboard at $(850, 118)$ down to $(850, 220)$.
- **Horizontal Distribution Bar:** Extends from $x = 125$ to $x = 1225$ at $y = 220$. Clear line of sight beneath Access Denied ($y = 200$, leaving $20\text{ px}$ vertical clearance).
- **Six Module Drops:** Orthogonal drop lines from $(cx, 220)$ down to $(cx, 255)$, terminating in solid arrowheads at each card's upper center ($cx \in \{125, 345, 565, 785, 1005, 1225\}$).

---

## 5. Draw.io Source Integrity Resolution

To fulfill Requirement E, the Draw.io XML (`STABLE_STAFF_FLOW_V8.drawio`) embeds all vector elements directly:
1. **Four Authentication Icons:**
   - `icon_auth_1`: User avatar silhouette (`#15803D`)
   - `icon_auth_2`: Padlock credentials glyph (`#15803D`)
   - `icon_auth_dashboard`: Circular checkmark badge (`#15803D` / `#FFFFFF`)
   - `icon_auth_logout`: Padlock revocation glyph (`#15803D`)
2. **Six Module Circle Backgrounds & Theme Glyphs:**
   - `icon_c1`: Clipboard checklist (`#2563EB`) in `#EFF6FF` / `#BFDBFE` circle
   - `icon_c2`: Calendar & clock (`#4F46E5`) in `#EEF2FF` / `#C7D2FE` circle
   - `icon_c3`: Stable barn (`#0D9488`) in `#F0FDFA` / `#99F6E4` circle
   - `icon_c4`: Feeding bowl & grain (`#D97706`) in `#FFFBEB` / `#FDE68A` circle
   - `icon_c5`: Warning alert triangle (`#DC2626`) in `#FEF2F2` / `#FECACA` circle
   - `icon_c6`: 3D warehouse package (`#059669`) in `#ECFDF5` / `#A7F3D0` circle
3. **Official CLI Export:**
   - Both `STABLE_STAFF_FLOW_V8.png` and `STABLE_STAFF_FLOW_V8.svg` were generated directly using `C:\Program Files\draw.io\draw.io.exe -x` to guarantee 100% visual parity between the XML source and the exported assets.

---

## 6. Deliverables Manifest & Status

All requested artifacts are located in `stable_staff_flow_v8/`:

1. **`STABLE_STAFF_FLOW_V8.drawio`:** Complete native Draw.io XML source containing all nodes, connectors, and embedded vector icons.
2. **`STABLE_STAFF_FLOW_V8.png`:** High-resolution presentation PNG exported directly from Draw.io.
3. **`STABLE_STAFF_FLOW_V8.svg`:** Scalable vector graphic exported directly from Draw.io.
4. **`STABLE_STAFF_FLOW_V8_COMPARISON.png`:** Side-by-side comparative visual demonstrating the $+150\text{ px}$ upper row shift and the tightened $25\text{ px}$ canvas margins.
5. **`STABLE_STAFF_FLOW_V8_REPORT.md`:** This comprehensive engineering and verification documentation.
