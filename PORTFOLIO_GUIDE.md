# Lerato's Photography Portfolio

A modern, responsive photography portfolio website with a warm autumn color scheme.

## Features

✨ **Complete Portfolio Website** with:

- **Navigation Bar** - Sticky navigation with smooth scrolling and mobile hamburger menu
- **Home Page** - Eye-catching hero section with call-to-action button
- **About Page** - Personal biography and story section
- **Projects Page** - Grid layout showcasing 6 photography projects with descriptions
- **Contact Page** - Contact form with email and phone information
- **Footer** - Social media links (Instagram & TikTok) and copyright info

## Color Palette

Warm Autumn Colors:

- **Primary Brown**: #8B6F47
- **Dark Brown**: #5E4F38
- **Cream**: #F5F1E8
- **Beige**: #D4C9B9
- **Deep Orange**: #D97A3A
- **Light Brown**: #C8A574

## Files Included

- `index.html` - Main HTML file with complete page structure
- `style.css` - Complete styling with responsive design
- `script.js` - JavaScript for interactivity and navigation

## Getting Started

1. **Open the Portfolio**
   - Simply open `index.html` in your web browser

2. **Customize Your Information**
   - Replace "Lerato's Photography" with your name in the navigation bar and footer
   - Update the email address in the Contact section (replace `your.email@example.com`)
   - Update the phone number in the Contact section (replace `+1 (234) 567-8900`)
   - Update location information in the Contact section

3. **Add Your Photos**
   - Create an `images/` folder in the portfolio directory
   - Replace the placeholder boxes with your images by updating the HTML
   - For each section, replace the `.placeholder-box` divs with `<img>` tags

4. **Update Project Information**
   - Edit each project card with your project titles
   - Add detailed descriptions for each photography project
   - Update category tags (Portrait, Landscape, Event, Commercial, Nature, Wedding, etc.)

5. **Connect Social Media**
   - Update Instagram link: Find `href="https://instagram.com"` and replace with your Instagram profile URL
   - Update TikTok link: Find `href="https://tiktok.com"` and replace with your TikTok profile URL

## Customization Tips

### Adding More Projects

To add more projects, duplicate the project card HTML:

```html
<div class="project-card">
  <div class="project-image-placeholder">
    <div class="placeholder-box">
      <i class="fas fa-image"></i>
      <p>Project Name</p>
    </div>
  </div>
  <div class="project-info">
    <h3>Project Title</h3>
    <p>Project description here</p>
    <span class="project-category">Category</span>
  </div>
</div>
```

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-brown: #8b6f47;
  --dark-brown: #5e4f38;
  /* ... change these colors to your preference */
}
```

### Responsive Design

The portfolio is fully responsive and works on:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (less than 768px)

## Features Included

✅ Smooth scrolling navigation
✅ Mobile hamburger menu
✅ Active link highlighting
✅ Hover effects and animations
✅ Contact form with validation
✅ Fully responsive design
✅ Font Awesome icons
✅ SEO-friendly structure

## Browser Support

Works on all modern browsers:

- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Notes

- The portfolio uses Font Awesome icons for decorative elements
- All images are currently placeholders - replace with your own photos
- The contact form is a frontend form - for email functionality, you'll need to integrate with a backend service (Firebase, Formspree, etc.)

Enjoy your new photography portfolio! 📸
