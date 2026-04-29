# Adding Images to Your Portfolio

## Quick Start

1. **Create an images folder** in your portfolio directory:
   - `leratos portfolio/images/`

2. **Add your photos** to this folder with clear names like:
   - `hero.jpg`
   - `about-me.jpg`
   - `project-1.jpg`, `project-2.jpg`, etc.

## Replacing Placeholders

### Hero Section

Find this in `index.html` (around line 48-55):

```html
<div class="hero-image-placeholder">
  <div class="placeholder-box">
    <i class="fas fa-camera"></i>
    <p>Your featured image here</p>
  </div>
</div>
```

Replace with:

```html
<div class="hero-image-placeholder">
  <img src="images/hero.jpg" alt="Featured photography" />
</div>
```

Then add this to `style.css`:

```css
.hero-image-placeholder img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}
```

### About Section

Find this in `index.html` (around line 93-100):

```html
<div class="about-image-placeholder">
  <div class="placeholder-box">
    <i class="fas fa-user"></i>
    <p>Your photo here</p>
  </div>
</div>
```

Replace with:

```html
<div class="about-image-placeholder">
  <img src="images/about-me.jpg" alt="About me photograph" />
</div>
```

Add to `style.css`:

```css
.about-image-placeholder img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}
```

### Project Cards

For each project card (there are 6), find:

```html
<div class="project-image-placeholder">
  <div class="placeholder-box">
    <i class="fas fa-image"></i>
    <p>Project 1</p>
  </div>
</div>
```

Replace with:

```html
<div class="project-image-placeholder">
  <img src="images/project-1.jpg" alt="Project title" />
</div>
```

And update the project info:

```html
<h3>Your Project Title</h3>
<p>Add your detailed project description here...</p>
<span class="project-category">Category</span>
```

Add to `style.css`:

```css
.project-image-placeholder img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}
```

## Image Guidelines

**Recommended Sizes:**

- Hero image: 1200x600px (wide format for impact)
- About image: 500x400px
- Project cards: 400x300px

**File Types:**

- JPG (best for photographs)
- PNG (good for professional portraits)
- WebP (modern format, smaller file size)

**File Size:**

- Keep images optimized (50-200KB each)
- Use online tools like TinyPNG or ImageOptim to compress

## Folder Structure After Adding Images

```
leratos portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── PORTFOLIO_GUIDE.md
├── ADDING_IMAGES.md (this file)
└── images/
    ├── hero.jpg
    ├── about-me.jpg
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    ├── project-4.jpg
    ├── project-5.jpg
    └── project-6.jpg
```

## Tips for Best Results

1. **Use high-quality photos** - Photography portfolios should showcase your best work
2. **Maintain consistency** - Use similar lighting and editing styles
3. **Optimize for web** - Compress images to load faster
4. **Add alt text** - Helps with SEO and accessibility (as shown in examples above)
5. **Test responsiveness** - Check how images look on mobile and tablet

## Removing Unused Projects

If you only have 3 projects instead of 6, simply remove the extra project-card divs from the HTML.

For example, delete:

```html
<!-- Project 4 -->
<div class="project-card">...</div>

<!-- Project 5 -->
<div class="project-card">...</div>

<!-- Project 6 -->
<div class="project-card">...</div>
```

The grid will automatically adjust!

Good luck with your portfolio! 📸✨
