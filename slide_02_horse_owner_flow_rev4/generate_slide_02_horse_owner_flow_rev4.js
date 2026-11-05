const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pres = new pptxgen();

// Set 16:9 widescreen layout (10.0 x 5.625 inches)
pres.layout = 'LAYOUT_16x9';

const slide = pres.addSlide();

// Background: Clean pure white
slide.background = { color: 'FFFFFF' };

// =========================================================================
// 1. HEADER ZONE (LECTURER SAMPLE COMPLIANT)
// =========================================================================

// Authentic FPT University Logo (Top-Left)
// Original aspect ratio 400x156 = 2.5641
const logoPath = path.join(__dirname, 'fpt_university_logo.png');
slide.addImage({
  path: logoPath,
  x: 0.50,
  y: 0.28,
  w: 1.30,
  h: 1.30 / 2.5641 // 0.507 in
});

// Centered Category Header: "MAIN FLOW"
slide.addText("MAIN FLOW", {
  x: 3.50,
  y: 0.24,
  w: 3.00,
  h: 0.36,
  fontSize: 20,
  fontFace: 'Arial',
  bold: true,
  color: '173129',
  align: 'center',
  valign: 'middle',
  charSpacing: 2
});

// Slide Title: "FLOW 1: HORSE OWNER ONBOARDING"
slide.addText("FLOW 1: HORSE OWNER ONBOARDING", {
  x: 0.50,
  y: 0.82,
  w: 9.00,
  h: 0.32,
  fontSize: 16,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2', // Authentic FPT Blue accent
  align: 'left',
  valign: 'middle'
});

// Subtitle / context description
slide.addText("Horse Registration, Document Submission, Service Deposit & Intake Validation", {
  x: 0.50,
  y: 1.14,
  w: 9.00,
  h: 0.20,
  fontSize: 9.5,
  fontFace: 'Arial',
  color: '64748B',
  italic: true,
  align: 'left',
  valign: 'top'
});

// Header separator line
slide.addShape(pres.ShapeType.line, {
  x: 0.50,
  y: 1.38,
  w: 9.00,
  h: 0,
  line: { color: 'E2E8F0', width: 1 }
});

// =========================================================================
// 2. TRACK 1: HORSE OWNER PROCESS FLOW (y = 1.68", h = 0.82")
// Strict Rule: ONLY Icon + Short Feature Name. NO Step labels.
// =========================================================================

// Actor 1 Pill: HORSE OWNER
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 1.68,
  w: 1.25,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'EDF3EB' }, // Sage Green Light Tint
  line: { color: '5E7A54', width: 1.5 }
});

// Actor 1 Icon: Authentic User Avatar from Sample P11
slide.addImage({
  path: path.join(__dirname, 'icon_user_owner.png'),
  x: 0.925 - 0.20, // 0.725
  y: 1.74,
  w: 0.40,
  h: 0.40
});

// Actor 1 Label
slide.addText("HORSE OWNER", {
  x: 0.50,
  y: 2.18,
  w: 1.25,
  h: 0.28,
  fontSize: 8.5,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle'
});

// Arrow Actor 1 -> Box 1
slide.addShape(pres.ShapeType.rightArrow, {
  x: 1.83,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 1: Register Horse
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.06,
  y: 1.68,
  w: 1.68,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addImage({
  path: path.join(__dirname, 'icon_register_horse.png'),
  x: 2.18,
  y: 1.84,
  w: 0.50,
  h: 0.50
});

slide.addText("Register Horse", {
  x: 2.72,
  y: 1.68,
  w: 0.96,
  h: 0.82,
  fontSize: 11,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 1 -> Box 2
slide.addShape(pres.ShapeType.rightArrow, {
  x: 3.82,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 2: Upload Documents
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.03,
  y: 1.68,
  w: 1.68,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addImage({
  path: path.join(__dirname, 'icon_upload_docs.png'),
  x: 4.15,
  y: 1.84,
  w: 0.50,
  h: 0.50
});

slide.addText("Upload Documents", {
  x: 4.69,
  y: 1.68,
  w: 0.96,
  h: 0.82,
  fontSize: 11,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 2 -> Box 3
slide.addShape(pres.ShapeType.rightArrow, {
  x: 5.76,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 3: Pay Service Deposit
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.97,
  y: 1.68,
  w: 1.74,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1.2 }
});

slide.addImage({
  path: path.join(__dirname, 'icon_pay_deposit.png'),
  x: 6.09,
  y: 1.84,
  w: 0.50,
  h: 0.50
});

slide.addText("Pay Service Deposit", {
  x: 6.63,
  y: 1.68,
  w: 1.02,
  h: 0.82,
  fontSize: 11,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// Arrow Box 3 -> Box 4
slide.addShape(pres.ShapeType.rightArrow, {
  x: 7.76,
  y: 2.02,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 4: Submit for Intake
slide.addShape(pres.ShapeType.roundRect, {
  x: 7.97,
  y: 1.68,
  w: 1.68,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'F0F7FF' },
  line: { color: '0265B2', width: 1.5 }
});

slide.addImage({
  path: path.join(__dirname, 'icon_submit_intake.png'),
  x: 8.09,
  y: 1.84,
  w: 0.50,
  h: 0.50
});

slide.addText("Submit for Intake", {
  x: 8.63,
  y: 1.68,
  w: 0.96,
  h: 0.82,
  fontSize: 11,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// 3. MANDATORY CRITICAL REQUIREMENT: ORTHOGONAL CONNECTOR ROUTING
// Strict Rule: Horizontal & Vertical segments only (90-degree turns).
// ABSOLUTELY NO DIAGONAL LINES. ZERO BOX CUTS. CLEAR WHITESPACE ONLY.
// =========================================================================

// Handoff from Box 4 (Submit for Intake) to Box 5 (Intake Review):
// Box 4 center: x = 7.97 + 0.84 = 8.81", bottom = 2.50"
// Box 5 center: x = 2.06 + 1.075 = 3.135", top = 3.65"
// Whitespace corridor between Row 1 and Row 2: y = 2.50" to 3.28" (height = 0.78")
// Corridor midline: y = 2.88"

// Segment 1 (Vertical Down): Exits Box 4 bottom into whitespace corridor
slide.addShape(pres.ShapeType.line, {
  x: 8.81,
  y: 2.50,
  w: 0,
  h: 0.38,
  line: { color: '5E7A54', width: 1.5 }
});

// Segment 2 (Horizontal Left): Travels through open corridor at y = 2.88"
slide.addShape(pres.ShapeType.line, {
  x: 8.81,
  y: 2.88,
  w: -5.675,
  h: 0,
  line: { color: '5E7A54', width: 1.5 }
});

// Segment 3 (Vertical Down): Drops down from corridor to top center of Box 5
slide.addShape(pres.ShapeType.line, {
  x: 3.135,
  y: 2.88,
  w: 0,
  h: 0.64,
  line: { color: '5E7A54', width: 1.5 }
});

// Downward Arrowhead pointing into top center of Intake Review
slide.addShape(pres.ShapeType.downArrow, {
  x: 3.055,
  y: 3.52,
  w: 0.16,
  h: 0.13,
  fill: { color: '5E7A54' },
  line: { color: '173129', width: 0.5 }
});

// Subtle Corridor Handoff Label (Placed safely in whitespace above horizontal line)
slide.addText("Intake Submission Handoff", {
  x: 4.50,
  y: 2.68,
  w: 3.00,
  h: 0.18,
  fontSize: 8.5,
  fontFace: 'Arial',
  bold: true,
  italic: true,
  color: '5E7A54',
  align: 'center',
  valign: 'middle'
});

// =========================================================================
// 4. TRACK 2: REVIEW AUTHORITY & DECISION OUTCOMES (y = 3.65", h = 0.82")
// =========================================================================

// Actor 2 Pill: CLUB & VET (Review Authority)
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 3.65,
  w: 1.25,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'F1F5F9' },
  line: { color: '94A3B8', width: 1.5 }
});

// Actor 2 Icon: Authentic Admin Avatar from Sample P11
slide.addImage({
  path: path.join(__dirname, 'icon_club_vet.png'),
  x: 0.925 - 0.20, // 0.725
  y: 3.71,
  w: 0.40,
  h: 0.40
});

// Actor 2 Label
slide.addText("CLUB & VET", {
  x: 0.50,
  y: 4.15,
  w: 1.25,
  h: 0.28,
  fontSize: 8.5,
  fontFace: 'Arial',
  bold: true,
  color: '0F172A',
  align: 'center',
  valign: 'middle'
});

// Arrow Authority -> Box 5
slide.addShape(pres.ShapeType.rightArrow, {
  x: 1.83,
  y: 3.99,
  w: 0.16,
  h: 0.14,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Box 5: Intake Review
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.06,
  y: 3.65,
  w: 2.15,
  h: 0.82,
  rectRadius: 0.08,
  fill: { color: 'F4F8F3' },
  line: { color: '5E7A54', width: 1.6 }
});

slide.addImage({
  path: path.join(__dirname, 'icon_intake_review.png'),
  x: 2.20,
  y: 3.81,
  w: 0.50,
  h: 0.50
});

slide.addText("Intake Review", {
  x: 2.75,
  y: 3.65,
  w: 1.40,
  h: 0.82,
  fontSize: 12.5,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// 5. ORTHOGONAL DECISION BRANCHING: INTAKE REVIEW -> APPROVE / REJECT
// Box 5 right edge: x = 4.21", center y = 4.06"
// Approve center y = 3.59", Reject center y = 4.43"
// Junction at x = 4.58"
// =========================================================================

// Horizontal Trunk Line from Box 5 right edge to Junction x = 4.58"
slide.addShape(pres.ShapeType.line, {
  x: 4.21,
  y: 4.06,
  w: 0.37,
  h: 0,
  line: { color: '5E7A54', width: 1.5 }
});

// --- Branch to Approve ---
// Vertical Up to y = 3.59"
slide.addShape(pres.ShapeType.line, {
  x: 4.58,
  y: 4.06,
  w: 0,
  h: -0.47,
  line: { color: '16A34A', width: 1.5 }
});

// Horizontal Right to x = 4.82"
slide.addShape(pres.ShapeType.line, {
  x: 4.58,
  y: 3.59,
  w: 0.24,
  h: 0,
  line: { color: '16A34A', width: 1.5 }
});

// Right Arrowhead into Approve
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.82,
  y: 3.52,
  w: 0.16,
  h: 0.14,
  fill: { color: '16A34A' },
  line: { color: '15803D', width: 0.5 }
});

// Box 6: Approve (Decision Outcome)
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.00,
  y: 3.28,
  w: 4.65,
  h: 0.62,
  rectRadius: 0.08,
  fill: { color: 'F0FDF4' },
  line: { color: '22C55E', width: 1.5 }
});

// Authentic Approve Checkmark Icon from Sample P11
slide.addImage({
  path: path.join(__dirname, 'icon_approve.png'),
  x: 5.15,
  y: 3.39,
  w: 0.40,
  h: 0.40
});

slide.addText("Approve", {
  x: 5.65,
  y: 3.28,
  w: 3.90,
  h: 0.62,
  fontSize: 12,
  fontFace: 'Arial',
  bold: true,
  color: '15803D',
  align: 'left',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// --- Branch to Reject ---
// Vertical Down to y = 4.43"
slide.addShape(pres.ShapeType.line, {
  x: 4.58,
  y: 4.06,
  w: 0,
  h: 0.37,
  line: { color: 'DC2626', width: 1.5 }
});

// Horizontal Right to x = 4.82"
slide.addShape(pres.ShapeType.line, {
  x: 4.58,
  y: 4.43,
  w: 0.24,
  h: 0,
  line: { color: 'DC2626', width: 1.5 }
});

// Right Arrowhead into Reject
slide.addShape(pres.ShapeType.rightArrow, {
  x: 4.82,
  y: 4.36,
  w: 0.16,
  h: 0.14,
  fill: { color: 'DC2626' },
  line: { color: 'B91C1C', width: 0.5 }
});

// Box 7: Reject (Decision Outcome)
slide.addShape(pres.ShapeType.roundRect, {
  x: 5.00,
  y: 4.12,
  w: 4.65,
  h: 0.62,
  rectRadius: 0.08,
  fill: { color: 'FEF2F2' },
  line: { color: 'EF4444', width: 1.5 }
});

// Authentic Reject Cross Icon from Sample P11
slide.addImage({
  path: path.join(__dirname, 'icon_reject.png'),
  x: 5.15,
  y: 4.23,
  w: 0.40,
  h: 0.40
});

slide.addText("Reject", {
  x: 5.65,
  y: 4.12,
  w: 3.90,
  h: 0.62,
  fontSize: 12,
  fontFace: 'Arial',
  bold: true,
  color: 'B91C1C',
  align: 'left',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// =========================================================================
// 6. FOOTER ZONE
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
  w: 6.00,
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
const outputPath = path.join(__dirname, 'racehorse_slide_02_horse_owner_flow_rev4.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`[SUCCESS] PPTX generated: ${outputPath}`);
  })
  .catch(err => {
    console.error(`[ERROR] Failed to generate PPTX: ${err}`);
    process.exit(1);
  });
