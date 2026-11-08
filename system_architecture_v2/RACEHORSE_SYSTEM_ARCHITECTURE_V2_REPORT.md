# RACEHORSE SYSTEM ARCHITECTURE DIAGRAM V2 — ENGINEERING REPORT
**Task ID:** RH-ARCH-02 (Racehorse System Architecture Diagram V2: Architecture Accuracy & Presentation Redesign)  
**Deliverable Directory:** `system_architecture_v2/`  
**Diagram Filenames:**  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V2.drawio` (Fully editable Draw.io XML)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V2.png` (High-resolution 1920x1080 16:9 presentation graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V2.svg` (Clean scalable vector graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V2_COMPARISON.png` (Side-by-side comparison between V1 and V2)  
**Source Baseline Snapshot:** `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e` (`develop` branch in `C:\DEV\RACE HORSE\HORSE-PROJECT`)  
**Report Date:** March 2026  
**Status:** COMPLETE & VERIFIED  

---

## 1. Executive Summary & Design Decisions

### 1.1. Core Presentation Objective
The objective of V2 is to transition from the technical discovery baseline established in V1 to an **academic presentation-grade System Architecture Diagram**. While V1 cataloged all containerization, proxying, and deployment aspects discovered in the repository, it was overly dense for presentation slides and conflated physical hosting infrastructure with logical software architecture.

V2 strictly models the **logical software architecture** of the Racehorse Training Management System:
- **Scope Restriction:** Restricted exclusively to **FOUR logical architecture regions**:
  1. `CLIENT APPLICATIONS` (Left)
  2. `BACKEND APPLICATION` (Center)
  3. `DATABASE & STORAGE` (Right)
  4. `THIRD-PARTY SERVICES` (Top)
- **Deployment Infrastructure Removal:** In compliance with the team's presentation boundary decision, all physical deployment, hosting, and containerization elements have been removed from the diagram (Docker runtime badges, base image references, Vercel edge hosting, standalone proxy containers).
- **Consolidated Third Parties:** **VietQR** is accurately depicted as an integrated national banking standard capability provided through **PayOS Gateway**, rather than an independent external API provider.
- **Internalized Logging & Observability:** System logging (SLF4J / Logback) and health checks (Spring Boot Actuator) are modeled as internal backend capabilities, rather than an independent external server.
- **Official Brand Recognition:** High-fidelity official vector logos are used for React, Spring Boot, Java, Microsoft SQL Server, Cloudinary, PayOS, and VietQR.

---

## 2. Architecture Region Mapping to Source Evidence

Every block in V2 maps directly to verified source code and configuration in `c:\DEV\RACE HORSE\HORSE-PROJECT` (snapshot `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e`):

| Region | Diagram Component | Visual Element | Verified Source Evidence | Implementation Role |
| :--- | :--- | :--- | :--- | :--- |
| **1. Client Applications** | Racehorse Web App | Official React Logo (Cyan), Blue Card | `frontend/package.json`<br>`frontend/src/App.jsx` | Single-Page Application (SPA) built with React 19.2.0, Vite 8.0.0, and React Router 7.13.0. |
| **1. Client Applications** | 5 Role Workspaces | Compact Colored Badges: `(M)`, `(T)`, `(V)`, `(S)`, `(O)` | `frontend/src/context/AuthContext.jsx`<br>`frontend/src/routes/` | Role-partitioned user interfaces within the single SPA: Club Manager, Head Trainer, Veterinarian, Stable Staff, Horse Owner. |
| **2. Backend Application** | Spring Boot Backend Server | Official Spring Boot & Java Logos, Green Banner | `backend/pom.xml`<br>`RacehorseApplication.java` | Core Modular Monolith compiled as a single deployable archive (`com.racehorse.*`), running Java 21 LTS and Spring Boot 4.1.1. |
| **2. Backend Application** | Spring Security Capability | Dark Slate Border Banner | `com.racehorse.auth.config.SecurityConfig` | Stateless JWT Bearer token authentication filter and method-level dynamic permission matrix (`@PreAuthorize`). |
| **2. Backend Application** | 10 Core Domain Modules | 10 White Process Cards in 2 Columns of 5 | `backend/src/main/java/com/racehorse/` | 10 decoupled domain packages: Auth, Horse, Training, Racing, Medical, Stable, CareTask, Incident, Inventory, Wallet. |
| **2. Backend Application** | Logging & Diagnostics | Internal Capability Sub-panel | `application.properties`<br>`pom.xml` (Actuator) | Internal SLF4J / Logback logging (`com.racehorse=INFO`), Spring Boot Actuator (`/actuator/health`), and `@EnableScheduling` cron workers. |
| **2. Backend Application** | Integration Clients | Internal Capability Sub-panel | `CloudinaryStorageClient.java`<br>`WalletService.java` | Dedicated client wrappers for Cloudinary media uploads and PayOS checkout request signing. |
| **3. Database & Storage** | Microsoft SQL Server | Official SQL Server Logo (Red), Salmon Banner | `DATABASE/` (48 scripts)<br>`application.properties` | Centralized relational database engine storing all master and transactional club data. |
| **3. Database & Storage** | Relational Domain Entities | Data Model Process Card | `com.racehorse.*.entity`<br>Spring Data JPA | Entities for users, horses, pedigree lines, track schedules, medical records, and digital wallets. |
| **3. Database & Storage** | Concurrency & Locks | Transaction Integrity Card | `RaceEntryService.java`<br>`StallAllocationService.java` | Distributed-safe mutex locks via SQL Server `sp_getapplock` to prevent double-booking of track slots and quarantine stalls. |
| **3. Database & Storage** | Database Audit Trail | Persistent Audit Card | `dbo.audit_logs`<br>`AuditLogService.java` | Immutable audit ledger capturing pre- and post-modification JSON snapshots for regulatory compliance. |
| **4. Third-Party Services**| Cloudinary | Official Cloudinary Logo (Blue), Blue Card | `com.cloudinary:cloudinary-http5:2.4.0` | Cloud object storage and CDN media asset delivery for horse photos, diagnostic scans, and care task proof. |
| **4. Third-Party Services**| PayOS Gateway | Official PayOS Logo + VietQR Badge | `WalletController.java`<br>`https://api-merchant.payos.vn` | Payment service for digital wallet top-up, dynamic VietQR generation, and cryptographic webhook verification. |

---

## 3. Communication Relationships & Connector Protocols

All connectors use orthogonal routing with clear distinction between request and response paths, featuring centered, high-contrast label pills.

### 3.1. Client to Backend Channel (Horizontal Corridor)
- **Request (`Client -> Backend`):** Solid dark slate arrow (`x: 480 -> 540`, `y = 285`). Label pill: `request`. Dispatches HTTPS REST API requests attaching the Bearer JWT token in the `Authorization` header.
- **Response (`Backend -> Client`):** Dashed slate gray arrow (`x: 540 -> 480`, `y = 315`). Label pill: `response`. Returns JSON responses, resource representations, or HTTP error statuses.

### 3.2. Backend to Database Channel (Horizontal Corridor)
- **Request (`Backend -> Database`):** Solid dark slate arrow (`x: 1415 -> 1465`, `y = 305`). Label pill: `request`. Executes JDBC queries, Hibernate ORM entity persists/updates, and `sp_getapplock` lock acquisitions via HikariCP connection pool.
- **Response (`Database -> Backend`):** Dashed slate gray arrow (`x: 1465 -> 1415`, `y = 335`). Label pill: `response`. Delivers relational ResultSets, transaction commit acknowledgments, and lock tokens.

### 3.3. Backend to Cloudinary Channel (Vertical Corridor)
- **Request (`Backend -> Cloudinary`):** Solid dark slate arrow (`y: 250 -> 210`, `x = 880`). Label pill: `request`. Dispatches multipart HTTP POST requests via the Cloudinary Java SDK containing image payloads.
- **Response (`Cloudinary -> Backend`):** Dashed slate gray arrow (`y: 210 -> 250`, `x = 950`). Label pill: `response`. Delivers HTTPS CDN asset URLs and delivery metadata stored in SQL Server.

### 3.4. Backend to PayOS Gateway Channel (Vertical Corridor)
- **Request (`Backend -> PayOS Gateway`):** Solid dark slate arrow (`y: 250 -> 210`, `x = 1260`). Label pill: `request`. Creates digital wallet deposit payment requests with itemized amounts and checksums.
- **Response (`PayOS Gateway -> Backend`):** Dashed slate gray arrow (`y: 210 -> 250`, `x = 1310`). Label pill: `response`. Returns checkout payment URL, transaction ID, and VietQR payload.
- **Webhook (`PayOS Gateway -> Backend`):** Solid violet arrow (`y: 210 -> 250`, `x = 1360`). Label pill: `webhook`. Asynchronous payment completion notification pushed to the backend with HMAC cryptographic signature validation.

---

## 4. Omitted Components & Scope Reconciliation

To maintain strict adherence to logical architecture and avoid presentation clutter, several components discovered in the repository were explicitly excluded from the V2 diagram:

1. **Deployment & Hosting Infrastructure (Vercel, Docker, VPS, Nginx, CI/CD):**
   - *Reason for Omission:* The presentation guidelines explicitly establish that deployment infrastructure is OUT OF SCOPE. Physical hosting (Vercel edge CDN, Docker Alpine containers) does not alter the logical interaction between the React client, Spring Boot backend, and SQL Server database.
2. **PayOS Webhook Proxy (`payos-webhook-proxy.mjs` on port 8099):**
   - *Reason for Omission:* Code inspection verified that this Node.js micro-proxy is a development and staging utility used to tunnel external webhooks to `localhost:8080`. In production and logical system architecture, PayOS webhooks deliver directly to the application backend endpoint. Modeling it as a separate primary architecture box distorted the logical architecture.
3. **Separate Logging Server / Observability Region (Seq, ELK):**
   - *Reason for Omission:* Thorough codebase discovery confirmed that no external log aggregation cluster (such as Seq, Elasticsearch, or Datadog) exists. SLF4J/Logback and Spring Boot Actuator operate in-process inside the Spring Boot JVM. Audit records reside in `dbo.audit_logs` within SQL Server. V2 correctly relocates these capabilities into the Backend Application and Database regions.
4. **Independent VietQR API Provider:**
   - *Reason for Omission:* VietQR is not a separate external SaaS API integrated directly with the backend. It is the national banking QR standard rendered through PayOS checkout sessions. V2 accurately represents VietQR as an integrated capability badge within the PayOS Gateway card.
5. **Class-Level Implementation Details:**
   - *Reason for Omission:* Individual controller names (`StallController`, `HorseController`), service interfaces, and REST endpoint strings were removed to elevate the diagram from code documentation to high-level system architecture suitable for academic presentation.

---

## 5. Visual Quality Assurance Verification Checklist

| QA Criterion | Verification Target | Observed Result | Status |
| :--- | :--- | :--- | :---: |
| **Region Boundary Count** | Exactly 4 logical regions | Exactly 4 regions rendered: Client Apps, Backend App, Database & Storage, Third-Party Services | **PASS** |
| **Canvas Dimensions** | 1920 × 1080 (16:9 widescreen ratio) | Playwright render confirmed exact 1920 × 1080 resolution | **PASS** |
| **Connector Non-Collision** | Zero line intersections or box crossings | Dedicated horizontal and vertical corridors; 100% collision-free | **PASS** |
| **Directional Semantics** | Solid = Request / Webhook; Dashed = Response | Validated across all 8 connectors with pill labels | **PASS** |
| **Logo Authenticity** | Official vector logos for core technologies | Authentic SVG logos: React, Spring Boot, Java, SQL Server, Cloudinary, PayOS, VietQR | **PASS** |
| **Font Legibility** | High-contrast, presentation-readable typography | Segoe UI, titles 15-23pt bold, module headers 11.5pt, body 9.5-10pt | **PASS** |
| **Color Restraint** | Subdued, professional color palette | Light backgrounds (`#f8fafc`, `#ffffff`), subtle borders (`#cbd5e1`), brand accent colors | **PASS** |
| **Draw.io Portability** | Native Draw.io XML schema (`<mxGraphModel>`) | Editable in draw.io web/desktop with swimlanes, text, and orthogonal edges | **PASS** |
| **Read-Only Source Repo** | Zero modifications to `c:\DEV\RACE HORSE\HORSE-PROJECT` | Git status verified completely clean; 0 modified files | **PASS** |

---

## 6. Summary Comparison (V1 vs V2)

| Dimension | Version 1 (Discovery Baseline) | Version 2 (Presentation Redesign) |
| :--- | :--- | :--- |
| **Focus** | Physical deployment & technical discovery inventory | Logical software architecture & component communication |
| **Regions** | 5 regions (including Platform Infrastructure & Third Parties) | Exactly 4 regions (Client, Backend, Database, Third Parties) |
| **Deployment Artifacts** | Showed Docker base image, Vercel, Node.js proxy | Completely eliminated (100% out of scope) |
| **PayOS & VietQR** | Modeled as two separate independent external cards | Unified PayOS card with integrated VietQR standard badge |
| **Logging & Monitoring**| Standalone container resembling an external server | Properly internalized inside Backend Application & SQL Server |
| **Text Density** | Heavy (controller names, endpoint routes, tech versions) | Concise, high-level business capabilities & module roles |
| **Visual Polish** | Functional technical blueprint | Professional, presentation-ready academic slide asset |
