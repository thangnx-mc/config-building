const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pres = new pptxgen();

// Set 16:9 widescreen layout (10 x 5.625 inches)
pres.layout = 'LAYOUT_16x9';

const slide = pres.addSlide();

// Background: Clean pure white
slide.background = { color: 'FFFFFF' };

// 1. Authentic FPT University Logo (Top-Left)
// Original aspect ratio 400x156 = 2.5641
const logoPath = path.join(__dirname, 'fpt_university_logo.png');
slide.addImage({
  path: logoPath,
  x: 0.60,
  y: 0.30,
  w: 1.30,
  h: 1.30 / 2.5641 // 0.507 in
});

// 2. Centered Top Category Header: "MAIN FLOW"
slide.addText("MAIN FLOW", {
  x: 3.50,
  y: 0.26,
  w: 3.00,
  h: 0.35,
  fontSize: 20,
  fontFace: 'Arial',
  bold: true,
  color: '173129',
  align: 'center',
  valign: 'middle',
  charSpacing: 2
});

// 3. Slide Title & Subtitle: "FLOW 1: HORSE OWNER ONBOARDING"
slide.addText("FLOW 1: HORSE OWNER ONBOARDING", {
  x: 0.60,
  y: 0.86,
  w: 8.80,
  h: 0.34,
  fontSize: 15,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2', // FPT Blue accent, matching sample Page 11
  align: 'left',
  valign: 'middle'
});

// Subtitle / context description
slide.addText("End-to-End Horse Registration, Service Package Payment & Club Intake Validation", {
  x: 0.60,
  y: 1.18,
  w: 8.80,
  h: 0.22,
  fontSize: 9.5,
  fontFace: 'Arial',
  color: '64748B',
  italic: true,
  align: 'left',
  valign: 'top'
});

// Separator line
slide.addShape(pres.ShapeType.line, {
  x: 0.60,
  y: 1.44,
  w: 8.80,
  h: 0,
  line: { color: 'E2E8F0', width: 1 }
});

// =========================================================================
// ROW 1: HORSE OWNER ACTIONS (TOP SWIMLANE: x = 0.60" -> 9.40", y = 1.62")
// =========================================================================

// Actor 1 Badge: HORSE OWNER
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.60,
  y: 1.62,
  w: 1.35,
  h: 0.96,
  rectRadius: 0.08,
  fill: { color: 'EDF3EB' }, // Sage Green Light Tint
  line: { color: '5E7A54', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 0.68,
  y: 1.70,
  w: 1.19,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'D9E5D7' },
  line: { color: '5E7A54', width: 0.5 }
});

slide.addText("ROLE: ACTOR", {
  x: 0.68,
  y: 1.70,
  w: 1.19,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("HORSE OWNER", {
  x: 0.65,
  y: 1.94,
  w: 1.25,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

slide.addText("Initiating Client", {
  x: 0.65,
  y: 2.22,
  w: 1.25,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '475569',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

// Arrow Actor 1 -> Step 1
slide.addShape(pres.ShapeType.rightArrow, {
  x: 2.01,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 1: Enter Horse Info
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.22,
  y: 1.62,
  w: 1.56,
  h: 0.96,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 2.30,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'F1F5F9' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("STEP 01", {
  x: 2.30,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '475569',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Enter Horse Info", {
  x: 2.30,
  y: 1.94,
  w: 1.40,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  margin: [1, 2, 1, 2]
});

slide.addText("Pedigree & Microchip ID", {
  x: 2.30,
  y: 2.22,
  w: 1.40,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '64748B',
  margin: [1, 2, 1, 2]
});

// Arrow Step 1 -> Step 2
slide.addShape(pres.ShapeType.rightArrow, {
  x: 3.84,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 2: Upload Documents
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.05,
  y: 1.62,
  w: 1.56,
  h: 0.96,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 4.13,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'F1F5F9' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("STEP 02", {
  x: 4.13,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '475569',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Upload Documents", {
  x: 4.13,
  y: 1.94,
  w: 1.40,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  margin: [1, 2, 1, 2]
});

slide.addText("Passport & Vaccines", {
  x: 4.13,
  y: 2.22,
  w: 1.40,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '64748B',
  margin: [1, 2, 1, 2]
});

// Arrow Step 2 -> Step 3
slide.addShape(pres.ShapeType.rightArrow, {
  x: 5.67,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 3: Pay Service Deposit
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.88,
  y: 1.62,
  w: 1.56,
  h: 0.96,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 5.96,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'F1F5F9' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("STEP 03", {
  x: 5.96,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '475569',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Pay Service Deposit", {
  x: 5.96,
  y: 1.94,
  w: 1.40,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  margin: [1, 2, 1, 2]
});

slide.addText("PayOS Plan (P30/P90)", {
  x: 5.96,
  y: 2.22,
  w: 1.40,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '64748B',
  margin: [1, 2, 1, 2]
});

// Arrow Step 3 -> Step 4
slide.addShape(pres.ShapeType.rightArrow, {
  x: 7.50,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 4: Submit for Intake
slide.addShape(pres.ShapeType.roundRect, {
  x: 7.71,
  y: 1.62,
  w: 1.69,
  h: 0.96,
  rectRadius: 0.08,
  fill: { color: 'F0F7FF' },
  line: { color: '0265B2', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 7.79,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'DBEAFE' },
  line: { color: '93C5FD', width: 0.5 }
});

slide.addText("STEP 04", {
  x: 7.79,
  y: 1.70,
  w: 0.65,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '1E40AF',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Submit for Intake", {
  x: 7.79,
  y: 1.94,
  w: 1.53,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '0369A1',
  margin: [1, 2, 1, 2]
});

slide.addText("Queue for Club Triage", {
  x: 7.79,
  y: 2.22,
  w: 1.53,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '0284C7',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// HANDOFF CONNECTOR: STEP 4 -> REVIEW (VERTICAL ARROW & LABEL)
// =========================================================================

slide.addShape(pres.ShapeType.downArrow, {
  x: 8.46,
  y: 2.65,
  w: 0.18,
  h: 0.45,
  fill: { color: '5E7A54' },
  line: { color: '173129', width: 0.5 }
});

slide.addText("Intake Queue Handoff", {
  x: 6.95,
  y: 2.76,
  w: 1.45,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '5E7A54',
  align: 'right',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// ROW 2: REVIEW & DECISION OUTCOMES (BOTTOM TRACK: y = 3.35" -> 5.05")
// =========================================================================

// Actor 2 Badge: CLUB ADMIN & VET
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.60,
  y: 3.52,
  w: 1.35,
  h: 1.35,
  rectRadius: 0.08,
  fill: { color: 'F1F5F9' },
  line: { color: '94A3B8', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 0.68,
  y: 3.62,
  w: 1.19,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'E2E8F0' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("AUTHORITY", {
  x: 0.68,
  y: 3.62,
  w: 1.19,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '334155',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("CLUB & VET", {
  x: 0.65,
  y: 3.90,
  w: 1.25,
  h: 0.24,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '0F172A',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

slide.addText("Clinical Triage &\nStall Allocation", {
  x: 0.65,
  y: 4.20,
  w: 1.25,
  h: 0.55,
  fontSize: 8,
  fontFace: 'Arial',
  color: '475569',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

// Arrow Actor 2 -> Step 5 Review
slide.addShape(pres.ShapeType.rightArrow, {
  x: 2.01,
  y: 4.10,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 5: Document & Clinical Review (Evaluation Gate)
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.22,
  y: 3.52,
  w: 2.70,
  h: 1.35,
  rectRadius: 0.08,
  fill: { color: 'F8FAFC' },
  line: { color: '5E7A54', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 2.32,
  y: 3.62,
  w: 1.35,
  h: 0.20,
  rectRadius: 0.04,
  fill: { color: 'DCFCE7' },
  line: { color: '86EFAC', width: 0.5 }
});

slide.addText("EVALUATION GATE", {
  x: 2.32,
  y: 3.62,
  w: 1.35,
  h: 0.20,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '166534',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Document & Clinical Review", {
  x: 2.32,
  y: 3.90,
  w: 2.50,
  h: 0.24,
  fontSize: 10.5,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  margin: [1, 2, 1, 2]
});

slide.addText("• Verify ownership proof & service deposit\n• 31-region 3D anatomical health & vitals audit", {
  x: 2.32,
  y: 4.20,
  w: 2.50,
  h: 0.55,
  fontSize: 8,
  fontFace: 'Arial',
  color: '334155',
  margin: [1, 2, 1, 2]
});

// Horizontal Connector line from Step 4 down to Step 5
slide.addShape(pres.ShapeType.line, {
  x: 8.55,
  y: 3.10,
  w: -3.63,
  h: 0.42,
  line: { color: '5E7A54', width: 1.5, dashType: 'dash' }
});

// Fork Arrows to Branches
// Arrow to Branch A (Approve)
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.98,
  y: 3.75,
  w: 0.22,
  h: 0.16,
  fill: { color: '16A34A' },
  line: { color: '15803D', width: 0.5 }
});

// Arrow to Branch B (Reject)
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.98,
  y: 4.45,
  w: 0.22,
  h: 0.16,
  fill: { color: 'DC2626' },
  line: { color: 'B91C1C', width: 0.5 }
});

// Branch A: APPROVE (FIT & ACTIVE)
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.25,
  y: 3.46,
  w: 4.15,
  h: 0.68,
  rectRadius: 0.08,
  fill: { color: 'F0FDF4' },
  line: { color: '22C55E', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 5.35,
  y: 3.54,
  w: 0.95,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'DCFCE7' },
  line: { color: '86EFAC', width: 0.5 }
});

slide.addText("APPROVE", {
  x: 5.35,
  y: 3.54,
  w: 0.95,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '15803D',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Activate for Training", {
  x: 6.38,
  y: 3.52,
  w: 2.90,
  h: 0.22,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '14532D',
  margin: [1, 2, 1, 2]
});

slide.addText("Stall allocated (max 4/stable) · Health certified FIT · Unlocks training roster", {
  x: 5.35,
  y: 3.82,
  w: 3.95,
  h: 0.24,
  fontSize: 8,
  fontFace: 'Arial',
  color: '166534',
  margin: [1, 2, 1, 2]
});

// Branch B: REJECT (MEDICAL HOLD)
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.25,
  y: 4.22,
  w: 4.15,
  h: 0.68,
  rectRadius: 0.08,
  fill: { color: 'FEF2F2' },
  line: { color: 'EF4444', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 5.35,
  y: 4.30,
  w: 0.95,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'FEE2E2' },
  line: { color: 'FCA5A5', width: 0.5 }
});

slide.addText("REJECT", {
  x: 5.35,
  y: 4.30,
  w: 0.95,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: 'B91C1C',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Medical Quarantine / Return", {
  x: 6.38,
  y: 4.28,
  w: 2.90,
  h: 0.22,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '7F1D1D',
  margin: [1, 2, 1, 2]
});

slide.addText("Training lock active (FR11) · Health defect logged · Isolation stall assigned", {
  x: 5.35,
  y: 4.58,
  w: 3.95,
  h: 0.24,
  fontSize: 8,
  fontFace: 'Arial',
  color: '991B1B',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// FOOTER BAR
// =========================================================================

slide.addShape(pres.ShapeType.line, {
  x: 0.60,
  y: 5.25,
  w: 8.80,
  h: 0,
  line: { color: 'E2E8F0', width: 0.75 }
});

slide.addText("Racehorse Management System · Horse Owner Workflow (HO-001, HO-002, HO-003, WF-01)", {
  x: 0.60,
  y: 5.30,
  w: 5.50,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  color: '94A3B8',
  margin: [1, 2, 1, 2]
});

slide.addText("CAPSTONE PROJECT · SP25SE136", {
  x: 6.50,
  y: 5.30,
  w: 2.90,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '94A3B8',
  align: 'right',
  margin: [1, 2, 1, 2]
});

// Save PPTX
const outputPath = path.join(__dirname, 'racehorse_slide_02_horse_owner_flow_rev2.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`[SUCCESS] PPTX generated: ${outputPath}`);
  })
  .catch(err => {
    console.error(`[ERROR] Failed to generate PPTX: ${err}`);
    process.exit(1);
  });
