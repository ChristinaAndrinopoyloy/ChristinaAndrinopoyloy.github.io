# Christina Andrinopoulou - Personal Website

A modern, minimal personal website showcasing professional experience, education, and research in Machine Learning and Software Development.

## ✨ Features

- 🌓 **Dark Theme** - Professional dark color scheme
- 🌍 **Bilingual** - Full support for Greek and English with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Vanilla JavaScript, no frameworks, <20KB total
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎨 **Modern Design** - Clean, minimal aesthetic with smooth animations

## 🚀 Quick Start

### Local Development

Simply open `index.html` in your browser. No build step required!

```bash
# Option 1: Double-click index.html

# Option 2: Use a simple HTTP server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `your-username.github.io` (replace `your-username` with your GitHub username)
   - Example: `christina-andrinopoulou.github.io`
   - This will make your site available at: `https://your-username.github.io`

### Step 2: Push Your Code

```bash
# Navigate to your project directory
cd "/Users/christinaandrinopoyloy/Desktop/Personal Site"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal website"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live in 1-2 minutes at: `https://your-username.github.io`

## 🎨 Customization

### Update Your Information

1. **Profile Photo**: Replace the placeholder in `index.html`:
   ```html
   <!-- Find this section and replace with: -->
   <img src="images/profile.jpg" alt="Christina Andrinopoulou" class="profile-image">
   ```
   Then create an `images` folder and add your photo as `profile.jpg`

2. **Social Links**: Update these in `index.html`:
   ```html
   <a href="https://github.com/your-username" ...>
   <a href="https://linkedin.com/in/your-profile" ...>
   <a href="https://scholar.google.com/citations?user=your-id" ...>
   ```

3. **Content**: Edit `translations.js` to update any text content

4. **Colors**: Modify CSS variables in `styles.css`:
   ```css
   :root {
       --accent-primary: #00d4ff;  /* Change this for your brand color */
       --bg-primary: #0f0f0f;      /* Main background color */
   }
   ```

### Add a Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   www.christinaandrinopoulou.com
   ```
3. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `your-username.github.io`
4. Wait for DNS propagation (up to 24 hours)

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styles (dark theme, responsive)
├── script.js           # Language toggle & interactions
├── translations.js     # Greek/English translations
├── README.md           # This file
└── images/             # (Create this folder for your images)
    └── profile.jpg     # Your profile photo
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS (Grid, Flexbox, Variables)
- **Vanilla JavaScript** - No frameworks needed
- **Inter Font** - Clean, professional typography

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Maintenance

### Updating Content

Simply edit the files and push to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Changes will be live in 1-2 minutes.

### Performance Tips

- Optimize images: Use WebP format and compress to <200KB
- Keep the minimal approach - no unnecessary scripts
- Test on mobile devices regularly

## 📝 License

This is your personal website - all content is yours!

## 🤝 Credits

Built with ❤️ using vanilla web technologies.

---

**Need help?** Create an issue on GitHub or check the [GitHub Pages documentation](https://docs.github.com/en/pages).
