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
  y: 0.25,
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

// 3. Slide Title & Subtitle: "FLOW 1: HORSE REGISTRATION & VETERINARY INTAKE"
slide.addText("FLOW 1: HORSE REGISTRATION & VETERINARY INTAKE", {
  x: 0.50,
  y: 0.85,
  w: 9.00,
  h: 0.36,
  fontSize: 15,
  fontFace: 'Arial',
  bold: true,
  color: '0265B2', // FPT Blue accent, matching sample Page 11
  align: 'left',
  valign: 'middle'
});

// Subtitle / context description (10pt recommended)
slide.addText("End-to-End Onboarding Pipeline: Identity Registration, PayOS Deposit, Clinical 3D Triage & Stable Allocation", {
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

// ==========================================
// ACTOR 1: HORSE OWNER (TOP SWIMLANE)
// ==========================================

// Actor 1 Label Card
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 1.56,
  w: 1.35,
  h: 1.56,
  rectRadius: 0.08,
  fill: { color: 'F8FAFC' },
  line: { color: '94A3B8', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 0.58,
  y: 1.64,
  w: 1.19,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'E2E8F0' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("ROLE: ACTOR 1", {
  x: 0.58,
  y: 1.64,
  w: 1.19,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '475569',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("HORSE OWNER", {
  x: 0.55,
  y: 1.90,
  w: 1.25,
  h: 0.24,
  fontSize: 10.5,
  fontFace: 'Arial',
  bold: true,
  color: '0F172A',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

slide.addText("Initiating Client\n• Declares Pedigree\n• Selects Service Tier\n• Completes Deposit", {
  x: 0.55,
  y: 2.18,
  w: 1.25,
  h: 0.88,
  fontSize: 8,
  fontFace: 'Arial',
  color: '475569',
  align: 'left',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

// Step 1 Card: Declare Horse Profile
slide.addShape(pres.ShapeType.roundRect, {
  x: 2.05,
  y: 1.56,
  w: 1.80,
  h: 1.56,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 2.15,
  y: 1.64,
  w: 0.70,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'E2E8F0' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("STEP 01", {
  x: 2.15,
  y: 1.64,
  w: 0.70,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '334155',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Declare Horse Profile", {
  x: 2.15,
  y: 1.90,
  w: 1.65,
  h: 0.25,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  margin: [1, 2, 1, 2]
});

slide.addText("• Microchip & Registration ID\n• 3-Generation Pedigree Lineage\n• Ownership Share Ratio %\n• Initial Health Declarations", {
  x: 2.15,
  y: 2.18,
  w: 1.65,
  h: 0.68,
  fontSize: 8,
  fontFace: 'Arial',
  color: '475569',
  margin: [1, 2, 1, 2]
});

slide.addText("PENDING_WAITING_ROOM", {
  x: 2.15,
  y: 2.88,
  w: 1.65,
  h: 0.18,
  fontSize: 8,
  fontFace: 'Courier New',
  bold: true,
  color: '64748B',
  margin: [1, 2, 1, 2]
});

// Arrow Step 1 -> Step 2
slide.addShape(pres.ShapeType.rightArrow, {
  x: 3.90,
  y: 2.22,
  w: 0.20,
  h: 0.16,
  fill: { color: '94A3B8' },
  line: { color: '64748B', width: 0.5 }
});

// Step 2 Card: Deposit & Docs
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.15,
  y: 1.56,
  w: 1.80,
  h: 1.56,
  rectRadius: 0.08,
  fill: { color: 'FFFFFF' },
  line: { color: 'CBD5E1', width: 1 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 4.25,
  y: 1.64,
  w: 0.70,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'E2E8F0' },
  line: { color: 'CBD5E1', width: 0.5 }
});

slide.addText("STEP 02", {
  x: 4.25,
  y: 1.64,
  w: 0.70,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '334155',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Deposit & Doc Upload", {
  x: 4.25,
  y: 1.90,
  w: 1.65,
  h: 0.25,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '1E293B',
  margin: [1, 2, 1, 2]
});

slide.addText("• PayOS Deposit Package (P30)\n• Upload Passport & Vaccines\n• Emergency Treatment Consent\n• Club Service Override Option", {
  x: 4.25,
  y: 2.18,
  w: 1.65,
  h: 0.68,
  fontSize: 8,
  fontFace: 'Arial',
  color: '475569',
  margin: [1, 2, 1, 2]
});

slide.addText("WAITING_FOR_VET", {
  x: 4.25,
  y: 2.88,
  w: 1.65,
  h: 0.18,
  fontSize: 8,
  fontFace: 'Courier New',
  bold: true,
  color: '0369A1',
  margin: [1, 2, 1, 2]
});

// Downward Arrow from Step 2 to Step 3 (Handoff between Owner & Veterinarian)
slide.addShape(pres.ShapeType.downArrow, {
  x: 4.96,
  y: 3.16,
  w: 0.18,
  h: 0.30,
  fill: { color: '5E7A54' },
  line: { color: '173129', width: 0.5 }
});

slide.addText("Queue Handoff", {
  x: 5.16,
  y: 3.18,
  w: 1.05,
  h: 0.24,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '5E7A54',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

// ==========================================
// ACTOR 2: VETERINARIAN & STABLE ADMIN (BOTTOM SWIMLANE)
// ==========================================

// Actor 2 Label Card
slide.addShape(pres.ShapeType.roundRect, {
  x: 0.50,
  y: 3.52,
  w: 1.35,
  h: 1.60,
  rectRadius: 0.08,
  fill: { color: 'EDF3EB' }, // Sage Green Tint
  line: { color: '5E7A54', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 0.58,
  y: 3.60,
  w: 1.19,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'D9E5D7' },
  line: { color: '5E7A54', width: 0.5 }
});

slide.addText("ROLE: ACTOR 2", {
  x: 0.58,
  y: 3.60,
  w: 1.19,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("VET & ADMIN", {
  x: 0.55,
  y: 3.86,
  w: 1.25,
  h: 0.24,
  fontSize: 10.5,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  align: 'center',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

slide.addText("Clinical Authority\n• Performs Intake Triage\n• 3D Anatomical Check\n• Stall Assignment\n• Health Certification", {
  x: 0.55,
  y: 4.14,
  w: 1.25,
  h: 0.92,
  fontSize: 8,
  fontFace: 'Arial',
  color: '2E4F42',
  align: 'left',
  valign: 'top',
  margin: [1, 2, 1, 2]
});

// Step 3 Card: Clinical Intake Exam (Veterinarian)
slide.addShape(pres.ShapeType.roundRect, {
  x: 4.15,
  y: 3.52,
  w: 1.80,
  h: 1.60,
  rectRadius: 0.08,
  fill: { color: 'F4F8F4' },
  line: { color: '5E7A54', width: 1.5 }
});

slide.addShape(pres.ShapeType.roundRect, {
  x: 4.25,
  y: 3.60,
  w: 0.70,
  h: 0.22,
  rectRadius: 0.04,
  fill: { color: 'DCFCE7' },
  line: { color: '86EFAC', width: 0.5 }
});

slide.addText("STEP 03", {
  x: 4.25,
  y: 3.60,
  w: 0.70,
  h: 0.22,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '166534',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Clinical Intake Exam", {
  x: 4.25,
  y: 3.86,
  w: 1.65,
  h: 0.25,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '123F32',
  margin: [1, 2, 1, 2]
});

slide.addText("• 31-Region 3D Body Scan\n• Baseline Vitals & Heart Rate\n• Gait & Orthopedic Audit\n• Immutable Medical Intake", {
  x: 4.25,
  y: 4.14,
  w: 1.65,
  h: 0.68,
  fontSize: 8,
  fontFace: 'Arial',
  color: '2E4F42',
  margin: [1, 2, 1, 2]
});

slide.addText("IN_MEDICAL", {
  x: 4.25,
  y: 4.88,
  w: 1.65,
  h: 0.18,
  fontSize: 8,
  fontFace: 'Courier New',
  bold: true,
  color: '15803D',
  margin: [1, 2, 1, 2]
});

// ==========================================
// FORK / DECISION BRANCHES (STAGE 4)
// ==========================================

// Connectors to Branches:
// Branch A Connector (Upward-Right to Approve)
slide.addShape(pres.ShapeType.rightArrow, {
  x: 6.00,
  y: 2.38,
  w: 0.24,
  h: 0.16,
  fill: { color: '16A34A' },
  line: { color: '15803D', width: 0.5 }
});

// Branch B Connector (Rightward to Reject)
slide.addShape(pres.ShapeType.rightArrow, {
  x: 6.00,
  y: 4.24,
  w: 0.24,
  h: 0.16,
  fill: { color: 'DC2626' },
  line: { color: 'B91C1C', width: 0.5 }
});

// Branch A Card: APPROVED (FIT FOR TRAINING)
slide.addShape(pres.ShapeType.roundRect, {
  x: 6.28,
  y: 1.70,
  w: 3.22,
  h: 1.60,
  rectRadius: 0.08,
  fill: { color: 'F0FDF4' },
  line: { color: '22C55E', width: 1.5 }
});

// Approve Badge
slide.addShape(pres.ShapeType.roundRect, {
  x: 6.38,
  y: 1.78,
  w: 2.20,
  h: 0.24,
  rectRadius: 0.04,
  fill: { color: 'DCFCE7' },
  line: { color: '86EFAC', width: 0.5 }
});

slide.addText("APPROVE: FIT FOR TRAINING", {
  x: 6.38,
  y: 1.78,
  w: 2.20,
  h: 0.24,
  fontSize: 8.5,
  fontFace: 'Arial',
  bold: true,
  color: '15803D',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Assign Stall & Unlock Training Plan", {
  x: 6.38,
  y: 2.06,
  w: 3.02,
  h: 0.25,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '14532D',
  margin: [1, 2, 1, 2]
});

slide.addText("• Assign active stall (enforce max 4 horses/stable trigger)\n• System sets intake_status = 'STABLED', health_status = 'FIT'\n• Head Trainer receives horse into curriculum & training roster", {
  x: 6.38,
  y: 2.34,
  w: 3.02,
  h: 0.65,
  fontSize: 8,
  fontFace: 'Arial',
  color: '166534',
  margin: [1, 2, 1, 2]
});

slide.addText("Active Training Enabled · Verified FR01, FR08, FR13", {
  x: 6.38,
  y: 3.06,
  w: 3.02,
  h: 0.18,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: '15803D',
  margin: [1, 2, 1, 2]
});

// Branch B Card: REJECT / QUARANTINE
slide.addShape(pres.ShapeType.roundRect, {
  x: 6.28,
  y: 3.52,
  w: 3.22,
  h: 1.60,
  rectRadius: 0.08,
  fill: { color: 'FEF2F2' },
  line: { color: 'EF4444', width: 1.5 }
});

// Reject Badge
slide.addShape(pres.ShapeType.roundRect, {
  x: 6.38,
  y: 3.60,
  w: 2.20,
  h: 0.24,
  rectRadius: 0.04,
  fill: { color: 'FEE2E2' },
  line: { color: 'FCA5A5', width: 0.5 }
});

slide.addText("REJECT: MEDICAL QUARANTINE", {
  x: 6.38,
  y: 3.60,
  w: 2.20,
  h: 0.24,
  fontSize: 8.5,
  fontFace: 'Arial',
  bold: true,
  color: 'B91C1C',
  align: 'center',
  valign: 'middle',
  margin: [1, 2, 1, 2]
});

slide.addText("Issue Medical Lock & Treatment Plan", {
  x: 6.38,
  y: 3.88,
  w: 3.02,
  h: 0.25,
  fontSize: 10,
  fontFace: 'Arial',
  bold: true,
  color: '7F1D1D',
  margin: [1, 2, 1, 2]
});

slide.addText("• Auto-trigger medical training lock in database (FR11)\n• High-priority incident notification dispatched to Head Trainer\n• Assign quarantine stall; initiate rehabilitation protocol", {
  x: 6.38,
  y: 4.16,
  w: 3.02,
  h: 0.65,
  fontSize: 8,
  fontFace: 'Arial',
  color: '991B1B',
  margin: [1, 2, 1, 2]
});

slide.addText("Training Locked Until Recovered · Verified FR10, FR11", {
  x: 6.38,
  y: 4.88,
  w: 3.02,
  h: 0.18,
  fontSize: 8,
  fontFace: 'Arial',
  bold: true,
  color: 'B91C1C',
  margin: [1, 2, 1, 2]
});

// ==========================================
// FOOTER BAR (RESTRICTED METADATA)
// ==========================================

slide.addShape(pres.ShapeType.line, {
  x: 0.50,
  y: 5.25,
  w: 9.00,
  h: 0,
  line: { color: 'E2E8F0', width: 0.75 }
});

slide.addText("Racehorse Management System · Cross-Role Business Workflow (WF-01: Onboarding Pipeline)", {
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
const outputPath = path.join(__dirname, 'racehorse_slide_02_flow_01.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`[SUCCESS] PPTX generated: ${outputPath}`);
  })
  .catch(err => {
    console.error(`[ERROR] Failed to generate PPTX: ${err}`);
    process.exit(1);
  });
