# RACEHORSE SYSTEM ARCHITECTURE DIAGRAM V3 — ENGINEERING REPORT
**Task ID:** RH-ARCH-03 (Racehorse System Architecture V3: Exact Lecturer Reference Replication)  
**Deliverable Directory:** `system_architecture_v3/`  
**Diagram Filenames:**  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V3.drawio` (Fully editable Draw.io XML)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V3.png` (High-resolution presentation graphic, 1920x1080 16:9)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V3.svg` (Scalable vector graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V3_COMPARISON.png` (3-panel comparison: Lecturer Reference vs V2 vs V3)  
**Source Baseline Snapshot:** `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e` (`develop` branch in `C:\DEV\RACE HORSE\HORSE-PROJECT`)  
**Report Date:** March 2026  
**Status:** COMPLETE & VERIFIED  

---

## 1. Executive Summary & Design Redirection

The team officially transitioned from the dense, multi-card infographic style of V2 to an **exact visual replication** of the course lecturer's reference diagram (`presentation_review_assets/sample/sample_pages/page_08.png`).

V3 discards all decorative containers, colored section themes, nested business module cards, and long textual descriptions. It strictly reproduces the visual structure, layout simplicity, whitespace, and communication notation of the lecturer's specification:
- **Exactly THREE Main Containers:**
  1. `Box 1 — Client Applications` (Left vertical container)
  2. `Box 2 — Third parties` (Top horizontal container)
  3. `Box 3 — Racehorse System` (Center/right primary system container)
- **Minimalist "Logo + Name" Component Paradigm:** Every application component contains only its official technology logo and component name.
- **Pure White Background & Restrained Monochrome Borders:** Thin black/dark-gray container borders (`#222222`), eliminating background tints and decorative shadows.
- **Directional Communication Notation:** Orthogonal thin solid lines for requests/webhooks and dashed lines for responses, matching the exact visual language of the reference.

---

## 2. Three Main Containers Breakdown

### 2.1. Box 1 — Client Applications (Left)
- **Position & Role:** Left column container (`x: 80, y: 180, w: 300, h: 800`).
- **Verified Software Reality:** Racehorse has exactly one unified Single-Page Application (`racehorse-club-frontend`, React 19 + Vite 8). In compliance with architectural accuracy and the reference specification, the five role-based views are not drawn as separate applications.
- **Visual Component:**
  - Simple white rectangular card (`x: 125, y: 455, w: 210, h: 170`).
  - Official React logo (cyan atom).
  - Component Name: **React Web App**.

### 2.2. Box 2 — Third parties (Top)
- **Position & Role:** Top horizontal container (`x: 460, y: 50, w: 1380, h: 180`).
- **Container Label:** `Third parties` (positioned at bottom right inside the box, precisely matching `page_08.png`).
- **Verified Software Reality:** Exactly two external SaaS services are actively integrated with the backend codebase:
  1. **Cloudinary:** Cloud media storage for horse photos and veterinary evidence (`com.cloudinary:cloudinary-http5:2.4.0`).
  2. **PayOS:** Payment gateway for digital wallet top-up and instant VietQR banking transfers. VietQR is integrated through PayOS and is not an independent API provider.
- **Visual Components:**
  - Card 1: Official Cloudinary logo + **Cloudinary** (`w: 210, h: 125`).
  - Card 2: Official PayOS logo + **PayOS** (`w: 210, h: 125`).

### 2.3. Box 3 — Racehorse System (Center / Right)
- **Position & Role:** Large center/right internal system container (`x: 460, y: 340, w: 1380, h: 640`).
- **Container Label:** `Racehorse System` (positioned at top left inside the box, matching the internal system boundary in `page_08.png`).
- **Verified Software Reality:** Grouping of verified internal application runtime components:
  1. **Spring Boot Backend Server:** Central modular monolith (`com.racehorse.*`, Spring Boot 4.1.1).
  2. **SQL Server Database:** Primary relational database engine (Microsoft SQL Server).
  3. **Java Runtime Environment:** Underlying JVM runtime (Java 21 LTS).
- **Visual Components:**
  - Card 1 (Center): Official Spring Boot logo + **Spring Boot Backend Server** (`w: 520, h: 190`).
  - Card 2 (Right): Official SQL Server logo + **SQL Server Database** (`w: 250, h: 190`).
  - Card 3 (Bottom-Center): Official Java logo + **Java Runtime Environment** (`w: 320, h: 190`), directly below the Backend Server (mirroring the position of Next.js in `page_08.png`).

---

## 3. Communication Connectors Documentation

All communication lines are thin, orthogonal, and strictly labeled with lowercase plain text:

| Source Component | Target Component | Direction | Line Style | Label | Protocol / Payload Description |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **React Web App** | **Spring Boot Backend** | Right (`->`) | Solid | `request` | HTTP REST API request with Bearer JWT header |
| **Spring Boot Backend** | **React Web App** | Left (`<-`) | Dashed | `response` | JSON payload response / HTTP status |
| **Spring Boot Backend** | **SQL Server Database** | Right (`->`) | Solid | `request` | Pooled JDBC query, JPA entity persist, `sp_getapplock` |
| **SQL Server Database** | **Spring Boot Backend** | Left (`<-`) | Dashed | `response` | Relational ResultSets, transaction commit confirmations |
| **Spring Boot Backend** | **Java Runtime** | Down (`v`) | Solid | `runtime` | JVM bytecode execution & in-process scheduling |
| **Java Runtime** | **Spring Boot Backend** | Up (`^`) | Dashed | `execution` | System thread callbacks & memory management |
| **Spring Boot Backend** | **Cloudinary** | Up (`^`) | Solid | `request` | Multipart HTTP upload of horse/medical images |
| **Cloudinary** | **Spring Boot Backend** | Down (`v`) | Dashed | `response` | Delivery of secure HTTPS CDN URLs & asset IDs |
| **Spring Boot Backend** | **PayOS** | Up (`^`) | Solid | `request` | Create PayOS payment link with itemized checkout details |
| **PayOS** | **Spring Boot Backend** | Down (`v`) | Dashed | `response` | Delivery of checkout URL & VietQR payment payload |
| **PayOS** | **Spring Boot Backend** | Down (`v`) | Solid | `webhook` | Asynchronous payment completion push with HMAC signature |

---

## 4. Visual Acceptance Criteria Verification Checklist

| Criterion | Requirement | Verification Result | Status |
| :--- | :--- | :--- | :---: |
| **Three Main Containers** | Exactly 3 outer containers | Verified: Box 1 (Client), Box 2 (Third parties), Box 3 (System) | **PASS** |
| **Lecturer Reference Replication** | Visually resembles `page_08.png` | Verified: 1:1 spatial correspondence and visual structure | **PASS** |
| **Logo + Name Only** | No descriptions, bullets, or paragraphs | Verified: Every component contains only official logo + name | **PASS** |
| **No Module Clutter** | No nested boxes or class-level lists | Verified: Zero internal class names, endpoints, or module cards | **PASS** |
| **No Deployment Clutter** | No Docker, Vercel, VPS, Nginx | Verified: 100% logical software architecture | **PASS** |
| **Restrained Monochrome** | White background with thin borders | Verified: `#ffffff` canvas, `#222222` container outlines | **PASS** |
| **Connector Semantics** | Solid = Request/Webhook; Dashed = Response | Verified: Arrow directions, dashed/solid styles, orthogonal paths | **PASS** |
| **Slide Readability** | Readable from a distance on slides | Verified: Clean layout, high contrast, uncluttered whitespace | **PASS** |
| **Draw.io Portability** | Native Draw.io XML schema | Fully editable in Draw.io web/desktop app | **PASS** |
| **Source Repo Read-Only** | Zero modifications to `HORSE-PROJECT` | Working tree clean on `develop` branch (`e8b3b8f5d316`) | **PASS** |

---

## 5. Evolution Summary (Lecturer Reference vs V2 vs V3)

The 3-panel comparison graphic `RACEHORSE_SYSTEM_ARCHITECTURE_V3_COMPARISON.png` highlights the design progression:
1. **Panel 1 — Lecturer's Reference (`page_08.png`):** Shows the academic design specification (3 containers, pure white background, logo + name only, request/response arrows).
2. **Panel 2 — Architecture V2 (Infographic Baseline):** The previous attempt, which was too dense, multi-colored, and packed with internal package descriptions and bullet points.
3. **Panel 3 — Architecture V3 (Exact Replication):** The final accepted presentation architecture, achieving complete visual alignment with the lecturer's specification while faithfully representing Racehorse's verified software baseline.
