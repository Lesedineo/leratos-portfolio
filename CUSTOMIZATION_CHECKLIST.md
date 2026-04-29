# Customization Checklist

Use this checklist to customize your portfolio to make it completely yours.

## 🔧 Essential Updates (Do These First!)

- [ ] **Update your name**
  - Line 7 in `index.html`: Change "Lerato's Photography Portfolio" in `<title>` tag
  - Line 32 in `index.html`: Change "Lerato's Photography" in logo
  - Footer: Update copyright year if needed

- [ ] **Add your email address**
  - Line 247 in `index.html`: Replace `your.email@example.com`
  - Make sure it's clickable with `mailto:` link

- [ ] **Add your phone number**
  - Line 252 in `index.html`: Replace `+1 (234) 567-8900`
  - Update country code if needed
  - Link it with `tel:` link

- [ ] **Update location**
  - Line 257 in `index.html`: Replace "Your City, Country"

- [ ] **Connect social media**
  - Line 288 in `index.html`: Update Instagram URL
  - Line 292 in `index.html`: Update TikTok URL

## 📸 Content Updates

- [ ] **Hero section text**
  - Line 59: "Capturing Moments, Creating Memories" - Your tagline
  - Line 60: "Professional Photography Services" - Your specialty
  - Line 61: "View My Work" button text (optional change)

- [ ] **About section text**
  - Lines 72-73: Update your biography and professional description

- [ ] **Add your projects**
  - Lines 103-242: Update each project card with:
    - Project title (h3)
    - Project description (p)
    - Project category (span)
  - You can duplicate or delete project cards as needed

- [ ] **Replace placeholder images**
  - See `ADDING_IMAGES.md` for detailed instructions
  - Add images to `images/` folder
  - Update HTML to reference your images

## 🎨 Optional Customizations

### Colors

To change the color scheme, edit `style.css` lines 1-9:

```css
--primary-brown: #8b6f47; /* Main color */
--dark-brown: #5e4f38; /* Dark accents */
--cream: #f5f1e8; /* Light background */
--beige: #d4c9b9; /* Secondary light */
--deep-orange: #d97a3a; /* Accent/Call-to-action */
--light-brown: #c8a574; /* Hover states */
```

### Fonts

To change fonts, edit these lines in `style.css`:

- Line 20: `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`

### Spacing & Layout

- Lines 85-91: Adjust navbar padding, gaps
- Line 152: Hero section padding
- Line 204: About section padding
- Line 227: Projects section padding
- Line 266: Contact section padding

## 📱 Testing

- [ ] Test on desktop browser (Chrome, Firefox, Safari, Edge)
- [ ] Test on tablet (landscape and portrait)
- [ ] Test on mobile (iPhone, Android)
- [ ] Check all navigation links work smoothly
- [ ] Test contact form
- [ ] Verify all images load correctly
- [ ] Check all social media links open correctly
- [ ] Test email link (should open email client)
- [ ] Test phone link (should open phone app on mobile)

## 🚀 Deployment (When Ready)

When you're ready to publish your portfolio online:

- [ ] Choose a hosting provider (Netlify, Vercel, GitHub Pages, etc.)
- [ ] Set up a domain name (optional but recommended)
- [ ] Compress all images for faster loading
- [ ] Test on actual hosting before sharing
- [ ] Set up email form functionality (if needed)
- [ ] Add Google Analytics for tracking visitors
- [ ] Create a sitemap.xml for SEO
- [ ] Add robots.txt for SEO

## 📝 Additional Enhancements (Advanced)

Consider adding these later:

- [ ] Lightbox/modal for image galleries
- [ ] Testimonials/client reviews section
- [ ] Pricing section
- [ ] Blog section for photography tips
- [ ] Filter/sort functionality for projects
- [ ] Email notification setup (for contact form)
- [ ] Search functionality
- [ ] Dark mode toggle

## 🔗 Useful Resources

- **Image Compression**: TinyPNG, ImageOptim, Squoosh
- **Color Tools**: Coolors.co, Adobe Color
- **Font Resources**: Google Fonts, Font Awesome
- **Hosting**: Netlify, Vercel, GitHub Pages, Bluehost
- **Email Forms**: Formspree, Basin, EmailJS

## 💡 Tips

1. **Keep it simple** - Your photography should be the focus
2. **Consistent branding** - Use the same fonts and colors throughout
3. **Fast loading** - Optimize images and minimize code
4. **Mobile first** - Design for mobile, then scale up
5. **Regular updates** - Add new projects and update regularly
6. **Ask for feedback** - Get opinions from friends and other photographers

---

**Questions?** Refer to the other guide files:

- `PORTFOLIO_GUIDE.md` - Feature overview
- `ADDING_IMAGES.md` - How to add your photos
