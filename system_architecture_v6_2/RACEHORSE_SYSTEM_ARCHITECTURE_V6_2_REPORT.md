# RACEHORSE SYSTEM ARCHITECTURE DIAGRAM V6.2 — ENGINEERING REPORT

**Task ID:** RH-ARCH-08 (System Architecture Diagram V6.2: Third-Party Connector Simplification & Deploy Section)  
**Deliverable Directory:** `system_architecture_v6_2/`  
**Diagram Filenames:**  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_2.drawio` (Fully editable Draw.io XML with embedded SVG brand assets)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_2.png` (High-resolution presentation graphic, 1920×1080 16:9)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_2.svg` (Clean scalable vector graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_2_COMPARISON.png` (Multi-panel visual comparison: V6.1 vs V6.2)  
**Baseline Snapshot:** `501fd5cbbffeca49c951f78d033354ab1e9475b2` (V6.1 release on `main` branch)  
**Report Date:** March 2026  
**Status:** COMPLETE & VERIFIED  

---

## 1. Executive Summary & Objective

Task RH-ARCH-08 (V6.2) incorporates key architectural and visual refinements to the Racehorse System Architecture diagram following team presentation review of V6.1:

1. **Third-Party Connector Simplification:** In V6.1, four individual and group-specific connector lines (separate Cloudinary request/response and Payment request/response pairs) crossed between the Third Parties group and the Spring Boot Backend Server. In V6.2, these are streamlined into **exactly two overall integration connectors** (`request` solid `#222222` pointing up, `response` dashed `#555555` pointing down). This directly replicates the clean visual simplicity of the lecturer's benchmark architecture diagram (`page_08.png`).
2. **Introduction of the Deploy Section:** A dedicated container named **Deploy** is established below the Racehorse System / Backend Server area, introducing initial platform target placeholders:
   - **Vercel** (Frontend deployment platform)
   - **Supabase** (Provisional platform placeholder)
3. **Preservation of Approved Baseline:** The official Microsoft SQL Server Fluent "S"-cylinder brand logo (introduced in V6.1), the React Web App card, the Spring Boot Backend Server with Java 21 annotation, and all three third-party service identities (`Cloudinary`, `PayOS`, `VNPay`) remain intact with zero regressions.

---

## 2. Key Architecture Refinements

### 2.1. Third-Party Connector Simplification

| Attribute | V6.1 (Previous Baseline) | V6.2 (Streamlined Architecture) | Design Rationale |
| :--- | :--- | :--- | :--- |
| **Connector Count** | 4 lines (2 pairs) | **2 lines (1 pair)** | Eliminates visual clutter; adheres to benchmark layout |
| **Cloudinary Lines** | 2 dedicated lines (`x = 750, 810`) | Unified into overall connector pair | Prevents individual service line overload |
| **Payment Lines** | 2 dedicated lines (`x = 1070, 1170`) | Unified into overall connector pair | Simplifies multi-gateway architecture |
| **Request Connector** | Solid arrow (`#222222`) | Solid arrow (`#222222`, `x = 955`) | Points up to Third Parties boundary (`y = 290`) |
| **Response Connector** | Dashed arrow (`#555555`) | Dashed arrow (`#555555`, `x = 1015`) | Points down to Spring Boot Backend (`y = 470`) |
| **Service Cards** | Unboxed in Box 2 | Unboxed in Box 2 | Cloudinary, PayOS, VNPay retain full identity |

### 2.2. Deploy Container Design & Architectural Scope

The new **Deploy** container is positioned directly below the Racehorse System / Spring Boot Backend Server column:
- **Geometry:** `x = 730, y = 830, width = 510, height = 170` (perfectly aligned with the width of the Spring Boot Backend Server card above it).
- **Styling:** Monochrome border (`stroke="#222222" stroke-width="1.8" fill="#ffffff"`), matching container conventions across the diagram.
- **Label:** `Deploy` (`font-size="15" font-weight="700" fill="#111111"`), positioned at top-left (`x = 755, y = 860`).

```
+-------------------------------------------------------------+
|                        Deploy                               |
|                                                             |
|          ▲ Vercel                        ⚡ Supabase        |
|    (Frontend Platform)              (Provisional Target)   |
+-------------------------------------------------------------+
```

#### Architectural Scope & Limitations (Mandatory Clarification):
- **Vercel:** Confirmed as the team's selected frontend hosting platform for the React Web Application.
- **Supabase (Provisional Platform Placeholder):** Supabase is included strictly as an initial placeholder for ongoing deployment discussions.
- **Non-Claims & Boundaries:**
  - The diagram **does NOT claim** that Supabase replaces Microsoft SQL Server.
  - The diagram **does NOT claim** that Spring Boot Backend Server is hosted on or managed by Supabase.
  - No speculative hosting mappings, CI/CD pipelines, or deployment topology connectors are drawn. The container sits as a clean platform target section without unverified infrastructure assumptions.

---

## 3. Brand Asset Verification

| Component | Asset Type | Source & Verification | Visual Treatment |
| :--- | :--- | :--- | :--- |
| **Vercel** | Official Brand Triangle Mark | Vercel Trademark (`viewBox="0 0 512 512"`) | Solid Black (`#000000`), `56 × 49px`, centered with bold label |
| **Supabase** | Official Brand Lightning Mark | Supabase Official Design Repository (`viewBox="0 0 109 113"`) | Authentic emerald gradient (`#249361` to `#3ECF8E`), `52 × 54px` |
| **SQL Server** | Microsoft Fluent S-Cylinder | Microsoft Corporation (Preserved from V6.1) | Authentic Azure Fluent gradients (`#0078D4`, `#005BA1`), `68 × 68px` |
| **Spring Boot** | Official Spring Leaf Icon | VMware / Spring.io (Preserved from V3) | Spring Green (`#77BC1F`), `64 × 64px`, Java 21 annotation |
| **React** | Official Cyan Atom Symbol | Meta / React Foundation (Preserved from V3) | React Cyan (`#61DAFB`), `64 × 64px` |
| **PayOS** | Official PayOS Chameleon/Shield | PayOS Identity (Preserved from V5) | Brand Green (`#00a85e`), `56 × 56px` |
| **VNPay** | Official VNPay Dual V-Ribbon | VNPay Identity (Preserved from V5) | Brand Blue/Red (`#004a9c`, `#e50019`), `62 × 48px` |
| **Cloudinary** | Official Cloudinary Upload Mark | Cloudinary Identity (Preserved from V5) | Brand Blue (`#3448C5`), `56 × 56px` |

---

## 4. Visual Comparison: V6.1 vs V6.2

A side-by-side comparative rendering is compiled in `RACEHORSE_SYSTEM_ARCHITECTURE_V6_2_COMPARISON.png`:

| Evaluation Axis | Architecture V6.1 | Architecture V6.2 | Architectural Impact |
| :--- | :--- | :--- | :--- |
| **Third-Party Integrations** | 4 lines with independent Cloudinary & Payment corridors | 2 unified lines (`request` solid, `response` dashed) | Eliminates cluttered lines; matches lecturer reference |
| **Deployment Representation** | None (deployment was strictly omitted) | Dedicated `Deploy` box with Vercel & Supabase | Establishes deployment target awareness without over-specifying |
| **Grid Alignment** | Empty space below Spring Boot Backend Server | `Deploy` box aligns with Backend column (`width = 510`) | Balances lower canvas; creates visual column harmony |
| **Database Branding** | High-contrast official Microsoft Fluent logo | High-contrast official Microsoft Fluent logo | 100% preserved; no regression to faint legacy assets |

---

## 5. Verification Checklist & Quality Assurance

| Verification Item | Target Requirement | Verified Result | Status |
| :--- | :--- | :--- | :---: |
| **Third Parties Connectors** | Exactly two overall connectors (solid request, dashed response) | 1 solid arrow UP (`#222222`), 1 dashed arrow DOWN (`#555555`) | **PASS** |
| **No Individual Corridors** | Zero individual service connectors to Cloudinary or Payments | Consolidated into single central corridor at `x = 955, 1015` | **PASS** |
| **Deploy Container** | Placed below Racehorse System, centered under Backend Server | Positioned at `x = 730, y = 830, w = 510, h = 170`, 50px gap | **PASS** |
| **Vercel Icon & Label** | Authentic Vercel triangle mark and clean label | Official black triangle vector + bold text | **PASS** |
| **Supabase Icon & Label** | Authentic Supabase emerald lightning mark and clean label | Official emerald vector with gradient + bold text | **PASS** |
| **Neutral Deploy Semantics** | No unverified infrastructure flows or database replacements | Standalone container, no unverified lines or claims | **PASS** |
| **Preservation of Baseline** | React, Spring Boot, Java 21, SQL Server Fluent, 3 Third Parties | All coordinates, vectors, and typography preserved | **PASS** |
| **Export Formats** | High-res PNG (16:9, 1920×1080), vector SVG, editable Draw.io | All 3 formats rendered and validated | **PASS** |
| **Source Repository Safety** | `HORSE-PROJECT` must remain strictly READ-ONLY | Untouched, working tree clean on `develop` branch | **PASS** |
| **Historical Preservation** | V1 through V6.1 artifacts preserved unchanged | All previous version directories intact on `main` | **PASS** |
