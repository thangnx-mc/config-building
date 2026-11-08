# RACEHORSE SYSTEM ARCHITECTURE DIAGRAM V1 — ENGINEERING REPORT
**Task ID:** RH-ARCH-01 (Phase B: System Architecture Diagram Implementation)  
**Deliverable Directory:** `system_architecture_v1/`  
**Diagram Filenames:**  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V1.drawio` (Editable XML Diagram)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V1.png` (High-Resolution Presentation PNG, 1920x1080)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V1.svg` (Scalable Vector Graphic)  
- `RACEHORSE_SYSTEM_ARCHITECTURE_V1_COMPARISON.png` (Side-by-Side Reference Comparison)  
**Report Date:** March 2026  
**Status:** COMPLETE & VERIFIED  

---

## 1. Design Objectives & Lecturer Reference Alignment

### 1.1. Core Visual Paradigm
The architecture diagram was designed to faithfully replicate the professional layout and architectural grouping of the lecturer's approved reference diagram (`presentation_review_assets/sample/sample_pages/page_08.png`), while strictly reflecting the **verified codebase** of the Racehorse Training Management System.

### 1.2. Architectural Zones & Spatial Organization
The diagram layout adheres to a standard 3-zone spatial division on a **1920 × 1080 (16:9 widescreen)** canvas:
1. **Top Zone (`y: 80` to `y: 195`): Third Parties & Cloud Services**
   - Encapsulated within a dedicated top container spanning the upper right canvas.
   - Houses external cloud and SaaS partners: **Cloudinary**, **PayOS Gateway**, **VietQR**, and **Vercel Platform**.
   - Features authentic, high-resolution vector logos and crisp typography.
2. **Left Zone (`x: 40` to `x: 390`, `y: 80` to `y: 990`): Client Applications**
   - Features the unified **Racehorse Web App** (React 19 + Vite 8 + React Router 7) card with React technology branding.
   - Vertically stacks all **5 Role-Based Interfaces** (`CLUB_MANAGER`, `HEAD_TRAINER`, `VETERINARIAN`, `STABLE_STAFF`, `HORSE_OWNER`) with circular role badges, specific accessible routes, and core operational responsibilities.
3. **Center & Right Zone (`x: 430` to `x: 1880`, `y: 220` to `y: 990`): Racehorse Backend Platform & Infrastructure**
   - Encapsulated within a large platform infrastructure boundary container.
   - **Spring Boot Backend Server (`com.racehorse.*`)**: Positioned at center, showcasing the modular monolith architecture, Spring Security 7 layer, 10 domain modules organized in a clean 2-column grid, and Cloudinary media upload client.
   - **PayOS Webhook Proxy**: Positioned cleanly above the backend server (`x: 980` to `x: 1280`, `y: 250` to `y: 330`), bridging asynchronous external webhooks without obstructing vertical third-party communication corridors.
   - **Microsoft SQL Server**: Positioned in the upper right quadrant of the platform (`x: 1330` to `x: 1850`), detailing the 48-script migration baseline (`DATABASE/`), Spring Data JPA / Hibernate ORM, HikariCP connection pooling, and `sp_getapplock` transaction synchronization.
   - **Logging & Observability**: Positioned in the lower right quadrant (`x: 1330` to `x: 1850`), highlighting Spring Boot Actuator health endpoints, Logback/SLF4J application logging, `dbo.audit_logs` database audit trail, and multi-role urgent priority alerting.

---

## 2. Component Mapping from Discovery to Diagram

Every block on the architecture diagram maps 1:1 to a verified component documented in `RACEHORSE_ARCHITECTURE_DISCOVERY_REPORT.md`:

| Diagram Block | Visual Element | Discovered File / Package Evidence |
| :--- | :--- | :--- |
| **Racehorse Web App** | React icon, tech stack badges | `frontend/package.json`, `frontend/src/App.jsx` |
| **Club Manager View** | Role badge `(M)`, Purple accent | `frontend/src/context/AuthContext.jsx`, `/admin/*` routes |
| **Head Trainer View** | Role badge `(T)`, Amber accent | `frontend/src/context/AuthContext.jsx`, `/training/*` routes |
| **Veterinarian View** | Role badge `(V)`, Emerald accent | `frontend/src/context/AuthContext.jsx`, `/vet/*` routes |
| **Stable Staff View** | Role badge `(S)`, Slate accent | `frontend/src/context/AuthContext.jsx`, `/stable-care` routes |
| **Horse Owner View** | Role badge `(O)`, Red accent | `frontend/src/context/AuthContext.jsx`, `/horses`, `/wallet` routes |
| **Spring Boot Backend** | Spring Leaf icon, Docker badge | `backend/pom.xml` (`spring-boot-starter-web 4.1.1`, Java 21) |
| **Spring Security 7** | Sub-header banner across modules | `com.racehorse.auth.config.SecurityConfig`, `JwtAuthenticationFilter` |
| **Domain Modules 1 - 10** | 10 white rounded process cards | 10 packages in `backend/src/main/java/com/racehorse/` |
| **Media Upload Client** | Cloudinary icon, blue footer | `com.racehorse.media.CloudinaryStorageClient` |
| **PayOS Webhook Proxy** | Node.js badge, cyan banner | `payos-webhook-proxy.mjs` (Port 8099) |
| **Microsoft SQL Server** | SQL Server icon, Docker badge | `DATABASE/` (48 scripts), `application.properties` |
| **Logging & Observability** | Spring Actuator icon, Docker badge | `application.properties`, `dbo.audit_logs`, `NotificationService` |
| **Cloudinary** | Blue cloud icon, card in Top zone | `com.cloudinary:cloudinary-http5:2.4.0` |
| **PayOS Gateway** | Violet Casso/PayOS logo card | `WalletController.java`, `https://api-merchant.payos.vn` |
| **VietQR** | Red/Blue VietQR logo card | Vietnamese National Interbank QR Standard via PayOS |
| **Vercel Platform** | Black triangular logo card | `frontend/vercel.json`, `https://horse-project-phi.vercel.app` |

---

## 3. Connector & Data Flow Documentation

Connectors strictly adhere to the lecturer's approved visual language: **Solid orthogonal lines** denote inbound/outbound requests, while **Dashed orthogonal lines** denote responses. All connectors feature centered label pills for unmistakable readability.

### 3.1. Client to Backend REST API Channel
- **Corridor:** Horizontal bridge between Client container (`x: 390`) and Platform container (`x: 430`) at `y = 200` to `y = 450`.
- **Inbound Request (Solid):** `Client -> Backend` (HTTP REST with Bearer JWT).
- **Outbound Response (Dashed):** `Backend -> Client` (JSON Payload / HTTP Status).

### 3.2. Backend to Database Persistence Channel
- **Corridor:** Horizontal bridge between Backend container (`x: 1280`) and Microsoft SQL Server container (`x: 1330`) at `y = 400` to `y = 445`.
- **Inbound Request (Solid):** `Backend -> SQL Server` (HikariCP pooled JDBC connection, T-SQL / JPA queries).
- **Outbound Response (Dashed):** `SQL Server -> Backend` (ResultSets, entity state, lock status).

### 3.3. Backend to Observability Channel
- **Corridor:** Horizontal bridge between Backend container (`x: 1280`) and Logging & Observability container (`x: 1330`) at `y = 730` to `y = 775`.
- **Inbound Request (Solid):** `Backend -> Observability` (Actuator metrics, Logback write, audit row insertion).
- **Outbound Response (Dashed):** `Observability -> Backend` (Health status ack, telemetry confirmations).

### 3.4. Cloud Media Storage Channel (Cloudinary)
- **Corridor:** Direct vertical line at `x = 580` between Spring Boot Media Client and Cloudinary card.
- **Inbound Request (Solid):** `Backend -> Cloudinary` (Multipart image upload via HTTPS REST).
- **Outbound Response (Dashed):** `Cloudinary -> Backend` (HTTPS CDN asset URL & delivery metadata).

### 3.5. Payment Processing Channel (PayOS)
- **Corridor:** Direct vertical line at `x = 830` between Spring Boot Wallet Module and PayOS Gateway.
- **Inbound Request (Solid):** `Backend -> PayOS` (Create payment link with itemized checkout details).
- **Outbound Response (Dashed):** `PayOS -> Backend` (Checkout URL, VietQR payload, transaction reference).

### 3.6. Asynchronous Webhook Ingestion Channel
- **External Webhook:** `PayOS Gateway -> PayOS Webhook Proxy` (Vertical line at `x = 1040`). Dispatches asynchronous payment confirmation webhook via HTTPS.
- **Forwarding Pipeline:** `PayOS Webhook Proxy -> Spring Boot Backend Server` (Vertical line at `x = 1140`). Forwards verified payload upstream to `:8080/api/v1/wallet/payos-webhook`.

---

## 4. Visual Quality Assurance Checklist

| QA Item | Requirement | Verification Result | Status |
| :--- | :--- | :--- | :---: |
| **Canvas Resolution** | Exact 1920 × 1080 (16:9 widescreen ratio) | Playwright viewport set to `1920x1080`, verified via PNG inspection | **PASS** |
| **Line Collisions** | Zero overlapping or intersecting connectors | Clean dedicated corridors; PayOS Webhook Proxy repositioned; vertical lines run cleanly | **PASS** |
| **Font Legibility** | Crisp text hierarchy readable from a distance | Segoe UI, title at 20pt bold, container headers at 12pt bold, body at 8.5-10pt | **PASS** |
| **Color Contrast** | WCAG AA compliant contrast ratios | Dark text (`#0f172a`, `#1e293b`) on light backgrounds (`#ffffff`, `#f8fafc`); high-contrast colored badges | **PASS** |
| **Vector Fidelity** | Authentic SVG icons for tech stacks | React, Vite, Spring Boot, Java, Docker, SQL Server, Cloudinary, PayOS, VietQR, Vercel | **PASS** |
| **Draw.io Portability** | Native Draw.io XML format editable in web / desktop app | Produced standard mxGraph XML schema (`<mxGraphModel>`), opens natively in Draw.io | **PASS** |
| **No Hallucinations** | All components strictly verified in source code | No fictitious microservices, no Redis, no Kafka, no Expo mobile apps; 100% verified baseline | **PASS** |

---

## 5. Comparison with Lecturer's Reference Architecture

The visual comparison artifact `RACEHORSE_SYSTEM_ARCHITECTURE_V1_COMPARISON.png` juxtaposes the lecturer's sample (`page_08.png`) on the left against our Racehorse Architecture Diagram on the right.

### 5.1. Common Structural Strengths
- **Spatial Consistency:** Both diagrams partition external services into an elevated top horizontal band and group client interfaces along the left edge.
- **Containerization Boundaries:** Both diagrams clearly distinguish between unmanaged client environments and the managed backend platform / infrastructure box.
- **Directional Protocol Clarity:** Both diagrams implement the explicit `request` (solid) vs `response` (dashed) orthogonal arrow notation.
- **Brand Recognition:** Both diagrams leverage recognized vendor logos to communicate architectural dependencies at a glance.

### 5.2. Key Enhancements in the Racehorse Diagram
1. **Accurate Modular Monolith Representation:** Instead of arbitrarily drawing distributed boxes that do not exist in the code, the diagram clearly showcases the 10 internal domain modules of `com.racehorse.*` within the single Spring Boot server boundary, illustrating high modularity within a monolithic deployment.
2. **True Vietnamese FinTech & Cloud Realism:** Accurately features VietQR (NAPAS247 standard) and PayOS alongside Cloudinary and Vercel, representing the actual cloud integration footprint.
3. **Dedicated Ingestion Proxy Representation:** Explicitly models the Node.js PayOS Webhook Proxy on port 8099, explaining how local development environments interface with external banking webhooks.
4. **Enhanced Data & Concurrency Documentation:** Microsoft SQL Server details not only the persistence technology (Spring Data JPA) but also the 48-script migration baseline and `sp_getapplock` distributed synchronization primitives.
