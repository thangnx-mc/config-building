# RACEHORSE SYSTEM ARCHITECTURE DIAGRAM V6.3 — ENGINEERING REPORT

**Task ID:** RH-ARCH-09 (System Architecture Diagram V6.3: Expand Deploy Section with Render)  
**Deliverable Directory:** `system_architecture_v6_3/`  
**Diagram Filenames:**  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_3.drawio` (Fully editable Draw.io XML with embedded SVG brand assets)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_3.png` (High-resolution presentation graphic, 1920×1080 16:9)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_3.svg` (Clean scalable vector graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V6_3_COMPARISON.png` (Multi-panel visual comparison: V6.2 vs V6.3)  
**Baseline Snapshot:** `b815624cff41855360d046b4f48be1886725cd4f` (V6.2 release on `main` branch)  
**Report Date:** November 9, 2026  
**Status:** COMPLETE & VERIFIED  

---

## 1. Executive Summary & Objective

Task RH-ARCH-09 updates the approved Racehorse System Architecture Diagram V6.2 to create V6.3 by expanding the **Deploy** section to include **Render** as the planned Backend deployment platform.

The Deploy section now reflects three distinct cloud platform targets:
1. **Vercel** — Confirmed Frontend deployment platform (React Web App).
2. **Render** — Planned Backend deployment platform (Spring Boot / Java 21).
3. **Supabase** — Provisional platform placeholder (exact architectural responsibility not yet finalized).

All previously approved architectural elements, brand logos (including the official Microsoft SQL Server Fluent "S"-cylinder from V6.1), and minimal connector relationships (the unified two-line Third Parties corridor from V6.2) remain strictly preserved.

---

## 2. Deploy Section Expansion & Platform Semantics

### 2.1. Container Layout & Dimensions

The Deploy box width is expanded from `510px` (in V6.2) to `820px` (in V6.3) to comfortably accommodate three platforms in a single horizontal row while maintaining visual balance with the system components above it:

- **Position & Geometry:** `x = 575, y = 830, width = 820, height = 170` (centered at `x = 985`, directly below the `Spring Boot Backend Server` card).
- **Styling:** Monochrome border (`stroke="#222222" stroke-width="1.8" fill="#ffffff"`), matching container conventions across the diagram.
- **Container Title:** `Deploy` (`font-size="15" font-weight="700" fill="#111111"`), positioned at top-left (`x = 600, y = 860`).
- **Platform Distribution:**
  - **Vercel:** Centered at `x = 715` (left section, oriented toward Client Applications).
  - **Render:** Centered at `x = 985` (exact vertical center of Spring Boot Backend Server column).
  - **Supabase:** Centered at `x = 1255` (right section, oriented toward Database).
  - **Inter-Icon Spacing:** Exactly `270px` between adjacent platform centers; `140px` left and right container margins.
  - **Vertical Baseline:** All three labels are aligned at `y = 962` (`font-size="16" font-weight="700"`).

```
+--------------------------------------------------------------------------------+
|  Deploy                                                                        |
|                                                                                |
|          ▲ Vercel                   Render                 ⚡ Supabase         |
|     (Frontend Platform)        (Backend Platform)     (Provisional Target)     |
+--------------------------------------------------------------------------------+
```

### 2.2. Platform Roles & Decision Status

The diagram and report strictly distinguish between confirmed architectural decisions, planned platform targets, and provisional placeholders:

| Platform | Decision Status | Associated Component | Architectural Scope & Boundaries |
| :--- | :--- | :--- | :--- |
| **Vercel** | **Confirmed** | React Web App | Selected production hosting platform for the unified React Frontend client application. |
| **Render** | **Planned** | Spring Boot Backend Server (Java 21) | Planned deployment platform for the Spring Boot backend server. Render supports deploying Java applications through appropriate containerized/deployment workflows (e.g., Docker). No dedicated native Java runtime is implied, and no speculative Docker infrastructure box is added. |
| **Supabase** | **Provisional** | Under Evaluation | Maintained as an initial platform placeholder for ongoing deployment discussions. **Non-claims:** Supabase does NOT replace Microsoft SQL Server; SQL Server has NOT migrated to Supabase; Supabase is NOT assigned as the backend hosting platform. |

### 2.3. Connector Policy: No Premature Deployment Arrows

In accordance with architectural discipline, **no deployment connectors** are drawn between the application runtime containers and the Deploy box:
- No lines connect React Web App to Vercel.
- No lines connect Spring Boot Backend Server to Render.
- No lines connect SQL Server Database to Supabase.
- No connector lines connect the `Racehorse System` container boundary to `Deploy`.

**Rationale:** The Deploy section identifies target hosting platforms, not an approved deployment or networking topology. Omitting speculative infrastructure lines preserves presentation clarity and avoids implying unverified deployment boundaries or pipeline topologies.

---

## 3. Brand Asset Verification

| Component | Asset Type | Source & Verification | Visual Treatment |
| :--- | :--- | :--- | :--- |
| **Render** | Official Brand Curved Ribbon Mark | Render Official Assets (`viewBox="0 0 24 24"`) | Solid Black (`#000000`), `50 × 50px`, centered with bold label |
| **Vercel** | Official Brand Triangle Mark | Vercel Trademark (`viewBox="0 0 512 512"`) | Solid Black (`#000000`), `56 × 49px`, centered with bold label |
| **Supabase** | Official Brand Lightning Mark | Supabase Official Design Repository (`viewBox="0 0 109 113"`) | Authentic emerald gradient (`#249361` to `#3ECF8E`), `52 × 54px` |
| **SQL Server** | Microsoft Fluent S-Cylinder | Microsoft Corporation (Preserved from V6.1) | Authentic Azure Fluent gradients (`#0078D4`, `#005BA1`), `68 × 68px` |
| **Spring Boot** | Official Spring Leaf Icon | VMware / Spring.io (Preserved from V3) | Spring Green (`#77BC1F`), `64 × 64px`, Java 21 annotation |
| **React** | Official Cyan Atom Symbol | Meta / React Foundation (Preserved from V3) | React Cyan (`#61DAFB`), `64 × 64px` |
| **PayOS** | Official PayOS Chameleon/Shield | PayOS Identity (Preserved from V5) | Brand Green (`#00a85e`), `56 × 56px` |
| **VNPay** | Official VNPay Dual V-Ribbon | VNPay Identity (Preserved from V5) | Brand Blue/Red (`#004a9c`, `#e50019`), `62 × 48px` |
| **Cloudinary** | Official Cloudinary Upload Mark | Cloudinary Identity (Preserved from V5) | Brand Blue (`#3448C5`), `56 × 56px` |

---

## 4. Visual Comparison: V6.2 vs V6.3

A side-by-side comparative rendering is compiled in `RACEHORSE_SYSTEM_ARCHITECTURE_V6_3_COMPARISON.png`:

| Evaluation Axis | Architecture V6.2 | Architecture V6.3 | Architectural Impact |
| :--- | :--- | :--- | :--- |
| **Deploy Platforms** | 2 platforms (Vercel, Supabase) | **3 platforms (Vercel, Render, Supabase)** | Incorporates planned backend deployment target |
| **Deploy Box Width** | `510px` (`x = 730` to `1240`) | **`820px` (`x = 575` to `1395`)** | Symmetrically accommodates 3 platforms without crowding |
| **Backend Alignment** | Centered under Backend Server | Render centered at `x = 985` | Directly anchors Spring Boot Backend Server column |
| **Third-Party Integrations** | 2 unified connectors (`request` / `response`) | 2 unified connectors (`request` / `response`) | 100% preserved; no regression to separate corridors |
| **Database Identity** | Official Microsoft SQL Server Fluent logo | Official Microsoft SQL Server Fluent logo | 100% preserved; high-contrast presentation quality |

---

## 5. Verification Checklist & Quality Assurance

| Verification Item | Target Requirement | Verified Result | Status |
| :--- | :--- | :--- | :---: |
| **Deploy Box Placement** | Located below Racehorse System, centered under Backend Server | Positioned at `x = 575, y = 830, w = 820, h = 170` (center `985`) | **PASS** |
| **Three Platforms Present** | Vercel, Render, and Supabase horizontally in one row | Arranged in single row: Vercel (`715`), Render (`985`), Supabase (`1255`) | **PASS** |
| **Render Official Logo** | Recognizable official Render mark with clear label | Official black ribbon vector (`24×24` viewBox, `50×50px`) + bold label | **PASS** |
| **Platform Semantics** | Clear distinction between confirmed, planned, and provisional | Vercel (Frontend), Render (Planned Backend), Supabase (Provisional) | **PASS** |
| **No Premature Claims** | No claims that Supabase replaces SQL Server or hosts Backend | Explicitly documented; no SQL Server replacement or hosting mappings | **PASS** |
| **No Unconfirmed Tech** | No unverified Docker, Kubernetes, or CI/CD boxes added | Zero invented infrastructure components or speculative boxes | **PASS** |
| **No Deployment Connectors** | Deploy container remains visually independent without arrows | No speculative lines connecting components to Deploy platforms | **PASS** |
| **Third-Party Connectors** | Exactly two overall connectors (solid request, dashed response) | 1 solid arrow UP (`#222222`), 1 dashed arrow DOWN (`#555555`) | **PASS** |
| **Baseline Preservation** | React, Spring Boot, Java 21, SQL Server Fluent, 3 Third Parties | All coordinates, vectors, and typography preserved | **PASS** |
| **Export Formats** | High-res PNG (16:9, 1920×1080), vector SVG, editable Draw.io | All 3 formats rendered and validated | **PASS** |
| **Source Repository Safety** | `HORSE-PROJECT` must remain strictly READ-ONLY | Untouched, working tree clean on `develop` branch | **PASS** |
| **Historical Preservation** | V1 through V6.2 artifacts preserved unchanged | All previous version directories intact on `main` | **PASS** |
