# ITVE - Institutes of Technical & Vocational Education

## Project Overview
This is a modern, responsive landing page for the Institutes of Technical & Vocational Education (ITVE), designed to showcase the institution's programs, values, and offerings to prospective students. 


## Tech Stack Used
- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Modern styling with Flexbox and Grid layouts, responsive design
- **JavaScript (ES6)**: Interactive functionality including pagination system, mobile menu toggle, and scroll detection

## How to Run Locally
1. Clone or download the repository
2. Open the `index.html` file in your preferred web browser
3. Alternatively, you can use a local server:
   - Python: Run `python -m http.server` in the project directory and visit `http://localhost:8000`
   - Node.js: Install `live-server` and run `live-server` in the project directory

## Pagination Implementation
The website implements a scroll-snap pagination system with the following features:

1. **Visual Pagination Indicators**: A column of interactive dots on the right side of the screen that correspond to each section of the page
2. **Interactive Navigation**: Clicking on a dot smoothly scrolls to the corresponding section
3. **Active State Tracking**: As the user scrolls, the active dot changes to reflect the current section in view
4. **Navigation Link Integration**: Main navigation links also update the active dot and scroll to sections
5. **Responsive Behavior**: Pagination dots are hidden on mobile devices to optimize screen space

The JavaScript implementation:
- Adds click event listeners to each dot element
- Uses `window.scrollTo()` with smooth behavior for smooth scrolling
- Implements a scroll event listener to update the active dot based on the current viewport position
- Calculates the current section based on the scroll position and section heights

## Key Design Decisions

### Visual Design
- **Color Scheme**: Professional blue gradient (#1e3c72 to #2a5298) conveying trust and education
- **Typography**: Clean, readable font stack prioritizing user experience
- **Whitespace**: Ample spacing to create a modern, uncluttered appearance
- **Visual Hierarchy**: Clear distinction between sections with different background colors

### User Experience
- **Navigation**: Fixed header for easy access to navigation from any point on the page
- **Mobile-First Approach**: Responsive hamburger menu for smaller screens
- **Section Organization**: Logical flow from introduction to programs to reasons to choose ITVE

### Technical Implementation
- **Responsive Grid**: CSS Grid and Flexbox for adaptive layouts across device sizes
- **Performance**: Lightweight JavaScript with efficient event handling
- **Accessibility**: Semantic HTML and proper heading hierarchy
- **Cross-Browser Compatibility**: Standard CSS properties without experimental features
- **Interactive Elements**: Dropdown functionality for program specializations

## Features
- Fully responsive design for mobile, tablet, and desktop
- Interactive navigation with active state tracking
- Mobile-friendly navigation with hamburger menu
- Statistics section highlighting key metrics
- Program cards with hover animations
- Contact information section
- Comprehensive footer

## Sections
1. **Hero**: Compelling introduction with clear value proposition
2. **About**: Institution overview and key statistics
3. **Programs**: Grid of available educational programs
4. **Why Choose Us**: Features highlighting institutional advantages
5. **Apply**: Call-to-action section encouraging enrollment
6. **Contact**: Essential contact information