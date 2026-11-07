# STABLE STAFF SIMPLIFIED ROLE-BASED BUSINESS FLOWCHART REPORT (VERSION V5)

**Task ID:** `RH-DRAWIO-06`  
**Target Account Role:** `STABLE_STAFF` (Stable Staff / Groom / Field Operator)  
**Language Standard:** 100% English (All diagram nodes, decisions, labels, and text summaries)  
**Source Code Baseline:** `develop` — snapshot commit `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e` (Strictly Read-Only)  
**Foundation Artifacts:**
- Discovery Report: [`stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md`](file:///C:/DEV/config-building/stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md)
- Flowchart V3: [`stable_role_drawio_v3/STABLE_STAFF_FLOW_V3.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3.drawio) & [`STABLE_STAFF_FLOW_V3.png`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3.png)
- Flowchart V4: [`stable_role_drawio_v4/STABLE_STAFF_FLOW_V4.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v4/STABLE_STAFF_FLOW_V4.drawio) & [`STABLE_STAFF_FLOW_V4.png`](file:///C:/DEV/config-building/stable_role_drawio_v4/STABLE_STAFF_FLOW_V4.png)  
**New Deliverables (Directory `stable_role_drawio_v5/`):**
- Editable Draw.io Diagram: [`STABLE_STAFF_FLOW_V5.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.drawio)
- High-Resolution Exported PNG: [`STABLE_STAFF_FLOW_V5.png`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.png)
- Visual Comparison (V4 vs V5): [`STABLE_STAFF_FLOW_V5_COMPARISON.png`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_COMPARISON.png)
- Comprehensive Engineering Report: [`STABLE_STAFF_FLOW_V5_REPORT.md`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_REPORT.md)

---

## 1. EXECUTIVE SUMMARY & REDESIGN RATIONALE (V4 → V5)

### 1.1. Why Version V4 Was Rejected
Version V4 successfully established standard flowchart notation and introduced end-to-end operational workflows. However, the evaluation team determined that V4 was unsuitable for the presentation format (Canva slide integration):
1. **Excessive Visual Density:** V4 contained over 28 individual process boxes, 14 decision diamonds, and 7 repeated `START`/`END` terminator pairs.
2. **Microscopic Sub-Workflows:** Representing every sub-process (e.g., horse intake, stall movement, meal checklist, incident triage, inventory replenishment) as full flowchart trees resulted in cramped text and visual clutter.
3. **Loss of High-Level Executive Focus:** The primary objective of the slide is to communicate *account role capabilities* ("What does Stable Staff access, and what are their core responsibilities?"), rather than functioning as an exhaustive standard operating procedure (SOP) manual.

### 1.2. The V5 Design Breakthrough: Simplified Role-Based Business Flow
Version V5 resolves this conflict by implementing a balanced, highly legible architecture:
- **Top Section (Access & Authentication):** Retains conventional business flowchart notation (`START` → `Login` → `Validate Account` → `Valid` / `Invalid` branches).
- **Hub & Distribution Bus:** `Dashboard` serves as the central operational hub, connecting independently to 4 functional pillars via an orthogonal 90-degree distribution bus.
- **Main Section (4 Functional Area Cards):** Instead of drawn-out sub-flows, each area is represented as a clean, unified container displaying its bold title and exactly **four concise plain-text summary lines**.
- **Zero Decorative Noise:** Strictly no individual sub-process boxes, no repeated `START`/`END` nodes, no extra internal decision diamonds, no bullet points, and no numbering.

---

## 2. STANDARD FLOWCHART NOTATION & GEOMETRY MAPPING

Version V5 adheres strictly to standard ANSI/ISO flowchart symbols in the top access flow, combined with structured informational cards for functional responsibilities:

| Symbol / Shape | Geometry Element | Implementation in V5 | Exact Role / Meaning |
|---|---|---|---|
| **Oval (Terminator)** | `ellipse` | `START`, `END` (Invalid), `Session End` | Boundary states of the user session. |
| **Rectangle (Process)** | `rect` (rounded `rx=6`) | `Login`, `Access Denied`, `Logout` | Single operational access steps. |
| **Diamond (Decision)** | `polygon` (rhombus) | `Validate Account` | Account validation check branching to `Valid` (Dashboard) or `Invalid` (Access Denied). |
| **Highlighted Box** | `rect` (stroke `2.4px`) | `Dashboard (Field Operations Hub)` | Central dispatch point for the authenticated staff account. |
| **Orthogonal Vector** | `path` / `line` | Orthogonal 90° lines with solid block arrows | Directional flow and clean distribution bus without diagonals or line crossings. |
| **Functional Cards** | `rect` (`rx=10`, `w=400`, `h=370`) | 4 Functional Area Columns | Encapsulated operational pillars containing 4 plain-text summary lines each. |

---

## 3. TOP SECTION: ACCOUNT ACCESS & AUTHENTICATION FLOW

The top flow communicates the exact access lifecycle of a `STABLE_STAFF` user:

```
[ START ] ──> [ Login ] ──> < Validate Account >
                                  │           │
                          Invalid │           │ Valid
                                  ▼           ▼
                         [ Access Denied ]  [ Dashboard ] ──> [ Logout ] ──> ( Session End )
                                  │                │
                                  ▼                ▼
                               ( END )     [ Distribution Bus ]
                                                   │
                ┌──────────────────┬───────────────┴──────────────┬──────────────────┐
                ▼                  ▼                              ▼                  ▼
     [ Daily Tasks & Training ] [ Stable Management ] [ Feeding Management ] [ Incidents & Inventory ]
```

### 3.1. Valid Path (`Validate Account` → `Valid` → `Dashboard`)
- The user logs in with credentials via the system login screen (`/login`).
- Spring Security checks the JWT token and database permissions (`dbo.role_permissions`).
- If granted role is `STABLE_STAFF` and permissions include `PERM_STABLE_CARE_VIEW`, user is directed to the `Dashboard` (field operations hub).

### 3.2. Invalid Path (`Validate Account` → `Invalid` → `Access Denied` → `END`)
- If the account lacks `STABLE_STAFF` authority or authentication fails, the flow routes upwards to `Access Denied`.
- The session terminates immediately at `END` without granting dashboard access.

### 3.3. Independent Logout Path (`Dashboard` → `Logout` → `Session End`)
- `Logout` branches horizontally from `Dashboard` as an independent exit action.
- It is not depicted as an obligatory next step in daily work, allowing continuous operation across the 4 functional areas.

---

## 4. MAIN SECTION: FOUR FUNCTIONAL OPERATIONAL PILLARS

From `Dashboard`, the flow drops through a central vertical trunk onto a horizontal distribution spine (`y = 320`) and branches into exactly **four independent functional areas**.

The four areas are arranged side-by-side with equal dimensions (`w = 400px`, `h = 370px`) and symmetrical column spacing across the 1920 × 1080 canvas.

### 4.1. Pillar 1: Daily Tasks & Training
- **Container Title:** `Daily Tasks & Training`
- **Source Feature IDs:** `SS-FEAT-01`, `SS-FEAT-02`, `SS-FEAT-P2`
- **Source Code Locations:** `StableCarePage.jsx` (`CareTasksView`, `TrainingPreparationView`), `api.js` (`getCareTasks`, `completeCareTask`, `markTrainingReady`).
- **Summary Lines (Plain Text):**
  1. `Review daily and assigned tasks.`
  2. `Check special or recovery instructions, if assigned.`
  3. `Prepare horses and equipment for training.`
  4. `Confirm readiness and mark assigned tasks as completed.`

### 4.2. Pillar 2: Stable Management
- **Container Title:** `Stable Management`
- **Source Feature IDs:** `SS-FEAT-03`, `SS-FEAT-04`, `SS-FEAT-05`
- **Source Code Locations:** `StableCarePage.jsx` (`StablesView`, `HorseIntakeModal`), `api.js` (`getIntakeHorses`, `confirmIntake`, `moveHorseStall`).
- **Summary Lines (Plain Text):**
  1. `Review stable layout and horse locations.`
  2. `Receive horse intake and check veterinary clearance.`
  3. `IF not cleared, hold intake and await veterinary decision.`
  4. `Check stall availability and safety before assigning or moving horses.`

### 4.3. Pillar 3: Feeding Management
- **Container Title:** `Feeding Management`
- **Source Feature IDs:** `SS-FEAT-06`, `SS-FEAT-07`
- **Source Code Locations:** `StableCarePage.jsx` (`NutritionView`, `ApplyFeedingTemplateModal`), `api.js` (`getFeedingMatrix`, `recordMealAttendance`, `applyFeedingTemplate`).
- **Summary Lines (Plain Text):**
  1. `Review the approved daily feeding plan.`
  2. `Prepare the correct ration for each horse.`
  3. `IF a custom diet applies, follow the approved feeding instructions.`
  4. `Feed horses and record meal attendance.`

### 4.4. Pillar 4: Incidents & Inventory
- **Container Title:** `Incidents & Inventory`
- **Source Feature IDs:** `SS-FEAT-08`, `SS-FEAT-09`, `SS-FEAT-10`, `SS-FEAT-P3`
- **Source Code Locations:** `StableCarePage.jsx` (`IncidentsView`, `InventoryView`), `api.js` (`reportIncident`, `getInventoryItems`, `requestReplenishment`).
- **Summary Lines (Plain Text):**
  1. `Report abnormal conditions and incidents.`
  2. `IF urgent, notify the relevant veterinarian and trainer.`
  3. `Track incident progress and update its resolution status.`
  4. `Check stock and request replenishment IF below the minimum level.`

---

## 5. EXTERNAL ROLES AND CONDITIONAL BUSINESS LOGIC

In accordance with Section 5 of Task RH-DRAWIO-06, external actors do not appear as separate flowchart boxes or actors on the main diagram. Instead, all external-role conditions and handoffs are embedded as clear `IF ...` statements within the plain-text lines:

1. **Veterinary Clearance (`Stable Management` — Line 3):**
   - *Rule:* Horse intake cannot proceed to stall allocation without verified clinical screening from `VETERINARIAN`.
   - *Expression in V5:* `IF not cleared, hold intake and await veterinary decision.`
2. **Urgent Incident Notification (`Incidents & Inventory` — Line 2):**
   - *Rule:* Immediate multi-role alert (<30s) dispatched to `VETERINARIAN` and `HEAD_TRAINER` for critical/urgent health anomalies.
   - *Expression in V5:* `IF urgent, notify the relevant veterinarian and trainer.`
3. **Stock Replenishment Threshold (`Incidents & Inventory` — Line 4):**
   - *Rule:* Replenishment proposals triggered when stock reaches safety minimum, awaiting `CLUB_MANAGER` approval.
   - *Expression in V5:* `Check stock and request replenishment IF below the minimum level.`
4. **Special Nutrition Regimens (`Feeding Management` — Line 3):**
   - *Rule:* Custom dietary instructions created by `VETERINARIAN` supersede standard feeding templates.
   - *Expression in V5:* `IF a custom diet applies, follow the approved feeding instructions.`

---

## 6. COMPARISON MATRIX: EVOLUTION OF STABLE STAFF DIAGRAMS

| Criteria | V1 (Discovery Arch) | V2 (Monochrome Cards) | V3 (Standard Flowchart) | V4 (Detailed Sub-Flows) | V5 (Simplified Business Flow) |
|---|---|---|---|---|---|
| **Visual Philosophy** | Multi-color 6-pillar infographic | Dark-border 4-card container | Conventional flowchart | 7 complete sub-workflow trees | Balanced role-based business flow |
| **Complexity** | 18 feature boxes + routes | 4 cards + technical routes | 4 high-level boxes | 28 process boxes + 14 diamonds | 4 clean cards + standard access flow |
| **Sub-Workflows** | None (static groups) | None (static lists) | None (abstract destinations) | Highly detailed (cramped) | **Zero sub-flows (concise plain text)** |
| **Language** | Vietnamese | Vietnamese | Vietnamese | 100% English | **100% English** |
| **Symbols Used** | Containers, pills, icons | Cards, banners, legend | Oval, Rect, Diamond | Repeated Oval, Rect, Diamond | **Oval, Rect, Diamond, Orthogonal arrows** |
| **Lines per Area** | Variable (2–4 pills) | Variable (3–4 bullets) | 1 label per box | 3–6 process nodes per flow | **Exactly 4 plain-text lines per area** |
| **Bullets / Numbers** | Present | Present | None | Present | **Strictly None (Clean line breaks)** |
| **Presentation Fit** | Failed (over-decorated) | Rejected (infographic-like) | Incomplete (no workflows) | Rejected (too dense for slide) | **Fully Approved for Canva Slide** |

---

## 7. QUALITY ASSURANCE & VERIFICATION CHECKLIST

| Verification Item | Specification Requirement | Implemented Status | Verification Evidence |
|---|---|---|---|
| **Area Count** | Exactly 4 functional areas | `PASS` | Columns 1–4: Daily Tasks, Stable, Feeding, Incidents & Inventory. |
| **Line Count** | Max 4 lines per area | `PASS` | Exactly 4 plain-text lines in each of the 4 areas. |
| **No Process Boxes** | No boxes around text lines | `PASS` | Text lines are rendered as plain text paragraphs within the area container. |
| **No Repeated Terminators** | No START/END inside areas | `PASS` | `START`/`END` appear only in the top account access flow. |
| **No Internal Diamonds** | No decision diamonds inside areas | `PASS` | Decision diamond appears only at `Validate Account`. |
| **No Bullets / Numbers** | Simple line breaks only | `PASS` | Zero bullet symbols (`•`, `-`) or numbers (`1.`, `2.`) in description lines. |
| **100% English** | Zero Vietnamese labels | `PASS` | All nodes, titles, conditions, and connector labels are in English. |
| **Orthogonal Routing** | 90° angles, zero crossings | `PASS` | Top flow and distribution bus use pure horizontal/vertical segments. |
| **Aspect Ratio & Export** | 1920 × 1080 (16:9) | `PASS` | PNG exported at exact 1920 × 1080 resolution via Edge Playwright. |
| **Editable Draw.io** | Valid XML diagrams.net format | `PASS` | `STABLE_STAFF_FLOW_V5.drawio` with complete geometric and style tags. |
| **Comparison Deliverable** | Side-by-side V4 vs V5 image | `PASS` | `STABLE_STAFF_FLOW_V5_COMPARISON.png` generated and verified. |
| **Read-Only Codebase** | Source code untouched | `PASS` | `HORSE-PROJECT` working tree remains clean and unmodified. |

---

## 8. DELIVERABLE ARTIFACT LOCATIONS

All Version V5 artifacts are safely stored within the `config-building` repository under directory `stable_role_drawio_v5/`:

1. **Draw.io File:** [`stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.drawio)
2. **Exported PNG:** [`stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.png`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5.png)
3. **Comparison PNG:** [`stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_COMPARISON.png`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_COMPARISON.png)
4. **Engineering Report:** [`stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_REPORT.md`](file:///C:/DEV/config-building/stable_role_drawio_v5/STABLE_STAFF_FLOW_V5_REPORT.md)
