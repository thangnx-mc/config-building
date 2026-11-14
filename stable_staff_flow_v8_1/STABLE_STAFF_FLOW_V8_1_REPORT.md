# STABLE STAFF BUSINESS FLOW DIAGRAM V8.1: EXPORT CANVAS BOUNDARY CORRECTION REPORT

**Task ID:** `RH-DRAWIO-05A`  
**Repository:** `thangnx-mc/config-building`  
**Branch:** `main`  
**Target Directory:** `stable_staff_flow_v8_1/`  
**Role:** `STABLE_STAFF` (Nhân viên chuồng / Field Operations Staff)  
**Baseline Reference:** Version V8 (`stable_staff_flow_v8/`, commit `568fe28`)

---

## 1. Executive Summary & Problem Resolution

During inspection of Stable Staff Flow Diagram V8, a discrepancy was identified between the declared canvas geometry ($1350 \times 500\text{ px}$ with $25\text{ px}$ outer margins) and the exported artifacts:
- In V8, the Draw.io CLI exporter (`draw.io.exe -x -b 0`) computed the tight bounding box of diagram vertices ($x = 25 \dots 1325, y = 36 \dots 460$), resulting in an auto-cropped export of $1305 \times 429\text{ px}$.
- This caused Card 1 and Card 6 to touch the left and right image boundaries, while the authentication row and cards nearly touched the top and bottom boundaries, removing the intended safe margins.

**TASK RH-DRAWIO-05A** resolves this issue directly at the Draw.io source level without modifying any approved layout, typography, icons, colors, or connector routing:
1. **Source-Level Canvas Page Element:** Introduced an explicit canvas page background element (`canvas_page`, $x = 0, y = 0, w = 1350, h = 500$, `strokeColor=none`, `fillColor=#FFFFFF`, `pointerEvents=0`) directly into `STABLE_STAFF_FLOW_V8_1.drawio`.
2. **Restored Canvas Boundaries:** The Draw.io export engine now honors the complete $1350 \times 500\text{ px}$ page boundaries, producing an exported PNG of $1352 \times 502\text{ px}$ and SVG with `viewBox="0 0 1351 501"`.
3. **Restored Safe Margins:**
   - **Left Margin:** Exactly $25\text{ px}$ before Card 1 ($x = 0 \dots 25$).
   - **Right Margin:** Exactly $25\text{ px}$ after Card 6 ($x = 1325 \dots 1350$).
   - **Top Margin:** Exactly $36\text{ px}$ above the authentication row ($y = 0 \dots 36$).
   - **Bottom Margin:** Exactly $40\text{ px}$ below the functional cards ($y = 460 \dots 500$).
4. **Zero Layout Drift:** The $+150\text{ px}$ rightward shift of the upper authentication sequence, the Dashboard connection at $x = 850$, and all six functional cards are preserved 100% bit-for-bit.

---

## 2. Quantitative Dimension Comparison (V8 vs. V8.1)

| Dimension / Metric | Version V8 (Auto-Cropped) | Version V8.1 (Corrected Bounds) | Delta / Engineering Resolution |
|---|---|---|---|
| **Exported PNG Dimensions** | 1305 × 429 px | **1352 × 502 px** | Full intended page canvas restored (+47 px W, +73 px H) |
| **Exported SVG ViewBox** | 0 0 1303 427 | **0 0 1351 501** | Full intended page canvas viewport restored |
| **Outer Left Margin (to Card 1)** | ~0 px (touching boundary) | **25 px** | **+25 px** safe margin restored |
| **Outer Right Margin (to Card 6)** | ~0 px (touching boundary) | **25 px** | **+25 px** safe margin restored |
| **Top Margin (to Auth Row)** | ~0 px (touching boundary) | **36 px** | **+36 px** safe margin restored |
| **Bottom Margin (to Cards)** | ~0 px (touching boundary) | **40 px** | **+40 px** safe margin restored |
| **Upper Auth Sequence Span** | x = 175 to 1175 px | **x = 175 to 1175 px** | 100% Unchanged (preserved approved rightward shift) |
| **Dashboard Stem Coordinate** | x = 850 px | **x = 850 px** | 100% Unchanged (preserved approved T-junction) |
| **Card Dimensions (W × H)** | 200 × 205 px | **200 × 205 px** | 100% Unchanged |
| **Six Modules Order & Colors** | 6 modules in 1 row | **6 modules in 1 row** | 100% Unchanged |
| **Draw.io Native Icons** | 10 vector SVG cells | **10 vector SVG cells** | 100% Unchanged (full source integrity) |

---

## 3. Technical Root Cause & Fix Details

### Root Cause in Draw.io CLI Exporter:
By default, `draw.io.exe -x -b 0` calculates the tight union of all vertex and edge bounding rectangles. When a Draw.io file contains only foreground shapes, even if `pageWidth="1350" pageHeight="500"` is specified in `<mxGraphModel>`, the exporter clips to the content bounding box if no shape spans the origin $(0, 0)$ to $(1350, 500)$.

### Solution Implemented in V8.1:
Added the underlying canvas bounding vertex:
```xml
<!-- Canvas Page Bounds: Guarantees 1350x500 export page with 25px horizontal and balanced vertical safe margins -->
<mxCell id="canvas_page" value="" style="strokeColor=none;fillColor=#FFFFFF;pointerEvents=0;" vertex="1" parent="1">
  <mxGeometry x="0" y="0" width="1350" height="500" as="geometry"/>
</mxCell>
```
Because `canvas_page` is an explicit, non-printing white vertex with geometry $(0, 0, 1350, 500)$, the CLI exporter defines the document bounds as exactly $1350 \times 500\text{ px}$. This guarantees that:
- Neither PNG nor SVG can be cropped.
- The safe margins are permanently locked into the Draw.io file itself, regardless of where or how the diagram is viewed or exported.

---

## 4. Deliverables Manifest & Status

All required deliverables are generated and verified in `stable_staff_flow_v8_1/`:

1. **`STABLE_STAFF_FLOW_V8_1.drawio`:** Complete native Draw.io XML source containing the explicit canvas page bounds and all embedded vector icons.
2. **`STABLE_STAFF_FLOW_V8_1.png`:** High-resolution presentation PNG exported directly from Draw.io ($1352 \times 502\text{ px}$) with clean $25\text{ px}$ side margins.
3. **`STABLE_STAFF_FLOW_V8_1.svg`:** Scalable vector graphic exported directly from Draw.io (`viewBox="0 0 1351 501"`).
4. **`STABLE_STAFF_FLOW_V8_1_COMPARISON.png`:** Comparative visual contrasting V8 (tightly cropped) with V8.1 (restored safe margins).
5. **`STABLE_STAFF_FLOW_V8_1_REPORT.md`:** This engineering report.
