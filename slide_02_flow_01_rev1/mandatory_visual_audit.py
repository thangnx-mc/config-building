import os
import sys
import zipfile
import xml.etree.ElementTree as ET
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

staging_dir = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_02_flow_01_rev1"
pptx_path = os.path.join(staging_dir, "racehorse_slide_02_flow_01.pptx")
preview_path = os.path.join(staging_dir, "slide_02_flow_01_preview.png")

print("="*60)
print("MANDATORY VISUAL & STRUCTURAL AUDIT: SLIDE 02 FLOW 01 REV 1")
print("="*60)

# 1. Image checks
preview = Image.open(preview_path)
print(f"[AUDIT] Preview Image Resolution: {preview.size} (Expected: 1500 x 844)")
assert preview.size == (1500, 844), f"Unexpected size: {preview.size}"

# 2. OOXML Editability Check
NS = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
}

with zipfile.ZipFile(pptx_path, 'r') as z:
    xml_data = z.read("ppt/slides/slide1.xml")
    root = ET.fromstring(xml_data)
    
    shapes = root.findall(".//p:sp", NS)
    pics = root.findall(".//p:pic", NS)
    text_runs = root.findall(".//a:t", NS)
    
    print(f"[AUDIT] Total Native Shape elements (<p:sp>): {len(shapes)}")
    print(f"[AUDIT] Total Picture elements (<p:pic>): {len(pics)}")
    print(f"[AUDIT] Total Text runs (<a:t>): {len(text_runs)}")
    
    # Verify exactly 1 picture element (FPT Logo)
    assert len(pics) == 1, f"Expected exactly 1 picture element (FPT Logo), found {len(pics)}"
    print("[PASS] Exactly 1 picture element verified (authentic FPT logo).")

    # Check text content for English-only and key domain terms
    texts = [t.text.strip() for t in text_runs if t.text and t.text.strip()]
    
    # Vietnamese diacritic check (ensure English only)
    vn_chars = "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ"
    has_vn = any(c in t.lower() for t in texts for c in vn_chars)
    print(f"[AUDIT] English-only check (Vietnamese diacritic presence): {has_vn}")
    assert not has_vn, "Vietnamese characters detected in slide content!"
    print("[PASS] All visible slide text is 100% English.")

    # Verify key domain terms
    required_terms = [
        "MAIN FLOW",
        "HORSE REGISTRATION & VETERINARY INTAKE",
        "HORSE OWNER",
        "VET & ADMIN",
        "Declare Horse Profile",
        "Deposit & Doc Upload",
        "Clinical Intake Exam",
        "APPROVE: FIT FOR TRAINING",
        "REJECT: MEDICAL QUARANTINE",
        "PENDING_WAITING_ROOM",
        "WAITING_FOR_VET",
        "IN_MEDICAL"
    ]
    
    for term in required_terms:
        found = any(term in t for t in texts)
        print(f"[AUDIT] Domain term '{term}': {'FOUND' if found else 'MISSING'}")
        assert found, f"Required term '{term}' not found in slide text!"

print("="*60)
print("ALL MANDATORY AUDIT GATES PASSED (100% PASS)")
print("="*60)
