# Portfolio Customization Guide

Welcome! This guide will help you customize this portfolio template with your own information. Follow these steps to create your personalized portfolio.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000` to see your portfolio.

## 📝 Customization Steps

### 1. Personal Information

#### Update Home Section (`src/components/Home/Home.js`)
- Replace `[YOUR NAME]` with your actual name
- Customize the typing animation in `src/components/Home/Type.js` with your roles/titles

#### Update About Section (`src/components/About/AboutCard.js`)
- Replace `[YOUR NAME]` with your name
- Replace `[YOUR LOCATION]` with your city/country
- Replace `[YOUR CURRENT ROLE]` with your job title
- Replace `[COMPANY NAME]` with your employer
- Replace `[YOUR DEGREE]` with your education
- Replace `[YOUR FIELD]` with your field of study
- Replace `[UNIVERSITY NAME]` with your university
- Add your hobbies/interests
- Add your personal quote or motto

### 2. Projects Section (`src/components/Projects/Projects.js`)

For each project, update:
- `[PROJECT X TITLE]` - Your project name
- `[PROJECT X DESCRIPTION]` - Detailed description including:
  - What the project does
  - Technologies used
  - Key features
  - Your role and contributions
- `[GITHUB LINK]` - Link to your GitHub repository
- `[DEMO LINK]` - Link to live demo (if available)

**Project Image Tips:**
- Replace project images in `src/Assets/Projects/`
- Use screenshots or logos of your projects
- Recommended size: 600x400 pixels
- Format: PNG or JPG

### 3. Resume Section

**⚠️ Important:** The resume section is temporarily disabled to prevent compilation errors. To add your resume:

1. **Add Your Resume PDF:**
   - Place your resume PDF in `src/Assets/`
   - Update the filename in `src/components/Resume/ResumeNew.js`
   - Replace `[YOUR_RESUME_FILE]` with your actual filename

2. **Enable Resume Viewer:**
   - Uncomment the PDF import lines in `src/components/Resume/ResumeNew.js`
   - Uncomment the PDF viewer component
   - Remove the temporary instructions div

**Example:**
```javascript
// Change this line:
// import pdf from "../../Assets/../Assets/[YOUR_RESUME_FILE].pdf";
// To this:
import pdf from "../../Assets/../Assets/your-resume.pdf";
```

### 4. Social Media Links (`src/components/Footer.js`)

Update your social media URLs:
- `[YOUR GITHUB URL]` - Your GitHub profile
- `[YOUR TWITTER URL]` - Your Twitter profile
- `[YOUR LINKEDIN URL]` - Your LinkedIn profile
- `[YOUR INSTAGRAM URL]` - Your Instagram profile
- `[YOUR INITIALS]` - Your initials for copyright

### 5. Skills and Tools

#### Update Tech Stack (`src/components/About/Techstack.js`)
Add your technical skills:
- Programming languages
- Frameworks
- Databases
- Cloud platforms
- Other technologies

#### Update Tool Stack (`src/components/About/Toolstack.js`)
Add your development tools:
- IDEs
- Version control
- Design tools
- Other software

### 6. GitHub Integration

The portfolio includes a GitHub calendar component. Update the GitHub username in `src/components/About/Github.js` to show your contribution history.

## 🎨 Styling Customization

### Colors
The main color scheme uses purple accents. You can customize colors in:
- `src/style.css` - Main styling
- `src/App.css` - Component-specific styles

### Fonts
Update fonts in `src/style.css` to match your brand.

### Images
Replace images in `src/Assets/`:
- `avatar.svg` - Your profile picture
- `home-main.svg` - Home section illustration
- `about.png` - About section image
- Project images in `src/Assets/Projects/`

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Test your portfolio on different screen sizes to ensure everything looks good.

## 🚀 Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Option 3: GitHub Pages
1. Update `package.json` homepage field
2. Run `npm run build`
3. Deploy the build folder

## 🔧 Advanced Customization

### Adding New Sections
1. Create new component in `src/components/`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Navbar.js`

### Custom Animations
- Modify particle effects in `src/components/Particle.js`
- Update typing animation in `src/components/Home/Type.js`

### SEO Optimization
- Update `public/index.html` meta tags
- Add your name, description, and keywords
- Update favicon and manifest

## 📋 Checklist

Before deploying, ensure you've:
- [ ] Updated all personal information
- [ ] Added your projects with descriptions
- [ ] Included your resume PDF (and enabled the viewer)
- [ ] Updated social media links
- [ ] Customized skills and tools
- [ ] Added your own images
- [ ] Tested on different devices
- [ ] Updated meta tags for SEO

## 🆘 Troubleshooting

### Common Issues:
1. **Images not loading**: Check file paths and ensure images exist
2. **PDF not displaying**: Verify PDF file is in correct location and import is uncommented
3. **Styling issues**: Clear browser cache and restart development server
4. **Build errors**: Check for syntax errors and missing dependencies

### Getting Help:
- Check the original repository: https://github.com/soumyajit4419/Portfolio
- Review React documentation: https://reactjs.org/
- Check Bootstrap documentation: https://getbootstrap.com/

## 🎉 You're Ready!

Once you've completed all customizations, your portfolio will be ready to showcase your skills and projects to the world!

Remember to:
- Keep your projects updated
- Regularly update your skills
- Add new achievements
- Maintain your social media presence

Good luck with your portfolio! 🚀 