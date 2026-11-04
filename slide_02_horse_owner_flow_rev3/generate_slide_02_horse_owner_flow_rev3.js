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
  x: 0.50,
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
  x: 0.50,
  y: 0.86,
  w: 9.00,
  h: 0.34,
  fontSize: 16,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2', // FPT Blue accent, matching sample Page 11
  align: 'left',
  valign: 'middle'
});

// Subtitle / context description
slide.addText("Horse Registration, Document Submission, Service Deposit & Intake Validation", {
  x: 0.50,
  y: 1.18,
  w: 9.00,
  h: 0.22,
  fontSize: 10,
  fontFace: 'Arial',
  color: '64748B',
  italic: true,
  align: 'left',
  valign: 'top'
});

// Separator line
slide.addShape(pres.ShapeType.line, {
  x: 0.50,
  y: 1.44,
  w: 9.00,
  h: 0,
  line: { color: 'E2E8F0', width: 1 }
});

// =========================================================================
// ROW 1: HORSE OWNER FLOW (TOP TRACK: y = 1.80", h = 0.75")
// Strict Rule: ONLY feature names and directional arrows. NO step labels.
// =========================================================================

// Actor 1 Pill: HORSE OWNER
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 1.80,
  w: 1.25,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'EDF3EB' }, // Sage Green Light Tint
  line: { color: '5E7A54', width: 1.5 }
});

slide.addText("HORSE OWNER", {
  x: 0.50,
  y: 1.80,
  w: 1.25,
  h: 0.75,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Actor 1 -> Box 1
slide.addShape(pres.ShapeType.rightArrow, {
  x: 1.82,
  y: 2.10,
  w: 0.16,
  h: 0.15,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 1: Register Horse
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.04,
  y: 1.80,
  w: 1.62,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: '94A3B8', width: 1.2 }
});

slide.addText("Register Horse", {
  x: 2.04,
  y: 1.80,
  w: 1.62,
  h: 0.75,
  fontSize: 11.5,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 1 -> Box 2
slide.addShape(pres.ShapeType.rightArrow, {
  x: 3.72,
  y: 2.10,
  w: 0.16,
  h: 0.15,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 2: Upload Documents
slide.addShape(pres.ShapeType.roundRect, {
  x: 3.94,
  y: 1.80,
  w: 1.68,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: '94A3B8', width: 1.2 }
});

slide.addText("Upload Documents", {
  x: 3.94,
  y: 1.80,
  w: 1.68,
  h: 0.75,
  fontSize: 11.5,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 2 -> Box 3
slide.addShape(pres.ShapeType.rightArrow, {
  x: 5.68,
  y: 2.10,
  w: 0.16,
  h: 0.15,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 3: Pay Service Deposit
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.90,
  y: 1.80,
  w: 1.78,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: '94A3B8', width: 1.2 }
});

slide.addText("Pay Service Deposit", {
  x: 5.90,
  y: 1.80,
  w: 1.78,
  h: 0.75,
  fontSize: 11.5,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 3 -> Box 4
slide.addShape(pres.ShapeType.rightArrow, {
  x: 7.74,
  y: 2.10,
  w: 0.16,
  h: 0.15,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 4: Submit for Intake
slide.addShape(pres.ShapeType.roundRect, {
  x: 7.96,
  y: 1.80,
  w: 1.54,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'F0F7FF' },
  line: { color: '0265B2', width: 1.5 }
});

slide.addText("Submit for Intake", {
  x: 7.96,
  y: 1.80,
  w: 1.54,
  h: 0.75,
  fontSize: 11.5,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// HANDOFF CONNECTOR: BOX 4 -> REVIEW GATE (VERTICAL ARROW & LABEL)
// =========================================================================

slide.addShape(pres.ShapeType.downArrow, {
  x: 8.65,
  y: 2.65,
  w: 0.18,
  h: 0.48,
  fill: { color: '5E7A54' },
  line: { color: '173129', width: 0.5 }
});

slide.addText("Triage Handoff", {
  x: 7.15,
  y: 2.78,
  w: 1.45,
  h: 0.22,
  fontSize: 9,
  fontFace: 'Arial',
  bold: true,
  color: '5E7A54',
  align: 'right',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Route line from Handoff to Row 2 Intake Review
slide.addShape(pres.ShapeType.line, {
  x: 8.74,
  y: 3.13,
  w: -4.24,
  h: 0.52,
  line: { color: '5E7A54', width: 1.5, dashType: 'dash' }
});

// =========================================================================
// ROW 2: REVIEW & DECISION OUTCOMES (BOTTOM TRACK: y = 3.65")
// =========================================================================

// Review Authority Pill: CLUB & VET
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 3.65,
  w: 1.25,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'F1F5F9' },
  line: { color: '94A3B8', width: 1.5 }
});

slide.addText("CLUB & VET", {
  x: 0.50,
  y: 3.65,
  w: 1.25,
  h: 0.75,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '0F172A',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Authority -> Box 5
slide.addShape(pres.ShapeType.rightArrow, {
  x: 1.82,
  y: 3.95,
  w: 0.16,
  h: 0.15,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 5: Intake Review
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.04,
  y: 3.65,
  w: 2.30,
  h: 0.75,
  rectRadius: 0.08,
  fill: { color: 'F8FAFC' },
  line: { color: '5E7A54', width: 1.5 }
});

slide.addText("Intake Review", {
  x: 2.04,
  y: 3.65,
  w: 2.30,
  h: 0.75,
  fontSize: 12.5,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Branch Arrows
// Arrow to Approve
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.45,
  y: 3.47,
  w: 0.24,
  h: 0.16,
  fill: { color: '16A34A' },
  line: { color: '15803D', width: 0.5 }
});

// Arrow to Reject
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.45,
  y: 4.27,
  w: 0.24,
  h: 0.16,
  fill: { color: 'DC2626' },
  line: { color: 'B91C1C', width: 0.5 }
});

// Box A: Approve (Training Ready)
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.75,
  y: 3.25,
  w: 3.90,
  h: 0.60,
  rectRadius: 0.08,
  fill: { color: 'F0FDF4' },
  line: { color: '22C55E', width: 1.5 }
});

slide.addText("Approve (Training Ready)", {
  x: 4.75,
  y: 3.25,
  w: 3.90,
  h: 0.60,
  fontSize: 12,
  fontFace: 'Arial',
  bold: true,
  color: '15803D',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Box B: Reject (Medical Hold)
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.75,
  y: 4.05,
  w: 3.90,
  h: 0.60,
  rectRadius: 0.08,
  fill: { color: 'FEF2F2' },
  line: { color: 'EF4444', width: 1.5 }
});

slide.addText("Reject (Medical Hold)", {
  x: 4.75,
  y: 4.05,
  w: 3.90,
  h: 0.60,
  fontSize: 12,
  fontFace: 'Arial',
  bold: true,
  color: 'B91C1C',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// FOOTER BAR
// =========================================================================

slide.addShape(pres.ShapeType.line, {
  x: 0.50,
  y: 5.25,
  w: 9.00,
  h: 0,
  line: { color: 'E2E8F0', width: 0.75 }
});

slide.addText("Racehorse Management System · Horse Owner Workflow (HO-001, HO-002, HO-003, WF-01)", {
  x: 0.50,
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
  w: 3.00,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '94A3B8',
  align: 'right',
  margin: [1, 2, 1, 2]
});

// Save PPTX
const outputPath = path.join(__dirname, 'racehorse_slide_02_horse_owner_flow_rev3.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`[SUCCESS] PPTX generated: ${outputPath}`);
  })
  .catch(err => {
    console.error(`[ERROR] Failed to generate PPTX: ${err}`);
    process.exit(1);
  });
