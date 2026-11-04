/**
 * RACEHORSE PRESENTATION REDESIGN — SLIDE 01 ONLY
 * Strictly reproducing Lecturer Sample PDF Cover Slide (Page 01).
 * 
 * Authentic FPT University Logo (400x156 RGBA) extracted from sample PDF.
 * 100% Native OOXML vector shapes and editable text runs.
 * 0 out-of-bounds elements.
 */

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10.0" x 5.625"
pres.author = "Racehorse Team - FPT University";
pres.title = "Racehorse Training Management System — Slide 01";

const slide = pres.addSlide();
slide.background = { color: "FFFFFF" };

// Color constants matching sample PDF ground truth
const colors = {
  primaryWave: "5141CF",       // Sample purple wave RGB(81, 65, 207)
  primaryWaveDark: "4F41CD",   // Sample purple wave dark RGB(79, 65, 205)
  waveBubble1: "818CF8",       // Accent dot 1
  waveBubble2: "A5B4FC",       // Accent dot 2
  brandOceanBlue: "0265B2",    // Sample title blue RGB(2, 101, 178)
  textTitleDark: "000000",     // Sample pitch black subtitle
  textBodyDark: "1E293B",      // Slate 800
  textMuted: "475569",         // Slate 600
  textSubtle: "64748B"         // Slate 500
};

// =============================================================================
// 1. ORGANIC PURPLE WAVE ACCENTS (Anchored strictly within 0 - 10.0" x 0 - 5.625")
// =============================================================================

// Top-Left Wave & Bubble
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.0, y: 0.0, w: 0.75, h: 0.55,
  fill: { color: colors.primaryWave },
  line: { color: colors.primaryWave, width: 0 },
  rectRadius: 0.25
});
slide.addShape(pres.shapes.OVAL, {
  x: 0.82, y: 0.12, w: 0.14, h: 0.14,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 1 }
});

// Top-Right Wave (matching Page 01 top-right organic flow)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 7.8, y: 0.0, w: 2.2, h: 1.6,
  fill: { color: colors.primaryWave },
  line: { color: colors.primaryWave, width: 0 },
  rectRadius: 0.5
});
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 8.5, y: 0.0, w: 1.5, h: 1.1,
  fill: { color: colors.primaryWaveDark },
  line: { color: colors.primaryWaveDark, width: 0 },
  rectRadius: 0.4
});
slide.addShape(pres.shapes.OVAL, {
  x: 7.45, y: 0.45, w: 0.18, h: 0.18,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 1 }
});
slide.addShape(pres.shapes.OVAL, {
  x: 7.75, y: 1.05, w: 0.12, h: 0.12,
  fill: { color: colors.waveBubble2, transparency: 30 },
  line: { color: colors.waveBubble1, width: 1 }
});

// Bottom-Left Wave (matching Page 01 bottom-left organic flow)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.0, y: 4.25, w: 2.6, h: 1.375,
  fill: { color: colors.primaryWaveDark },
  line: { color: colors.primaryWaveDark, width: 0 },
  rectRadius: 0.5
});
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.0, y: 4.75, w: 1.8, h: 0.875,
  fill: { color: colors.primaryWave },
  line: { color: colors.primaryWave, width: 0 },
  rectRadius: 0.35
});
slide.addShape(pres.shapes.OVAL, {
  x: 2.25, y: 4.55, w: 0.18, h: 0.18,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 1 }
});
slide.addShape(pres.shapes.OVAL, {
  x: 1.95, y: 4.25, w: 0.12, h: 0.12,
  fill: { color: colors.waveBubble2, transparency: 30 },
  line: { color: colors.waveBubble1, width: 1 }
});

// =============================================================================
// 2. AUTHENTIC FPT UNIVERSITY LOGO (Extracted directly from sample PDF)
// =============================================================================
const logoPath = path.join(__dirname, "fpt_university_logo.png");
slide.addImage({
  path: logoPath,
  x: 0.90,
  y: 0.38,
  w: 1.45,
  h: 0.565 // Exact aspect ratio 400x156 (1.45 / 0.565 = 2.566)
});

// =============================================================================
// 3. TYPOGRAPHY & CONTENT HIERARCHY (Strict Left Margin Guide at x = 0.90")
// =============================================================================

// Main Project Title: RACEHORSE (Matching sample's 'FREEDRIVER' in #0265B2)
slide.addText("RACEHORSE", {
  x: 0.90, y: 1.65, w: 6.8, h: 0.65,
  fontFace: "Segoe UI",
  fontSize: 36,
  bold: true,
  color: colors.brandOceanBlue,
  valign: "middle"
});

// Primary Subtitle: HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA (Matching sample's 'PLATFORM CONNECTING' in #000000)
slide.addText("HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA", {
  x: 0.90, y: 2.38, w: 7.5, h: 0.45,
  fontFace: "Segoe UI",
  fontSize: 22,
  bold: true,
  color: colors.textTitleDark,
  valign: "middle"
});

// Secondary Subtitle: Platform scope (Matching sample's 'DRIVERS AND CARS OWNERS')
slide.addText("NỀN TẢNG SỐ HÓA Y TẾ LÂM SÀNG, KẾ HOẠCH & CHUỒNG TRẠI", {
  x: 0.90, y: 2.92, w: 7.8, h: 0.40,
  fontFace: "Segoe UI",
  fontSize: 17,
  bold: true,
  color: colors.textMuted,
  valign: "middle"
});

// Divider line between title and presentation metadata
slide.addShape(pres.shapes.LINE, {
  x: 0.90, y: 3.48, w: 4.5, h: 0,
  line: { color: "CBD5E1", width: 1.2 }
});

// Presenter Group Line (Matching sample's 'Presented by: GSP25SE94')
slide.addText("BÁO CÁO BỞI: NHÓM GSP25SE_RACEHORSE", {
  x: 0.90, y: 3.65, w: 6.0, h: 0.35,
  fontFace: "Segoe UI",
  fontSize: 13,
  bold: true,
  color: colors.brandOceanBlue,
  valign: "middle"
});

// Team Member & Advisor Block (Clear, editable placeholders per requirement 5)
const teamText = [
  { text: "Giảng viên hướng dẫn: ", options: { bold: true, color: colors.textBodyDark } },
  { text: "[Giảng viên hướng dẫn: GVHD - Bộ môn Kỹ thuật Phần mềm]\n", options: { color: colors.textMuted } },
  { text: "Thành viên thực hiện:\n", options: { bold: true, color: colors.textBodyDark } },
  { text: "• [Họ và tên SV 1 - MSSV] — Trưởng nhóm / Kiến trúc hệ thống & Backend Spring Boot 3\n", options: { color: colors.textMuted } },
  { text: "• [Họ và tên SV 2 - MSSV] — Phát triển Frontend React 19 & Mô hình giải phẫu 3D Three.js\n", options: { color: colors.textMuted } },
  { text: "• [Họ và tên SV 3 - MSSV] — Quản trị y tế lâm sàng & Tích hợp cổng thanh toán PayOS VietQR\n", options: { color: colors.textMuted } },
  { text: "• [Họ và tên SV 4 - MSSV] — Vận hành chuồng trại, dinh dưỡng & Báo cáo chủ sở hữu", options: { color: colors.textMuted } }
];

slide.addText(teamText, {
  x: 0.90, y: 4.05, w: 7.2, h: 1.25,
  fontFace: "Segoe UI",
  fontSize: 10.0,
  valign: "top"
});

// Course / Term Code (Bottom-Right, matching sample's 'SP25SE136')
slide.addText("ĐỒ ÁN TỐT NGHIỆP KỸ THUẬT PHẦN MỀM · SP25SE136", {
  x: 5.5, y: 5.25, w: 4.2, h: 0.25,
  fontFace: "Segoe UI",
  fontSize: 9.5,
  bold: true,
  color: colors.textSubtle,
  align: "right",
  valign: "middle"
});

// =============================================================================
// EXPORT SLIDE 01 PPTX
// =============================================================================
const outputFile = path.join(__dirname, "racehorse_slide_01_redesign.pptx");
console.log(`Writing Slide 01 to: ${outputFile}`);

pres.writeFile({ fileName: outputFile })
  .then(() => {
    console.log(`[SUCCESS] Slide 01 PPTX generated at: ${outputFile}`);
  })
  .catch(err => {
    console.error("[ERROR] Failed to generate PPTX:", err);
    process.exit(1);
  });
