# Yasrib Yasir Farook — Personal Portfolio Website

A responsive personal portfolio built with HTML, CSS, and JavaScript. The site is designed around research, technical projects, IT/co-op experience, teaching, leadership, skills, and personal interests.

## Run in VS Code

### Option 1 — Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

### Option 2 — no extension
Open `index.html` directly in your browser.

## Files
- `index.html` — all content and sections
- `styles.css` — layout, responsive design, visual style, animations
- `script.js` — mobile menu, project filters, active navigation, reveal animations, current year
- `assets/Yasrib_Yasir_Farook_CV.pdf` — linked CV

## Important edits before publishing

### 1. LinkedIn and GitHub
Your GitHub and LinkedIn profiles are linked in the contact section and open in a new tab.

### 2. Check language proficiency
The Skills section currently lists the human languages that have appeared in your earlier résumé information:
- English
- Bangla
- Hindi
- French
- Spanish
- Arabic

Before publishing, add proficiency labels such as Native, Fluent, Conversational, or Basic so the site accurately represents your level in each language.

### 3. Personal hobbies
The “Beyond the résumé” section only uses activities already supported by your experience: building projects, teaching/mentoring, learning AI, hackathons, community leadership, and AV/event technology. If you want, replace or expand these with specific personal hobbies such as sports, photography, gaming, reading, travel, music, etc.

### 4. Profile photo
Your photo is stored in `assets/yasrib-yasir-farook.jpg` and shown in the opening section. Adjust `.profile-photo` in `styles.css` to change its frame or crop.

### 5. Add project links
For projects that are on GitHub, add buttons such as:
```html
<a class="text-link" href="YOUR_GITHUB_REPO" target="_blank">View project ↗</a>
```

## Publish for free
You can publish this static site using GitHub Pages, Netlify, or Vercel.

For GitHub Pages:
1. Create a GitHub repository.
2. Upload all files from this folder.
3. Open the repository's **Settings → Pages**.
4. Choose the main branch as the deployment source.
5. Save and GitHub will give you a public website URL.

## Design and accessibility

The portfolio uses a professional academic layout with a top navigation bar, a name-first introduction, research highlights, and a detailed About section. Clear section titles and readable body text help faculty and recruiters assess research, publications, technical projects, and experience. Mobile navigation and expandable work details keep the content easy to browse.

Click a headline to expand research, projects, skills, experience, and personal interests. These native HTML disclosures support keyboard navigation and work without JavaScript. Research details preserve contributions and distinguish completed findings from ongoing work. Project category filters, direct links to expanded studies, and section-level Expand all / Collapse all controls are enhanced with JavaScript.

The interface includes mobile navigation, keyboard focus styles, a skip link, reduced-motion support, and GitHub/LinkedIn links. Update research status and results in `index.html` as work progresses.

## Public evidence links

Sources appear beside related work and in the Sources section. Reviewed on October 2, 2026:

- SIGCSE author profile and accepted-paper list confirm authorship and affiliation.
- EMU Today confirms the Summer 2026 research award project and advisor.
- GuardKall’s Devpost page lists Yasrib as a team member and the Teli AI Frontend Challenge winner status. The page does not specify placement; the existing second-place claim remains based on the supplied portfolio information.
- The Eastern Echo confirms presidential candidacy and senate leadership, not an election victory.
- MID-SURE and EMU symposium PDF links are included as supplied program references. Automated access was blocked, so individual entries and page numbers were not independently checked.
- BUP PDF: https://bup.edu.bd/public/upload/news/20240117_1705479602.pdf — eligibility for an admission test, not an admission offer. The user’s exact entry could not be matched; keep it off the public profile until the page or roll number is confirmed.
