# Resume Setup Instructions

## 📄 How to Add Your Resume File

### Method 1: Add Resume to Public Folder (Recommended)

1. **Create your resume** in PDF format
2. **Name it** `resume.pdf` 
3. **Place it** in the `public` folder of your project:
   ```
   public/
     ├── vite.svg
     └── resume.pdf  ← Add your resume file here
   ```

4. **That's it!** The "View Resume" button will now open your actual resume file.

---

### Method 2: Change Resume Filename

If your resume has a different name (e.g., `Vimal_Bhoutekar_Resume.pdf`):

1. **Place your resume** in the `public` folder
2. **Update the filename** in `src/components/Resume.jsx`:
   ```javascript
   const resumeUrl = '/your-resume-filename.pdf';
   ```

---

### Method 3: Enable Direct Download

If you want the resume to **download automatically** instead of opening in browser:

1. **Open** `src/components/Resume.jsx`
2. **Comment out** the "Open in new tab" line:
   ```javascript
   // window.open(resumeUrl, '_blank');
   ```
3. **Uncomment** the download lines:
   ```javascript
   const link = document.createElement('a');
   link.href = resumeUrl;
   link.download = 'Vimal_Bhoutekar_Resume.pdf';
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   ```

---

### Method 4: Host Resume on Google Drive/Dropbox

1. **Upload** your resume to Google Drive or Dropbox
2. **Get the public sharing link**
3. **Update the resumeUrl** in `Resume.jsx`:
   ```javascript
   const resumeUrl = 'https://your-google-drive-or-dropbox-link';
   ```

---

## 🎯 Current Behavior

- **Click "View Resume"** → Opens resume in new browser tab
- **File location:** `/public/resume.pdf`
- **Button style:** Green gradient with document icon

## 📝 Notes

- **PDF format** is recommended for resumes
- **File size** should be under 5MB for fast loading
- **Professional filename** like `Vimal_Bhoutekar_Resume.pdf` is better for downloads
- **Public folder** files are directly accessible via URL

## 🚀 Testing

After adding your resume:
1. **Start your dev server:** `npm run dev`
2. **Click "View Resume"** button in Hero section
3. **Verify** your resume opens correctly

---

**Need help?** Make sure your resume file is in the correct location and has the right filename!