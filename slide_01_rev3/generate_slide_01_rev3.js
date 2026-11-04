/**
 * RACEHORSE PRESENTATION REDESIGN — SLIDE 01 (REVISION 3)
 * Light Sage Green Palette + Subtle Horse Watermark + Clean Sample Layout Hierarchy
 * 
 * Key Visual Directives in Revision 3:
 * 1. Palette: Replaced purple accents with a light sage-green palette consistent
 *    with Racehorse UI CSS tokens (--green: #123f32, --line: #dfe4da, sage tints #edf3eb).
 * 2. Horse Watermark: Introduced exactly one subtle, recognizable horse silhouette
 *    watermark in light sage (#D9E6D2) in the right-hand negative space (x: 6.45", y: 2.15"),
 *    with zero text intersection and zero competition with brand logos.
 * 3. Restraint & Whitespace: Followed the lecturer's sample cover structure faithfully,
 *    avoiding a crowded student roster on the cover slide while retaining verified project title,
 *    concise scope description, group identifier, and course code.
 * 4. Authentic FPT University Logo: Preserved extracted authentic logo (400x156 RGBA)
 *    at exact aspect ratio (1.45" x 0.565") and original brand colors.
 * 5. OOXML Native Editability: Vector shapes, custom geometries, editable text runs.
 */

const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10.0" x 5.625" (9,144,000 x 5,143,500 EMUs)
pres.author = "Racehorse Team - FPT University";
pres.title = "Racehorse Training Management System — Slide 01 Rev 3";

const slide = pres.addSlide();
slide.background = { color: "FFFFFF" };

// Color constants: Sage Green Palette + Verified UI Tokens + Authentic Brand Colors
const colors = {
  // Sage Green Palette (replacing purple accents)
  waveMain: "9FB895",         // Medium Sage Green (restrained & organic)
  waveDark: "5E7A54",         // Dark Sage / Forest accent layer
  waveBubble1: "B5C9AC",      // Light Sage bubble 1
  waveBubble2: "D3E2CC",      // Very light Sage bubble 2
  horseWatermark: "D9E6D2",   // Subtle Horse Watermark tint (low contrast against white)
  
  // Brand & Typography
  brandOceanBlue: "0265B2",   // Authentic Sample Title & FPT Blue RGB(2, 101, 178)
  textTitleDark: "000000",    // Pitch Black Primary Subtitle
  textBodyDark: "173129",     // Deep Forest Charcoal (from Racehorse CSS :root)
  textMuted: "475569",        // Slate 600 Secondary Subtitle
  textSubtle: "5E7265",       // Sage-Slate 500 for footer code
  lineDivider: "C8D7C2"       // Soft Sage-grey divider line
};

// =============================================================================
// 1. ORGANIC SAGE GREEN CORNER WAVES (Native OOXML custGeom with Cubic Curves)
// =============================================================================

// TOP-LEFT CORNER WAVE (Curved corner bleed matching sample)
slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
  x: 0.0, y: 0.0, w: 0.65, h: 0.55,
  fill: { color: colors.waveMain },
  line: { color: colors.waveMain, width: 0 },
  points: [
    { x: 0.0, y: 0.0 },
    { x: 0.55, y: 0.0 },
    {
      x: 0.0, y: 0.52,
      curve: { type: "cubic", x1: 0.45, y1: 0.28, x2: 0.20, y2: 0.46 }
    },
    { close: true }
  ]
});
slide.addShape(pres.shapes.OVAL, {
  x: 0.62, y: 0.18, w: 0.09, h: 0.09,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 0.8 }
});

// TOP-RIGHT MULTI-LOBED ORGANIC SAGE WAVE (Reproducing sample lobes & flow)
slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
  x: 7.50, y: 0.0, w: 2.50, h: 2.35,
  fill: { color: colors.waveMain },
  line: { color: colors.waveMain, width: 0 },
  points: [
    { x: 0.16, y: 0.0 }, // Starts at x = 7.66" on top border
    // First lobe dipping down to (8.75, 0.68) -> local (1.25, 0.68)
    {
      x: 1.25, y: 0.68,
      curve: { type: "cubic", x1: 0.18, y1: 0.35, x2: 0.90, y2: 0.58 }
    },
    // Second lobe curving outward to (8.34, 1.02) -> local (0.84, 1.02)
    {
      x: 0.84, y: 1.02,
      curve: { type: "cubic", x1: 1.35, y1: 0.72, x2: 0.70, y2: 0.85 }
    },
    // Flowing down to (8.75, 1.50) -> local (1.25, 1.50)
    {
      x: 1.25, y: 1.50,
      curve: { type: "cubic", x1: 0.95, y1: 1.20, x2: 1.10, y2: 1.40 }
    },
    // Flowing to right border at (10.0, 2.32) -> local (2.50, 2.32)
    {
      x: 2.50, y: 2.32,
      curve: { type: "cubic", x1: 1.65, y1: 1.70, x2: 2.25, y2: 2.15 }
    },
    { x: 2.50, y: 0.0 }, // Top-right corner (10.0, 0.0)
    { close: true }
  ]
});

// Top-Right Darker Accent Inner Wave
slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
  x: 8.50, y: 0.0, w: 1.50, h: 1.40,
  fill: { color: colors.waveDark },
  line: { color: colors.waveDark, width: 0 },
  points: [
    { x: 0.20, y: 0.0 }, // (8.70, 0.0)
    {
      x: 1.50, y: 1.35, // (10.0, 1.35)
      curve: { type: "cubic", x1: 0.25, y1: 0.70, x2: 0.80, y2: 1.25 }
    },
    { x: 1.50, y: 0.0 },
    { close: true }
  ]
});

// Top-Right Floating Accent Bubbles
slide.addShape(pres.shapes.OVAL, {
  x: 7.35, y: 0.45, w: 0.16, h: 0.16,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 0.8 }
});
slide.addShape(pres.shapes.OVAL, {
  x: 7.68, y: 1.05, w: 0.11, h: 0.11,
  fill: { color: colors.waveBubble2, transparency: 30 },
  line: { color: colors.waveBubble1, width: 0.8 }
});
slide.addShape(pres.shapes.OVAL, {
  x: 8.12, y: 1.60, w: 0.09, h: 0.09,
  fill: { color: colors.waveBubble1, transparency: 30 },
  line: { color: colors.waveBubble2, width: 0.8 }
});

// BOTTOM-LEFT ORGANIC SAGE WAVE (Reproducing sample profile crest at x=1.15", y=4.45")
slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
  x: 0.0, y: 4.40, w: 3.35, h: 1.225,
  fill: { color: colors.waveMain },
  line: { color: colors.waveMain, width: 0 },
  points: [
    { x: 0.0, y: 0.60 }, // Starts at y = 5.00" on left border
    {
      x: 1.15, y: 0.05,
      curve: { type: "cubic", x1: 0.35, y1: 0.20, x2: 0.75, y2: 0.05 }
    },
    {
      x: 3.25, y: 1.225,
      curve: { type: "cubic", x1: 1.70, y1: 0.05, x2: 2.55, y2: 0.70 }
    },
    { x: 0.0, y: 1.225 }, // Bottom-left corner (0.0, 5.625)
    { close: true }
  ]
});

// Bottom-Left Inner Darker Accent Layer
slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
  x: 0.0, y: 4.80, w: 2.30, h: 0.825,
  fill: { color: colors.waveDark },
  line: { color: colors.waveDark, width: 0 },
  points: [
    { x: 0.0, y: 0.30 }, // (0.0, 5.10)
    {
      x: 2.25, y: 0.825, // (2.25, 5.625)
      curve: { type: "cubic", x1: 0.60, y1: 0.15, x2: 1.60, y2: 0.50 }
    },
    { x: 0.0, y: 0.825 },
    { close: true }
  ]
});

// Bottom-Left Floating Accent Bubbles
slide.addShape(pres.shapes.OVAL, {
  x: 2.45, y: 4.70, w: 0.15, h: 0.15,
  fill: { color: colors.waveBubble1, transparency: 20 },
  line: { color: colors.waveBubble2, width: 0.8 }
});
slide.addShape(pres.shapes.OVAL, {
  x: 2.85, y: 5.05, w: 0.10, h: 0.10,
  fill: { color: colors.waveBubble2, transparency: 30 },
  line: { color: colors.waveBubble1, width: 0.8 }
});

// =============================================================================
// 2. HORSE WATERMARK — SLIDE 01 ONLY (Subtle Sage Green Silhouette in Negative Space)
// =============================================================================
const horseSvgPath = path.join(__dirname, "horse_watermark_sage.svg");
slide.addImage({
  path: horseSvgPath,
  x: 6.45,
  y: 2.15,
  w: 2.80,
  h: 2.49
});

// =============================================================================
// 3. AUTHENTIC FPT UNIVERSITY LOGO (Extracted directly from sample PDF)
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
// 4. TYPOGRAPHY & CONTENT HIERARCHY (Faithfully matching sample cover structure)
// =============================================================================

// Main Project Title: RACEHORSE (Matching sample's 'FREEDRIVER' in #0265B2)
slide.addText("RACEHORSE", {
  x: 0.90, y: 1.45, w: 5.5, h: 0.65,
  fontFace: "Segoe UI",
  fontSize: 38,
  bold: true,
  color: colors.brandOceanBlue,
  valign: "middle"
});

// Primary Subtitle: HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA (Pitch black #000000)
slide.addText("HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA", {
  x: 0.90, y: 2.18, w: 5.5, h: 0.45,
  fontFace: "Segoe UI",
  fontSize: 20,
  bold: true,
  color: colors.textTitleDark,
  valign: "middle"
});

// Secondary Subtitle: Scope definition (Muted Slate 600)
slide.addText("NỀN TẢNG SỐ HÓA Y TẾ LÂM SÀNG, KẾ HOẠCH & CHUỒNG TRẠI", {
  x: 0.90, y: 2.68, w: 5.5, h: 0.40,
  fontFace: "Segoe UI",
  fontSize: 14.5,
  bold: true,
  color: colors.textMuted,
  valign: "middle"
});

// Thin elegant divider line
slide.addShape(pres.shapes.LINE, {
  x: 0.90, y: 3.20, w: 4.0, h: 0,
  line: { color: colors.lineDivider, width: 1.2 }
});

// Presenter Group Header (Matching sample's 'Presented by: GSP25SE94')
slide.addText("Presented by: GSP25SE_RACEHORSE", {
  x: 0.90, y: 3.38, w: 5.0, h: 0.35,
  fontFace: "Segoe UI",
  fontSize: 13,
  bold: true,
  color: colors.brandOceanBlue,
  valign: "middle"
});

// Course / Term Code (Bottom-Right, matching sample's 'SP25SE136')
slide.addText("ĐỒ ÁN TỐT NGHIỆP KỸ THUẬT PHẦN MỀM · SP25SE136", {
  x: 5.5, y: 5.25, w: 4.2, h: 0.25,
  fontFace: "Segoe UI",
  fontSize: 10.0,
  bold: true,
  color: colors.textSubtle,
  align: "right",
  valign: "middle"
});

// =============================================================================
// EXPORT SLIDE 01 REV 3 PPTX
// =============================================================================
const outputFile = path.join(__dirname, "racehorse_slide_01_rev3.pptx");
console.log(`Writing Slide 01 Rev 3 to: ${outputFile}`);

pres.writeFile({ fileName: outputFile })
  .then(() => {
    console.log(`[SUCCESS] Slide 01 Rev 3 PPTX generated at: ${outputFile}`);
  })
  .catch(err => {
    console.error("[ERROR] Failed to generate PPTX:", err);
    process.exit(1);
  });
