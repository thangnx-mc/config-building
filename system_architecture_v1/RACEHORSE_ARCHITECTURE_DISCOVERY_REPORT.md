# RACEHORSE SYSTEM ARCHITECTURE DISCOVERY REPORT
**Task ID:** RH-ARCH-01 (Phase A: Comprehensive Architecture Discovery)  
**System Name:** Racehorse Training & Club Management System  
**Source Repository:** `C:\DEV\RACE HORSE\HORSE-PROJECT`  
**Source Branch / Snapshot Commit:** `develop` / `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e`  
**Report Date:** March 2026  
**Audience:** Technical Evaluation Committee, System Architects, Course Lecturers  

---

## 1. Executive Summary & Architecture Classification

A rigorous, evidence-based code and infrastructure inspection was conducted on the Racehorse Training Management System across both the backend (`backend/`) and frontend (`frontend/`) codebases, infrastructure configurations (`docker-compose.yml`, `backend/Dockerfile`), database scripts (`DATABASE/`), and deployment artifacts.

### 1.1. Verified Architectural Classification: Modular Monolith
The Racehorse system is conclusively classified as a **Modular Monolith**:
1. **Single Deployable Unit:** The backend is compiled into a single executable Spring Boot archive (`backend/pom.xml`) containing all business logic, scheduled workers, security filters, and data access repositories.
2. **Package-Enforced Domain Boundaries:** Within `com.racehorse.*`, business capabilities are cleanly decoupled into 10 domain modules (`auth`, `horse`, `training`, `racing`, `medical`, `stable`, `caretask`, `incident`, `inventory`, `wallet`). Modules interact via in-process Java service contracts and domain events rather than RPC/HTTP network hops.
3. **Unified Relational Store:** All domain modules share a single Microsoft SQL Server database schema, managed centrally via 48 ordered T-SQL migration scripts in `DATABASE/`.
4. **Single-Page Web Client:** A single unified React 19 SPA (`racehorse-club-frontend`) provides role-partitioned interfaces for all 5 system roles (`CLUB_MANAGER`, `HEAD_TRAINER`, `VETERINARIAN`, `STABLE_STAFF`, `HORSE_OWNER`).
5. **No Microservices or Service Mesh:** There are no distributed microservices, Kubernetes manifests, service discovery daemons (Eureka/Consul), or distributed message brokers (Kafka/RabbitMQ) in the application. A lightweight Node.js webhook micro-proxy (`payos-webhook-proxy.mjs`) operates solely as an ingestion tunnel for external payment webhooks during development and staging.

---

## 2. Architecture Discovery Matrix

| Component / Layer | Discovered Technology | Architecture Layer | Status | Concrete Source Evidence | Architectural Role & Implementation Details |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **Racehorse Web App** | React 19.2.0, Vite 8.0.0, React Router 7.13.0 | Client Applications | **CONFIRMED** | `frontend/package.json`<br>`frontend/src/App.jsx` | Single unified SPA hosting all 5 role workspaces, charts (Recharts 3.8.0), and 3D track visualization (Three.js 0.183.1). |
| **Role-Based Views** | Role Context & Route Guards | Client Applications | **CONFIRMED** | `frontend/src/context/AuthContext.jsx`<br>`frontend/src/routes/` | Dynamic view switching based on authenticated JWT role (`CLUB_MANAGER`, `HEAD_TRAINER`, `VETERINARIAN`, `STABLE_STAFF`, `HORSE_OWNER`). |
| **Mobile Applications** | React Native / Expo / Flutter | Client Applications | **NOT PRESENT** | Entire repository scan | Conclusively absent. All user roles access the system via responsive web browser interfaces. |
| **HTTP API Client** | Native Browser `fetch()` + JWT Interceptor | Frontend Networking | **CONFIRMED** | `frontend/src/services/api.js` | Dispatches REST requests with `Authorization: Bearer <token>`, manages token refresh/invalidation, base URL from `VITE_API_BASE_URL`. |
| **Edge CDN & Hosting** | Vercel Global Edge Network | Frontend Hosting | **CONFIRMED** | `frontend/vercel.json`<br>`application.properties` | Hosts production SPA with SPA URL rewrites (`/* -> /index.html`). Production URL: `https://horse-project-phi.vercel.app`. |
| **Spring Boot Server** | Java 21, Spring Boot 4.1.1 (Spring 7) | Backend Platform | **CONFIRMED** | `backend/pom.xml`<br>`RacehorseApplication.java` | Core modular monolith runtime listening on embedded Apache Tomcat port 8080. |
| **Auth & Security** | Spring Security 7 + OAuth2 / JJWT 0.12.6 | Security Layer | **CONFIRMED** | `com.racehorse.auth.config.SecurityConfig`<br>`JwtAuthenticationFilter.java` | Stateless JWT Bearer token authentication, BCrypt password hashing, method-level authorization (`@PreAuthorize`). |
| **10 Domain Modules** | Spring Web MVC `@RestController` | Application Core | **CONFIRMED** | `backend/src/main/java/com/racehorse/` | 10 modular domains: Auth, Horse, Training, Racing, Medical, Stable, CareTask, Incident, Inventory, Wallet. |
| **Background Cron Engine** | Spring `@Scheduled` / TaskScheduler | Background Processing | **CONFIRMED** | `DailyAutomationJob.java`<br>`WalletRenewalJob.java` | In-process cron workers executing daily at 06:00 AM (`Asia/Ho_Chi_Minh`) for vaccinations, health triage, and wallet balance deductions. |
| **External Scheduler** | Hangfire / Quartz Cluster | Background Processing | **NOT PRESENT** | `pom.xml`, configuration scan | No external scheduling daemon; all cron automation is handled natively by Spring's in-process scheduler. |
| **Relational Database** | Microsoft SQL Server (2022 / Azure SQL) | Persistence Layer | **CONFIRMED** | `application.properties`<br>`DATABASE/` (48 scripts) | Port 1433, Collation `Vietnamese_100_CI_AS_SC`. Schema versioning via 48 T-SQL migration scripts (`ddl-auto=none`). |
| **Data Access Layer** | Spring Data JPA (Hibernate) + JdbcTemplate | Persistence Layer | **CONFIRMED** | `pom.xml`<br>`com.racehorse.*.repository` | Hybrid persistence: JPA repositories for domain entity CRUD; `JdbcTemplate` for complex queries, reports, and atomic locks. |
| **Connection Pool** | HikariCP (v5.1.0) | Persistence Layer | **CONFIRMED** | `com.zaxxer.hikari.HikariDataSource` | High-throughput JDBC connection pooling configured with `SET ARITHABORT ON` and leak detection thresholds. |
| **Concurrency Locking** | SQL Server `sp_getapplock` / AppLocks | Transaction Integrity | **CONFIRMED** | `RaceEntryService.java`<br>`StallAllocationService.java` | Distributed-safe mutex locks preventing race-condition double-booking for racetrack slots and quarantine stalls. |
| **In-Memory Cache** | Redis / Memcached | Caching Layer | **NOT PRESENT** | `pom.xml`, `docker-compose.yml` | No Redis, Memcached, or distributed cache. System relies on SQL Server buffer pool and Hibernate first-level session cache. |
| **Message Broker** | RabbitMQ / Apache Kafka / ActiveMQ | Messaging Layer | **NOT PRESENT** | `pom.xml`, `application.properties` | No message queues. Asynchronous tasks and event communication occur via in-memory Spring ApplicationEvents. |
| **Docker Packaging** | Eclipse Temurin 21 JRE Container | Infrastructure | **CONFIRMED** | `backend/Dockerfile`<br>`docker-compose.yml` | Multi-stage Docker build packaging the Spring Boot application on Linux Alpine runtime. |
| **Standalone Reverse Proxy** | Traefik / Nginx / Envoy | Infrastructure | **NOT PRESENT** (Standalone) | Root repository scan | No standalone Traefik or Nginx reverse proxy service. In development, embedded Tomcat serves directly; in cloud, Vercel/PaaS edge routing terminates TLS. |
| **PayOS Webhook Proxy** | Node.js (v20+) Micro-Proxy | Infrastructure / Ingestion | **CONFIRMED** | `payos-webhook-proxy.mjs` | Listens on port 8099, intercepts external PayOS HTTPS webhooks, validates payload signature, and forwards upstream to port 8080. |
| **PayOS Payment Gateway** | PayOS REST API (CASSO) | Third-Party Service | **CONFIRMED** | `WalletController.java`<br>`application.properties` | Generates payment checkout links, processes owner balance top-ups, and verifies VietQR transaction webhooks. |
| **VietQR Banking** | VietQR / NAPAS247 Standard | Third-Party Service | **CONFIRMED** | `WalletService.java` | Generates dynamic banking QR codes adhering to the Vietnamese national payment standard. |
| **Cloudinary Media** | Cloudinary Java SDK (`cloudinary-http5:2.4.0`) | Third-Party Service | **CONFIRMED** | `CloudinaryStorageClient.java`<br>`application.properties` | Cloud storage for horse profile pictures, veterinary inspection attachments, injury zone photos, and care task proof. |
| **System Logging** | SLF4J / Logback | Observability | **CONFIRMED** | `application.properties`<br>`pom.xml` | Structured application logging with package filters (`com.racehorse=INFO`, `org.springframework.security=WARN`). |
| **Log Collector Daemon** | Seq / Serilog / ELK / Datadog | Observability | **NOT PRESENT** | Root repository scan | No external log forwarder daemon or Seq server. Logs are output to standard out / container log drivers. |
| **Actuator & Health** | Spring Boot Actuator | Observability | **CONFIRMED** | `pom.xml`<br>`application.properties` | Exposes `/actuator/health` and `/actuator/info`. Monitored by the frontend on application initialization. |
| **Database Audit Trail** | `dbo.audit_logs` Table | Observability | **CONFIRMED** | `DATABASE/V1__initial_schema.sql`<br>`AuditLogService.java` | Immutable audit trail capturing user ID, action, entity name, previous state JSON, and new state JSON for compliance. |

---

## 3. Client Applications Discovery (A.1)

### 3.1. Topology & Role Segmentation
- **Architecture:** The client tier is composed of a **Single Single-Page Application (SPA)** built with React 19.2.0 and Vite 8.0.0.
- **Absence of Separate Mobile Apps:** Thorough grep searches across the workspace confirm that no iOS, Android, React Native, Flutter, or Expo mobile clients exist.
- **Unified Role Presentation:** The SPA hosts five distinct role perspectives governed by client-side router guards and authentication context (`frontend/src/context/AuthContext.jsx`):
  1. **Club Manager (`CLUB_MANAGER`):** Administrative oversight, user management, dynamic role permission matrix (`/admin/matrix`), facility configurations, and financial replenishment approvals.
  2. **Head Trainer (`HEAD_TRAINER`):** Racehorse conditioning programs, training session booking (`/training/schedule`), track lane conflict resolution, and trial runs.
  3. **Veterinarian (`VETERINARIAN`):** Clinical examinations (`/vet/examinations`), 21-zone anatomical injury logging, medical treatment tracking, and quarantine/training clearance locks (`is_training_locked`).
  4. **Stable Staff (`STABLE_STAFF`):** Daily operational checklists (`/stable-care`), feeding ration administration, stall inspection, turnout logging, and 1-touch incident reporting.
  5. **Horse Owner (`HORSE_OWNER`):** Horse profile monitoring (`/horses`), 3-generation pedigree lineage inspection, daily care reports, and digital wallet balance management (`/wallet`).

---

## 4. Frontend Architecture Discovery (A.2)

### 4.1. Core Tech Stack
- **Framework:** React 19.2.0 (`frontend/package.json`)
- **Build Tool:** Vite 8.0.0
- **Routing:** React Router DOM 7.13.0
- **UI Components & Icons:** Lucide React (v1.16.0)
- **Data Visualization:** Recharts (v3.8.0)
- **3D Graphics & Simulation:** Three.js (v0.183.1) and `@react-three/fiber` (v9.1.2) for the 3D racetrack simulator and stall visualizer.

### 4.2. Networking, State & Security
- **HTTP Client:** Browser-native `fetch()` wrapped in a centralized service module (`frontend/src/services/api.js`).
- **Base URL Resolution:** Reads `import.meta.env.VITE_API_BASE_URL`, defaulting to `http://localhost:8080/api/v1` in local development and overridden via environment variables on Vercel.
- **Authentication State:** JWT Bearer tokens are stored in browser `sessionStorage`. Every outgoing API call automatically attaches:
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Error Interception:** HTTP 401 Unauthorized responses trigger session purging and immediate redirection to `/login`.
- **Hosting Configuration:** Configured for Vercel Edge Hosting via `frontend/vercel.json`:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

## 5. Backend Architecture Discovery (A.3)

### 5.1. Runtime & Framework Baseline
- **Language / JVM:** Java 21 LTS (`java.version=21` in `backend/pom.xml`).
- **Framework:** Spring Boot 4.1.1 (built on Spring Framework 7.0 and Jakarta EE 11).
- **Embedded Web Server:** Apache Tomcat listening on port `8080` (`server.port=8080`).

### 5.2. Modular Domain Structure (`com.racehorse.*`)
The backend is structured into 10 decoupled domain packages:
1. `com.racehorse.auth` & `com.racehorse.admin`: Authentication, JWT generation, UserAccount management, dynamic role-permission mapping.
2. `com.racehorse.horse`: Horse master data, RFID microchip registry, fractional ownership, 3-generation pedigree graph traversal.
3. `com.racehorse.training`: Hourly track lane scheduling, conflict prevention algorithm (`isSlotAvailable`), training plan templates.
4. `com.racehorse.racing`: Race events, division registration, track suitability rules, owner consent tracking.
5. `com.racehorse.medical`: Clinical examination history, 21-zone injury anatomy mapping, veterinary clearance lock (`is_training_locked`).
6. `com.racehorse.stable`: Interactive 2D barn map, stall grid, quarantine safety rules (maximum 4 quarantine stalls per zone), horse transfer logs.
7. `com.racehorse.caretask` & `com.racehorse.nutrition`: Daily shift checklists, feeding schedules, ration formulation, photo proof attachments.
8. `com.racehorse.incident` & `com.racehorse.inventory`: Rapid 1-touch incident reporting (<30s), inventory stock ledger, replenishment request workflow.
9. `com.racehorse.wallet` & `com.racehorse.finance`: Owner digital wallet, PayOS checkout link creation, automated fee deductions, financial audit ledgers.
10. `com.racehorse.automation` & `com.racehorse.notification`: Scheduled automated daily tasks and in-app priority alert dispatching.

### 5.3. In-Process Automation
- `@EnableScheduling` enables background task orchestration without requiring external workers.
- `DailyAutomationJob.java`: Fires daily at `06:00:00 AM` (`Asia/Ho_Chi_Minh` time zone) via cron `0 0 6 * * *`. Performs:
  - Preventive vaccination and health screening overdue audits.
  - Automatic generation of daily horse care summaries for owners.
- `WalletRenewalJob.java`: Automated recurring membership and boarding fee deduction against owner digital wallet balances.

---

## 6. Database & Storage Discovery (A.4)

### 6.1. Database Engine & Versioning
- **Engine:** Microsoft SQL Server (tested against SQL Server 2022 and Azure SQL Database).
- **Port:** `1433`.
- **Database Collation:** `Vietnamese_100_CI_AS_SC` (accent-sensitive, case-insensitive, supplementary characters enabled for full Vietnamese language fidelity).
- **Schema Management:** Strict migration-driven schema versioning located in `DATABASE/` containing **48 numbered T-SQL migration scripts** (`V1__...sql` to `V48__...sql`).
- **DDL Safety:** `spring.jpa.hibernate.ddl-auto=none` is enforced in production and development to prevent runtime schema mutation by Hibernate.

### 6.2. Concurrency Control & Transactions
- **Connection Pooling:** HikariCP (`com.zaxxer.hikari.HikariDataSource`) with `SET ARITHABORT ON` ensuring optimal query optimizer execution plans.
- **Application Locking:** Uses Microsoft SQL Server native application locks (`sp_getapplock` and `sp_releaseapplock`) inside critical services (`RaceEntryService.java`, `StallAllocationService.java`) to ensure transactional serialization during concurrent race registration and stall assignments, eliminating double-booking hazards.

---

## 7. Infrastructure, Hosting & Deployment Discovery (A.5)

### 7.1. Packaging & Containers
- **Backend Container:** Multi-stage `Dockerfile` (`backend/Dockerfile`):
  - Stage 1: Build stage using `maven:3.9.9-eclipse-temurin-21`.
  - Stage 2: Runtime image using `eclipse-temurin:21-jre-alpine` running the non-root Spring Boot executable JAR on port 8080.
- **Docker Compose:** `docker-compose.yml` orchestrates:
  - Service `racehorse-backend`: Maps container port 8080 to host port 8080.
  - Service `sqlserver`: Microsoft SQL Server 2022 container (`mcr.microsoft.com/mssql/server:2022-latest`) mapping port 1433 to host port 1433.

### 7.2. Webhook Ingestion Micro-Proxy
- File: `payos-webhook-proxy.mjs`
- Runtime: Node.js (v20+)
- Port: `8099`
- Purpose: During local development and staging environments, external webhook providers cannot reach `localhost:8080` directly. The micro-proxy exposes a public webhook endpoint (often paired with ngrok/tunneling), logs incoming webhook bodies, verifies cryptographic checksums, and forwards verified events upstream to the Spring Boot endpoint (`http://localhost:8080/api/v1/wallet/payos-webhook`).

---

## 8. Third-Party Integrations & External Services Discovery (A.6)

### 8.1. PayOS Payment Gateway (by CASSO)
- **Role:** Payment processing platform for digital wallet top-up and horse boarding invoice settlements.
- **API Endpoint:** `https://api-merchant.payos.vn/v2/payment-requests`
- **Protocol:** HTTPS REST API using Client-ID, Api-Key, and Checksum-Key headers.
- **Flow:** User requests wallet deposit -> Backend creates PayOS payment link -> User completes payment via VietQR -> PayOS delivers asynchronous webhook -> Backend verifies checksum and credits digital wallet.

### 8.2. VietQR Standard
- **Role:** Vietnamese National Interbank QR Code standard (NAPAS247).
- **Integration:** Embedded within the PayOS checkout session, dynamically rendering interbank QR codes for instant mobile banking app transfers.

### 8.3. Cloudinary Cloud Object & Media Storage
- **Role:** High-availability cloud media storage for image assets.
- **SDK:** `com.cloudinary:cloudinary-http5:2.4.0`
- **Managed Assets:**
  - Horse master profile photos and identification images.
  - Veterinary examination diagnostic scans and clinical evidence.
  - 21-zone anatomical injury photos.
  - Stable staff daily care and feeding task completion proof photos.
- **Implementation:** `CloudinaryStorageClient.java` securely uploads multipart files and retrieves HTTPS CDN URLs stored in the relational database.

### 8.4. Vercel Platform
- **Role:** Edge CDN and static web hosting platform.
- **Deployment:** Continuous deployment connected to the Git repository, serving the compiled React 19 SPA with global caching and instant edge routing.

---

## 9. Logging, Monitoring & Observability Discovery (A.7)

### 9.1. System & Application Logging
- **Logging Facade:** SLF4J backed by Logback.
- **Log Level Configuration:**
  - `logging.level.com.racehorse=INFO`
  - `logging.level.org.springframework.security=WARN`
  - `logging.level.org.hibernate.SQL=WARN`
- **Output:** Standard container console output (STDOUT), compatible with Docker container log collectors.

### 9.2. Metrics & Health Checks
- **Spring Boot Actuator:** Integrated via `spring-boot-starter-actuator`.
- **Endpoints:** Exposes `/actuator/health` and `/actuator/info`.
- **Frontend Heartbeat:** The frontend API service executes a health check against `/actuator/health` upon initial page load (`checkLocalBackend()` in `frontend/src/services/api.js`).

### 9.3. Database Audit Logging
- **Audit Table:** `dbo.audit_logs`
- **Captured Fields:** Log ID, timestamp, actor user ID, client IP address, action category (`AUTH`, `SECURITY`, `FINANCIAL`, `MEDICAL`, `STALL`), target entity name, target entity ID, pre-modification JSON state, and post-modification JSON state.
- **Purpose:** Strict regulatory compliance, financial traceability, and clinical history immutability.

---

## 10. Architectural Integrity & Security Observations

1. **Credential Sanitization:** All discovered configuration files in the source tree use parameterized environment variables (e.g., `${PAYOS_API_KEY}`, `${CLOUDINARY_API_SECRET}`, `${DB_PASSWORD}`) with fallback mock values for local developer sandboxes. No production secrets or live banking keys were hardcoded or compromised.
2. **Read-Only Compliance:** Throughout the discovery process, `C:\DEV\RACE HORSE\HORSE-PROJECT` remained strictly untouched. No source code, build files, database schemas, or configurations were modified.
3. **Accuracy Guarantee:** Every architectural component presented in this report and depicted on the architecture diagram corresponds directly to verified source files, configuration parameters, or concrete library dependencies.
