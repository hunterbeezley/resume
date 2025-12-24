# Resume Generator

Automated resume generator that creates a professionally formatted .docx resume from JavaScript code.

## Overview

This Node.js script uses the `docx` library to generate a Microsoft Word document (.docx) with a professionally formatted resume. The resume content is defined directly in the JavaScript file with consistent styling, spacing, and formatting.

## Requirements

- Node.js (v12 or higher)
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install docx
   ```

## Usage

1. **Edit resume content:**
   - Open `resume.js` in your editor
   - Update personal information, experience, skills, education, etc.
   - Modify the content within the appropriate sections

2. **Generate the resume:**
   ```bash
   node resume.js
   ```

3. **Output:**
   - Creates `Hunter_Beezley_Resume.docx` in the current directory
   - File can be opened in Microsoft Word, Google Docs, or any .docx-compatible application

## File Structure

- `resume.js` - Main script containing resume content and formatting logic
- `Hunter_Beezley_Resume.docx` - Generated resume output (created after running the script)

## Customization

The script includes several pre-defined styles:
- **Name** - Large, bold header for your name
- **Title** - Professional title/tagline
- **SectionHeader** - Section headings with blue underline
- **JobTitle** - Bold job position titles
- **CompanyDate** - Italicized company and date information
- **Bullet** - Formatted bullet points for achievements
- **Skills** - Skills section formatting

All styles use Calibri font 