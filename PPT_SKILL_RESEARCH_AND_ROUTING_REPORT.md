# PPT Skill Research, Evaluation & Routing Architecture Report

> **Project:** Racehorse Presentation & Software Demo Deck System  
> **Target Repository:** `thangnx-mc/config-building`  
> **Status:** `RESEARCH_COMPLETE_PENDING_APPROVAL`  
> **Timestamp:** 2026-11-04  

---

## 1. Current Environment & Discovery Mechanics

### 1.1 Verified Local Environment
- **Platform:** Google Antigravity Agent Platform (`legion15iah7-dark-jet`). `[FACT]`
- **Operating System:** Windows 11 Pro 64-bit (`win32`). `[FACT]`
- **Primary Shell:** PowerShell. `[FACT]`  
  *Execution Policy Note:* PowerShell restricts `.ps1` execution scripts by default; CLI commands must invoke `.cmd` binaries (e.g., `npm.cmd`, `npx.cmd`). `[OBSERVATION]`
- **Local Runtimes Available:**
  - **Node.js:** `v24.16.0` (Native ESM, test runner, full PptxGenJS support). `[FACT]`
  - **Python:** `Python 3.12.13` and `Python 3.14.6` (via Python Launcher `py`). `[FACT]`
  - **Headless Office:** LibreOffice `26.2.4.2` (`soffice.com`) installed at `C:\Program Files\LibreOffice\program\soffice.com`. `[FACT]`
  - **Poppler / pdftoppm:** Not present in system `PATH`. `[FACT]`

### 1.2 Existing Skills & Discovery Hierarchy
The agent discovers customizations through specific levels defined in the Antigravity Customization Architecture:
1. **Workspace Root:** `.agents/skills/<name>/SKILL.md` (project-scoped, walking up to `.git`).
2. **Global Discovery:** `~/.gemini/config/skills/<name>/SKILL.md` (currently hosts 15 software engineering skills). `[FACT]`
3. **Application Builtins:** `~/.gemini/antigravity/builtin/skills/` (9 bundled system skills). `[FACT]`
4. **Plugins System:** `plugins/<name>/plugin.json` (packages skills, rules, and hooks as an isolated unit). `[FACT]`

### 1.3 Progressive Disclosure & Invocation Behavior
- **Metadata Registration:** During agent startup, only YAML frontmatter fields (`name`, `description`) are injected into the agent system context budget. `[FACT]`
- **On-Demand Loading:** The full body of `SKILL.md` and auxiliary files under `references/` are **not** loaded until the agent triggers a file read upon matching user intent. `[FACT]`
- **Current Routing State:** The global meta-skill `using-agent-skills` governs software engineering phases (Spec → Plan → Implement → Test → Review → Sync). **It contains no decision branch for presentations or slide generation.** `[FACT]`

---

## 2. External Repository Evaluation & Evidence Comparison

We evaluated four primary open-source candidates through direct API inspection of raw repository manifests, commit histories, licenses, and code trees.

| Evaluation Metric | [JetBrains/skills (slides)](https://github.com/JetBrains/skills/tree/main/slides) | [hiamberhuang/presentation-agent-skills](https://github.com/hiamberhuang/presentation-agent-skills) | [siril9/presentation-skill](https://github.com/siril9/presentation-skill) | [hunkim/slide-skill](https://github.com/hunkim/slide-skill) |
| :--- | :--- | :--- | :--- | :--- |
| **Origin & Author** | OpenAI Curated (mirrored by JetBrains) | Amber Huang (`hiamberhuang`) | siril9 | Sung Kim (`hunkim`) |
| **Latest Activity** | Upstream snapshot 2026 `[FACT]` | Pushed Sept 2026, active `[FACT]` | v0.14.0, updated Nov 2026 `[FACT]` | Updated Nov 2026 `[FACT]` |
| **License** | [Apache-2.0](https://github.com/JetBrains/skills/blob/main/slides/LICENSE.txt) `[FACT]` | [MIT](https://github.com/hiamberhuang/presentation-agent-skills/blob/main/LICENSE) `[FACT]` | [MIT](https://github.com/siril9/presentation-skill/blob/main/package.json) `[FACT]` | [MIT](https://github.com/hunkim/slide-skill/blob/main/LICENSE) `[FACT]` |
| **Architecture** | Single skill (`slides`) | Modular (5 distinct skills) | Monolithic CLI (`present.py` + runtime) | Single skill (`slide-design`) |
| **Output Format** | Native editable `.pptx` + `.js` source `[FACT]` | Native editable `.pptx` + XML patch `[FACT]` | Native editable `.pptx` via `outline.json` `[FACT]` | **HTML/CSS only (No PPTX)** `[FACT]` |
| **Editability** | Full (Text boxes, native charts) | Full (Modular per-slide JS) | Full (Contract-bound slot layout) | Browser DOM only |
| **PDF/Template Intake** | Visual comparison via PDF rasterization | Dedicated `ppt-pixel-restore` & `markitdown` | Structural intake via `reference_deck.py` | `NOT_VERIFIED` / None |
| **Storyline Quality** | Minimal (slide layout rules only) | **High** (Minto Pyramid, SCQA, Action Titles) | Medium (Automated intake brief) | **High** (Alexei Kapterev principles) |
| **Vietnamese Typography** | System font defaults (Arial/Calibri) | Theme object allows explicit font face | Rigid typography contract | Web font stack |
| **Screenshot & UI Demo** | Image crop/contain calculations | Negative space reservation, UI protection | Figure scaffolding & asset plan | Recommends vector drawing |
| **Rendering & QA Loop** | **High** (`render_slides.py`, `slides_test.py`) | Medium (`compare_images.py`, QA rubric) | **Very High** (Visual Review Receipt hash) | Playwright DOM check (HTML only) |
| **Dependencies** | Node (`pptxgenjs`), Python (`pdf2image`*) | Node (`pptxgenjs`), Python (`pillow`, `markitdown`) | Node (`sharp`, `react`), Python venv | Node / Playwright |
| **Collision Risk** | Low (Specific `.pptx` focus) | Very Low (Narrow role definitions) | Medium (CLI footprint & scripts) | High (Collides with `frontend-design`) |

*\*Note: `pdf2image` relies on external `pdftoppm` which is missing on Windows; LibreOffice headless or PyMuPDF is preferred.* `[OBSERVATION]`

### Key Analytical Takeaways:
1. **`hunkim/slide-skill` Disqualification for Generation:** While its communication rules ("One point per slide") are outstanding, it **cannot output `.pptx` files**. It produces standalone HTML decks.
2. **`siril9/presentation-skill` Overhead:** Extremely robust, but introduces excessive weight (React 19, Sharp, specialized Python runtime doctor, and dozens of test suites). Over-engineered for an isolated project skill.
3. **`JetBrains/skills (slides)` Practicality:** Best-in-class automated QA scripts (`slides_test.py` for overflow detection, `create_montage.py` for contact sheets, LibreOffice headless invocation).
4. **`hiamberhuang/presentation-agent-skills` Modular Excellence:** The only repository that cleanly breaks down the workflow into consulting storyline, template restoration, code generation, and multi-layer QA.

---

## 3. Recommended Skill Set (The Lean Triad)

To satisfy the Racehorse project requirements (professional, editable PPTX, adherence to lecturer PDF, product demo screenshots) without bloat, we recommend a **Lean Presentation Triad (3 Skills)**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE LEAN PRESENTATION TRIAD                          │
├──────────────────────────┬─────────────────────────┬───────────────────┤
│ 1. presentation-         │ 2. presentation-        │ 3. presentation-  │
│    storyline             │    pptx-builder         │    qa-render      │
├──────────────────────────┼─────────────────────────┼───────────────────┤
│ • Audience Brief & SCQA  │ • Per-Slide JS Modules  │ • LibreOffice     │
│ • Minto Pyramid Logic    │ • PptxGenJS Compilation │   Headless Render │
│ • "One Point Per Slide"  │ • PDF Text Extraction   │ • Overflow Linter │
│ • Action-Driven Titles   │ • Native Charts/Tables  │ • Font Checker    │
│ • Screenshot Direction   │ • Vietnamese Font Match │ • Contact Sheet   │
└──────────────────────────┴─────────────────────────┴───────────────────┘
```

### Role Breakdown & Responsibilities

1. **`presentation-storyline` (Story & Art Direction):**
   - *Sources:* Adapted from `hiamberhuang/consulting-deck-expert` and `hunkim/slide-skill`.
   - *Scope:* Guides deck purpose, audience analysis, SCQA problem-solution structure, action titles (e.g., *"Racehorse tự động hóa quản lý chuồng trại"* instead of *"Tổng quan"*), and reserves deliberate whitespace/negative space for real UI screenshots.
   - *Boundary:* Outputs Markdown/JSON slide maps; never generates executable PPTX code directly.

2. **`presentation-pptx-builder` (Template Intake & Code Generation):**
   - *Sources:* Adapted from `hiamberhuang/pptx-generator` and `ppt-pixel-restore`.
   - *Scope:* Extracts text from lecturer PDF templates via `markitdown`. Generates modular PptxGenJS scripts per slide (`slides/slide-01.js` ... `compile.js`). Configures Vietnamese font safety (`Segoe UI`, `Arial`). Ensures charts and tables are PowerPoint-native.
   - *Boundary:* Focuses purely on correct OOXML/PptxGenJS object construction.

3. **`presentation-qa-render` (Headless Render & Defect Linting):**
   - *Sources:* Adapted from `JetBrains/skills/slides` (OpenAI curated scripts) and `hiamberhuang/presentation-qa`.
   - *Scope:* Executes headless LibreOffice rendering (`soffice.com --headless`) to rasterize slides into PNGs. Runs `slides_test.py` to identify text overflow beyond canvas borders, generates a single montage contact sheet, and audits contrast/substitutions.
   - *Boundary:* Read-only inspection; reports defects back to `presentation-pptx-builder` for source fixes.

### Primary vs. Fallback Proposal
- **Primary Proposal (Recommended):** Deploy the **Lean Presentation Triad** inside an isolated Antigravity Plugin (`plugins/presentation-suite/`).
- **Fallback Proposal:** Deploy a single consolidated skill `slides` (from `JetBrains/skills/slides`), injecting a condensed consulting checklist directly into its `SKILL.md`.

---

## 4. Isolation & Routing Architecture

### 4.1 Comparison of Isolation Strategies in Antigravity

| Strategy | Feasibility | Context Isolation | Mis-trigger Risk | Verdict |
| :--- | :---: | :---: | :---: | :--- |
| **A. Directory Subfolders only** | Invalid `[FACT]` | Low | High | Antigravity scanner only traverses 1 level deep inside `skills/`. Nested folders are ignored. |
| **B. Directory + Metadata Triggers** | Feasible `[FACT]` | Medium | Medium-Low | Relies on carefully drafted negative prompt triggers in frontmatter. |
| **C. Plugin System Bundle (`plugin.json`)** | **Optimal** `[FACT]` | **High** | **Near Zero** | Packaged into `plugins/presentation-suite/`. Can be enabled/disabled as a unit in `config.json`. |
| **D. Explicit Subagent Invocation** | Feasible `[FACT]` | Absolute | Zero | Dedicated subagent spawned via `invoke_subagent` for presentation tasks only. |

### 4.2 Recommended Directory Structure
```
C:\Users\nguye\.gemini\config\
├── skills\                            <-- EXISTING 15 CODING SKILLS UNTOUCHED
│   ├── using-agent-skills\
│   ├── coding-agent-harness\
│   └── ...
└── plugins\presentation-suite\        <-- ISOLATED PPT WORKSPACE
    ├── plugin.json                    <-- Manifest toggled in config.json
    ├── rules\
    │   └── AGENTS.md                  <-- Hard boundary rules
    └── skills\
        ├── presentation-storyline\
        │   └── SKILL.md
        ├── presentation-pptx-builder\
        │   ├── SKILL.md
        │   └── references\
        └── presentation-qa-render\
            ├── SKILL.md
            └── scripts\
```

### 4.3 Explicit Negative Triggers
To prevent collisions with coding skills (`frontend-design`, `ui-ux-pro-max`, `documentation-and-adrs`), the YAML frontmatter across all presentation skills enforces strict negative boundaries:

```yaml
---
name: presentation-pptx-builder
description: >-
  Generate, edit, and reconstruct PowerPoint presentation slide decks (.pptx) using PptxGenJS.
  Use ONLY when the user explicitly requests creating, designing, or modifying presentation slides, 
  pitch decks, or .pptx files from scratch or from PDF/screenshot templates.
  DO NOT use for software frontend UI development, React components, CSS styling, 
  REST API documentation, or architecture markdown diagrams.
---
```

---

## 5. Validation Plan (Skill Discovery Matrix)

The test suite verifies that the agent routes correctly without cross-triggering between coding and slide generation:

| Test ID | Input Prompt Scenario | Expected Active Skill | Forbidden Skills | Success Criteria |
| :---: | :--- | :--- | :--- | :--- |
| **TC-01** | *"Fix NullPointerException in Racehorse OrderService.java"* | `debugging-and-error-recovery`, `incremental-implementation` | All `presentation-*` | Reads Java code, zero PPT/slide mentions. |
| **TC-02** | *"Add a React leaderboard component with Tailwind"* | `incremental-implementation`, `frontend-design` | `presentation-pptx-builder` | Modifies `.tsx`/`.jsx`; no PptxGenJS scripts created. |
| **TC-03** | *"Write a Flyway SQL migration adding status to horses"* | `incremental-implementation`, `source-driven-development` | All `presentation-*` | Generates `.sql` migration file only. |
| **TC-04** | *"Build a 10-slide deck for Racehorse demo based on lecturer's PDF"* | `presentation-storyline`, `presentation-pptx-builder` | `frontend-design`, `ui-ux-pro-max` | Analyzes PDF, generates SCQA outline and modular `.js` slide scripts. |
| **TC-05** | *"Edit slide 3 of current deck: update revenue chart numbers"* | `presentation-pptx-builder` | `coding-agent-harness`, `spec-driven-development` | Modifies only `slides/slide-03.js` and recompiles. |
| **TC-06** | *"Audit presentation.pptx for text overlaps and font errors without editing"* | `presentation-qa-render` | `presentation-pptx-builder` (write mode) | Headless renders PNGs, runs linter, outputs audit report. |
| **TC-07** | *"Create microservice architecture diagram for technical documentation"* | `documentation-and-adrs` | `presentation-pptx-builder` | Produces Mermaid code in markdown; no PPTX generated. |
| **TC-08** | *"Draft project README mentioning 'PowerPoint slides will be prepared later'"* | `documentation-and-adrs`, `project-context-sync` | All `presentation-*` | Recognizes passive mention; triggers no presentation tools. |

### Empirical Verification Mechanism
Verification does **not** rely on LLM conversational assertions. It must be proven via audit logs:
- Inspect transcript tool calls at: `C:\Users\nguye\.gemini\antigravity\brain\<conversation-id>\.system_generated\logs\transcript.jsonl`.
- Confirm presence of `read_file` for `presentation-*/SKILL.md` in TC-04, TC-05, TC-06.
- Confirm total absence of `presentation-*` tool calls in TC-01, TC-02, TC-03, TC-07, TC-08.

---

## 6. Implementation & Safe Rollback Plan

### 6.1 Step-by-Step Implementation (Post-Approval)
1. **Plugin Scaffolding:** Create `~/.gemini/config/plugins/presentation-suite/` and register `plugin.json`.
2. **Skill File Authoring:** Populate `SKILL.md` for the three triad skills with negative triggers.
3. **QA Script Provisioning:** Copy standalone verification scripts (`slides_test.py`, `render_slides.py`, `create_montage.py`) into `presentation-qa-render/scripts/`.
4. **Local Dependency Install:** Run task-local `npm.cmd install pptxgenjs` in task directories when generating decks.
5. **Dry-Run Validation:** Execute Discovery Test Cases TC-01 through TC-08.

### 6.2 Instant Rollback Procedure
If any unexpected routing regressions occur:
- **Instant Soft Disable:** In `~/.gemini/config/config.json`, toggle:
  ```json
  "plugins": {
    "presentation-suite": { "enabled": false }
  }
  ```
  *(Antigravity immediately excludes all bundled skills from the agent prompt context).*
- **Clean Hard Removal:** Delete directory `~/.gemini/config/plugins/presentation-suite/`. Leaves the existing 15 coding skills in their exact initial state.

---

## 7. Open Risks, Unknowns & Limitations

- `[UNKNOWN]`: Exact layout, aspect ratio, color palette, and font requirements of the lecturer's sample PDF (file not yet provided).
- `[REQUIRES EXTERNAL VERIFICATION]`: Visual fidelity of PptxGenJS-generated shapes and fonts when opened directly within Microsoft PowerPoint on macOS or legacy Windows versions.
- `[OBSERVATION]`: Absence of `pdftoppm` prevents direct use of `pdf2image`. The QA pipeline must route PDF rasterization through LibreOffice headless or standalone wheels like `PyMuPDF` (`fitz`).
- `[FACT]`: No skills or system files have been installed or modified during this research phase.

---

**Status:** `RESEARCH_COMPLETE_PENDING_APPROVAL`
