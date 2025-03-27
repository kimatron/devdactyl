# Devdactyl - Modern Software Development & Web Design Website

This is the official repository for the Devdactyl company website, featuring modern design elements and a smooth user experience.

## Project Structure

The website is built with a clean, component-based architecture:

```
devdactyl-website/
│
├── index.html                  # Main landing page
├── about.html                  # About page
├── services.html               # Services page
├── portfolio.html              # Portfolio page
├── blog/                       # Blog directory
│   ├── index.html              # Blog listing page
│   └── posts/                  # Individual blog posts
│       └── sample-post.html    # Sample blog post
├── contact.html                # Contact page
│
├── assets/                     # All assets
│   ├── css/                    # CSS files
│   │   ├── main.css            # Main stylesheet
│   │   └── components/         # Component-specific styles
│   ├── js/                     # JavaScript files
│   │   ├── main.js             # Main JavaScript file
│   │   └── components/         # Component-specific scripts
│   └── images/                 # Image assets
│       └── logo.svg
│
└── README.md                   # Project documentation
```

## Features

- **Modern Design:** Clean, minimalist aesthetic with modern UI elements
- **Responsive Layout:** Fully responsive across all device sizes
- **Interactive Elements:** Smooth animations and transitions for enhanced UX
- **SEO Optimized:** Built with best practices for search engine visibility
- **Performance Focused:** Optimized for fast loading and smooth interactions

## Implementation Steps

This project is being built incrementally with the following steps:

1. **Project Structure Setup:** Basic directory structure and placeholders
2. **Landing Page HTML:** Core HTML structure for the main page
3. **Core CSS Styling:** Main stylesheet with variables and base components
4. **Hero Section Animation:** Interactive highlight effect
5. **Main JavaScript Functionality:** Navigation, animations, and interactions
6. **Additional Pages:** About, Services, Portfolio, Blog, and Contact
7. **SEO Optimization:** Meta tags, semantic HTML, and performance tuning
8. **Testing & Refinement:** Cross-browser testing and fine-tuning

## Development

To set up this project locally:

1. Clone the repository:
```bash
git clone https://github.com/kimatron/devdactyl.git
cd devdactyl
```

2. Open `index.html` in your browser or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js and npx
npx serve
```

## Commit Guidelines

When contributing to this project, please use semantic commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `style:` for styling changes
- `docs:` for documentation
- `refactor:` for code refactoring
- `perf:` for performance improvements
- `test:` for adding tests
- `chore:` for maintenance tasks

Example: `feat: add hero section with highlight effect`

## Next Steps

- Complete responsive layouts for all pages
- Add form functionality for the contact page
- Integrate a CMS for the blog section
- Implement analytics tracking
- Set up deployment pipeline

## License

All rights reserved. This code is not licensed for reuse without permission.

## Contact

For any inquiries, please contact [hello@devdactyl.com](mailto:hello@devdactyl.tech)