# CakeFest - React E-commerce Application

![cakefest](https://socialify.git.ci/cakefest/image?custom_language=React&forks=1&issues=1&language=1&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Auto)

## 📌 Live Demo
https://cakefest.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/fec4a869-298c-4e9c-8df6-cb6f132f7bd8/deploy-status)](https://app.netlify.com/sites/cakefest/deploys)

## 🍰 About CakeFest

CakeFest is Bangalore's premier online cake and dessert e-commerce platform built with modern web technologies. We specialize in custom cakes, cupcakes, pastries, and desserts made fresh daily with the finest ingredients, delivered right to your doorstep in Bangalore.

**📍 Location:** Broke Field, Bangalore - 560085

## ✨ Features

- **Modern Bakery UI** - Sleek and appetizing design showcasing delicious cakes and desserts
- **Fully Responsive** - Seamless experience across all devices and screen sizes
- **Interactive 3D Cake Model** - Immersive cake customization with Three.js
- **Smart Cart Management** - Easy add-to-cart with real-time total calculations
- **Product Categories** - Organized by cake types: Birthday, Wedding, Chocolate, Special occasions
- **Custom Cake Orders** - Personalized cake ordering with custom messages and designs
- **Production Ready** - Error boundaries, loading states, and optimized performance
- **SEO Optimized** - Full meta tags and social media integration
- **Global CSS Variables** - Centralized theme control for easy customization

## 🎂 Cake Categories

- **Birthday Cakes** - Custom birthday celebrations with photo prints
- **Wedding Cakes** - Elegant multi-tier wedding cakes (serves 40-50 people)
- **Chocolate Cakes** - Rich chocolate desserts and Black Forest varieties
- **Cheesecakes** - Creamy New York style with fresh toppings
- **Cupcakes** - Individual treats and gift boxes (12-24 pieces)
- **Special Occasion** - Red Velvet, Carrot, Tiramisu, and themed cakes
- **Macarons & Tarts** - French pastries and fruit tarts

## 🚀 Technologies Used

- **React.js 18** - Modern React with hooks and context
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management for cart and user data
- **Material-UI** - Professional UI components
- **Three.js & React Three Fiber** - 3D cake model interaction
- **React Hot Toast** - Beautiful notifications
- **Global CSS Variables** - Centralized theme management
- **Responsive Design** - Mobile-first approach
- **Error Boundaries** - Production-ready error handling
- **Environment Configuration** - Configurable for different deployments

---

## 📁 Project Structure

```
├── .env                      # Environment configuration
├── .gitignore
├── netlify.toml
├── package.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html           # SEO optimized
│   ├── manifest.json
│   └── shirt_baked_2.glb    # 3D cake model
└── src/
    ├── App.js               # Main app with error boundary
    ├── App.css
    ├── index.js
    ├── index.css
    ├── styles/
    │   └── globals.css      # Global CSS variables
    ├── App/
    │   └── store.js         # Redux store
    ├── Assets/              # Static assets
    ├── Components/
    │   ├── ErrorBoundary/   # Production error handling
    │   ├── Loading/         # Loading states
    │   ├── Header/          # Navigation (updated for CakeFest)
    │   ├── Footer/
    │   ├── Home/            # Homepage sections
    │   ├── ShoppingCart/
    │   ├── Model/           # 3D cake model
    │   └── ...
    ├── Data/
    │   └── StoreData.js     # Cake products data with Unsplash images
    ├── Features/            # Redux slices
    └── Pages/               # Route components
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/cakefest.git

# Navigate to project directory
cd cakefest

# Install dependencies
npm install

# Start development server
npm start
```

### Environment Setup

1. Copy `.env` file and customize for your environment
2. Update API URLs, contact information, and social media links
3. Configure payment gateway and analytics IDs

### Production Build

```bash
# Create production build
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## 🎯 Production Features

### Error Handling
- **Error Boundaries** - Graceful error recovery
- **Loading States** - Professional loading indicators  
- **Toast Notifications** - User-friendly feedback

### Global CSS Theme System
- **CSS Variables** - Centralized color and theme control
- **Responsive Typography** - Adaptive font sizes
- **Utility Classes** - Pre-built styling components
- **Dark Mode Ready** - Theme switching capability

### Performance
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Fast loading cake images from Unsplash
- **Responsive Images** - Adaptive image delivery

### SEO & Analytics
- **Meta Tags** - Complete social media optimization
- **Structured Data** - Search engine optimization
- **Analytics Ready** - Google Analytics integration

## 🔧 Configuration

### Environment Variables
```env
REACT_APP_NAME=CakeFest
REACT_APP_API_URL=https://api.cakefest.com
REACT_APP_PHONE=+91-9876-543-210
REACT_APP_EMAIL=orders@cakefest.com
REACT_APP_ADDRESS=Broke Field, Bangalore - 560085
# See .env file for complete configuration
```

### Global CSS Variables
Control the entire theme from `src/styles/globals.css`:
```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #ffa726;
  --accent-color: #8bc34a;
  /* And many more... */
}
```

## 🎨 Customization

### Theme Colors
Update colors globally in `src/styles/globals.css`:
- Primary colors for buttons and accents
- Background and text colors
- Border and shadow colors
- Success/error states

### Products
- Modify `src/Data/StoreData.js` for your cake inventory
- High-quality cake images from Unsplash
- Indian pricing (₹699 - ₹8999)
- Detailed product information with allergens

### Branding
- All text updated to CakeFest
- Bangalore location integrated
- Indian phone number format
- Local business hours

## 📱 Mobile Optimization

- **Progressive Web App** ready
- **Touch-friendly** interfaces for mobile users
- **Swipe gestures** for product galleries
- **Mobile-first** responsive design

## 🏪 Business Information

- **Name:** CakeFest
- **Location:** Broke Field, Bangalore - 560085
- **Phone:** +91-9876-543-210
- **Email:** orders@cakefest.com
- **Hours:** Mon-Sat: 7AM-8PM, Sun: 8AM-6PM

## 📦 Cake Details

All cakes include:
- **Weight** specifications (800g - 5kg)
- **Serving** information (6-50 people)
- **Allergen** warnings (eggs, dairy, nuts, etc.)
- **Custom options** for special requests
- **Fresh daily** preparation guarantee

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- 📧 Email: support@cakefest.com
- 📱 Phone: +91-9876-543-210
- 🌐 Website: https://cakefest.netlify.app
- 📍 Visit us: Broke Field, Bangalore - 560085

---

## 🌟 Star History

<a href="https://www.star-history.com/#your-username/cakefest&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=your-username/cakefest&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=your-username/cakefest&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=your-username/cakefest&type=Timeline" />
 </picture>
</a>

🎂 **CakeFest - Where Every Bite is a Celebration!** 🎂
---
