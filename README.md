# Nexora Nav Experience

Build a complete, polished, modern Responsive Landing Page with an Interactive Navigation Menu based on the Task-01 requirements shown in the reference image.

The main purpose of this task is to demonstrate:

Responsive web design

Fixed/sticky navigation

Navigation hover interactions

Scroll-based navigation behavior

Active menu states

Smooth scrolling

Interactive UI

Mobile responsive navigation

This must be a complete working website, not just a visual mockup.

TECHNOLOGY

Use:

React

TypeScript

Tailwind CSS

Modern CSS

Lucide React icons where appropriate

Do NOT use a backend, database, authentication, or Supabase.

The entire website should run in the browser.

PROJECT CONCEPT

Create a professional modern landing page for a fictional technology/product brand.

Use the brand name:

NEXORA

Tagline:

Build. Innovate. Transform.

The website should feel like a modern SaaS/startup landing page.

The main focus of this task is the interactive navigation menu.

NAVIGATION REQUIREMENTS

Create a navigation menu that remains fixed at the top of the page.

The navigation must contain:

NEXORA

Menu items:

Home

Features

Services

About

Contact

Right side:

Get Started

button.

FIXED NAVIGATION

The navbar must remain visible while scrolling.

Use:

position: fixed

or an equivalent sticky navigation implementation.

At the top of the page:

Transparent or slightly glass-like background

Minimal border

After the user scrolls down:

Add a stronger background

Add backdrop blur

Add subtle shadow

Slightly reduce navbar height

Smoothly transition between states

The navbar should never disappear while scrolling.

ACTIVE NAVIGATION ITEM

Detect which section is currently visible on screen.

Highlight the corresponding navigation item.

For example:

When Home is visible:

Home

should have an active underline/accent.

When Features is visible:

Features

should become active.

Continue for all sections.

Use Intersection Observer or an equivalent reliable technique.

Do NOT simply highlight a menu item permanently.

HOVER EFFECTS

When the user hovers over a navigation item:

Change text appearance

Show an animated underline

Smoothly transition the underline

Do not cause layout shifting

Example:

Home
────

The underline should animate from left to right.

Apply this to all navigation links.

CLICK BEHAVIOR

Clicking:

Home
Features
Services
About
Contact

must smoothly scroll to the corresponding section.

Do not reload the page.

Use appropriate anchor IDs and smooth scrolling.

MOBILE NAVIGATION

On smaller screens:

Replace the desktop navigation with a hamburger menu.

Display:

☰

When clicked:

Open a mobile navigation panel

Animate it smoothly

Show all navigation links

Show Get Started button

When a menu item is clicked:

Smoothly scroll to the section

Automatically close the mobile menu

Clicking the hamburger again should close the menu.

Clicking outside the menu should close it if practical.

MOBILE MENU DESIGN

Create a premium mobile menu.

Use:

Dark glassmorphism

Blur

Rounded corners

Smooth slide/fade animation

Clear spacing

Large touch-friendly links

Do not make the mobile menu cover the entire experience unnecessarily.

HERO SECTION

Create a visually impressive hero section.

Large heading:

Build Digital Experiences That Matter.

Subheading:

We create modern digital experiences that help ambitious ideas become powerful products.

Buttons:

Explore Features

Get Started

Explore Features should scroll to Features.

Get Started should scroll to Contact.

HERO VISUAL

On the right side create a modern technology visual.

Use a glassmorphism dashboard/card concept showing:

NEXORA

01  Performance
02  Innovation
03  Growth

+42% Engagement
+68% Productivity


Add subtle floating decorative elements.

Do not use fake external statistics as real business claims.

Clearly present these as visual design elements only, not factual company metrics.

HERO BACKGROUND

Use a modern gradient background.

Suggested style:

Deep purple

Blue

Indigo

Subtle cyan accents

Add:

Soft glowing circles

Abstract gradient shapes

Very subtle grid

Floating decorative elements

Keep the background professional.

Do not overload the page with effects.

FEATURES SECTION

Create:

Powerful Features

Subtitle:

Everything you need to create better digital experiences.

Create 3–4 feature cards.

Smart Design

Create intuitive and engaging user experiences.

Fast Performance

Build responsive experiences that feel fast and smooth.

Scalable Architecture

Design solutions that can grow with your needs.

Seamless Experience

Deliver consistent experiences across devices.

Use icons.

Add subtle hover animations.

SERVICES SECTION

Create:

Our Services

Display 3 cards:

Web Development

Modern responsive websites and web applications.

UI/UX Design

Clean, intuitive, user-centered interfaces.

Digital Solutions

Technology solutions designed around real business needs.

Add:

Icon

Title

Description

Learn More button

Buttons can scroll to Contact if no separate service page exists.

ABOUT SECTION

Create:

About NEXORA

Text:

We believe great digital products combine thoughtful design, reliable technology, and meaningful user experiences.

Add supporting content explaining the fictional brand.

Create a two-column layout:

Left:

Text

Right:

Visual card

Example visual:

DESIGN
   ↓
DEVELOP
   ↓
DEPLOY
   ↓
GROW


PROCESS SECTION

Create:

How We Work

Display a 4-step process:

01
Discover

Understand the problem.

02
Design

Create the right experience.

03
Develop

Build reliable technology.

04
Deliver

Launch and improve.

Use a horizontal timeline on desktop and vertical timeline on mobile.

CALL TO ACTION

Create a strong CTA section.

Heading:

Ready to Build Something Great?

Description:

Let's turn your next idea into a digital experience that makes an impact.

Button:

Get Started

Scroll to Contact.

Use a visually distinct gradient/glass card.

CONTACT SECTION

Create:

Let's Talk

Include a simple frontend contact form:

Name
Email
Message

Button:

Send Message

Validate the form.

Required:

Name

Valid email

Message

After successful validation show:

Thanks! Your message has been received.

Since this is a frontend task, do not pretend the message was sent to a real backend.

Do not create fake API calls.

FOOTER

Create a clean footer.

Display:

NEXORA

Build. Innovate. Transform.

Navigation:

Home

Features

Services

About

Contact

Add social icons as decorative/placeholder links.

Bottom:

© 2026 NEXORA. All rights reserved.

RESPONSIVE DESIGN

The website must be fully responsive.

Test:

1440px

1280px

1024px

768px

430px

390px

360px

Desktop:

Full navigation

Two-column hero

Grid layouts

Tablet:

Adapt columns

Reduce spacing

Mobile:

Hamburger navigation

Single-column hero

Stacked cards

Touch-friendly buttons

Responsive typography

No horizontal scrolling

NAVBAR SCROLL BEHAVIOR

Implement the following exact behavior:

At page top

Navbar:

Transparent

No heavy shadow

Light/white text

After scrolling approximately 50px

Navbar:

Dark translucent background

Backdrop blur

Subtle border

Subtle shadow

Transition duration:

approximately 200–300ms.

Make the transition smooth.

SCROLL SPY

Use Intersection Observer.

When a section becomes the primary visible section, update the active navbar item.

Sections:

#home
#features
#services
#about
#contact


The active menu item should have:

Accent color

Animated underline

Slightly stronger font weight

Do not use excessive visual effects.

SMOOTH SCROLL OFFSET

Because the navbar is fixed, make sure sections do not hide underneath it.

Use appropriate:

scroll-margin-top

or equivalent offset behavior.

BUTTON INTERACTIONS

All buttons must actually work.

Hero:

Explore Features → Features

Get Started → Contact

Navigation:

Each item → corresponding section

Service:

Learn More → Contact or relevant section

CTA:

Get Started → Contact

Mobile menu:

Every item must work

No dead buttons.

ANIMATIONS

Add subtle professional animations:

Hero entrance

Text fade-up

Feature cards reveal

Service cards reveal

About section reveal

Process timeline reveal

Button hover

Navigation underline

Mobile menu slide/fade

Background glow movement

Use Intersection Observer for scroll reveal where appropriate.

Do not make animations excessive.

Respect:

prefers-reduced-motion

ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Visible focus states

Proper button labels

ARIA labels

Accessible hamburger button

aria-expanded for mobile menu

Good color contrast

The navigation must be usable using the keyboard.

PERFORMANCE

Keep the application lightweight.

Avoid:

Heavy animation libraries unless necessary

Large images

Unnecessary dependencies

Continuous expensive JavaScript animations

Prefer CSS transitions and simple React state.

COMPONENT STRUCTURE

Organize the project professionally.

Suggested components:

components/
├── Navbar
├── MobileMenu
├── Hero
├── Features
├── Services
├── About
├── Process
├── CTA
├── Contact
└── Footer


Keep each component focused.

IMPORTANT DESIGN REQUIREMENT

The navbar is the MAIN focus of this task.

Make sure the final implementation clearly demonstrates:

✓ Fixed navigation
✓ Navigation stays visible while scrolling
✓ Hover effect on menu items
✓ Animated underline
✓ Active section detection
✓ Smooth scrolling
✓ Scroll offset for fixed navbar
✓ Mobile hamburger menu
✓ Mobile menu animation
✓ Mobile menu closes after navigation
✓ Navbar changes appearance after scrolling

These interactions must work correctly.

FINAL QUALITY CHECK

Before finishing, test:

Navbar is fixed.

Navbar remains visible while scrolling.

Navbar changes appearance after scrolling.

Home link works.

Features link works.

Services link works.

About link works.

Contact link works.

Smooth scrolling works.

Active section detection works.

Hover underline works.

Mobile hamburger works.

Mobile menu opens.

Mobile menu closes.

Clicking mobile links closes the menu.

Hero buttons work.

CTA works.

Contact form validation works.

No horizontal overflow.

Responsive layout works.

Keyboard navigation works.

No TypeScript errors.

No runtime errors.

No console errors.

No broken buttons.

No placeholder lorem ipsum.

IMPORTANT:

Do not stop at creating a static landing page.

Build the COMPLETE WORKING RESPONSIVE LANDING PAGE, with special attention to the fixed interactive navigation menu, hover effects, scroll behavior, active section detection, mobile navigation, smooth animations, and responsive design.

The final result should look like a polished professional startup/SaaS landing page suitable for submitting as a frontend development task.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7b006556-c380-4856-a6e9-bba23e032263).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
