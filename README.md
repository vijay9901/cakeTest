# Sweet Dreams Bakery - React E-commerce Application

![sweet-dreams-bakery](https://socialify.git.ci/sweet-dreams-bakery/image?custom_language=React&forks=1&issues=1&language=1&name=1&owner=1&pattern=Solid&pulls=1&stargazers=1&theme=Auto)

## 📌 Live Demo
https://sweet-dreams-bakery.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/fec4a869-298c-4e9c-8df6-cb6f132f7bd8/deploy-status)](https://app.netlify.com/sites/sweet-dreams-bakery/deploys)

## 🍰 About Sweet Dreams Bakery

Sweet Dreams Bakery is a premium online cake and dessert e-commerce platform built with modern web technologies. We specialize in custom cakes, cupcakes, pastries, and desserts made fresh daily with the finest ingredients.

## ✨ Features

- **Modern Bakery UI** - Sleek and appetizing design showcasing delicious cakes and desserts
- **Fully Responsive** - Seamless experience across all devices and screen sizes
- **Interactive 3D Cake Model** - Immersive cake customization with Three.js
- **Smart Cart Management** - Easy add-to-cart with real-time total calculations
- **Product Categories** - Organized by cake types: Birthday, Wedding, Chocolate, Special occasions
- **Custom Cake Orders** - Personalized cake ordering with custom messages and designs
- **Production Ready** - Error boundaries, loading states, and optimized performance
- **SEO Optimized** - Full meta tags and social media integration

## 🎂 Cake Categories

- **Birthday Cakes** - Custom birthday celebrations
- **Wedding Cakes** - Elegant multi-tier wedding cakes
- **Chocolate Cakes** - Rich chocolate desserts
- **Cheesecakes** - Creamy and delicious varieties
- **Cupcakes** - Individual treats and gift boxes
- **Special Occasion** - Holiday and themed cakes
- **Macarons & Tarts** - French pastries and fruit tarts

## 🚀 Technologies Used

- **React.js 18** - Modern React with hooks and context
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management for cart and user data
- **Material-UI** - Professional UI components
- **Three.js & React Three Fiber** - 3D cake model interaction
- **React Hot Toast** - Beautiful notifications
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
    ├── App/
    │   └── store.js         # Redux store
    ├── Assets/
    │   ├── Products/        # Cake product images
    │   ├── Collection/      # Category images
    │   ├── Banner/          # Marketing banners
    │   └── ...
    ├── Components/
    │   ├── ErrorBoundary/   # Production error handling
    │   ├── Loading/         # Loading states
    │   ├── Header/          # Navigation (updated for bakery)
    │   ├── Footer/
    │   ├── Home/            # Homepage sections
    │   ├── ShoppingCart/
    │   ├── Model/           # 3D cake model
    │   └── ...
    ├── Data/
    │   └── StoreData.js     # Cake products data
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
git clone https://github.com/your-username/sweet-dreams-bakery.git

# Navigate to project directory
cd sweet-dreams-bakery

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

### Performance
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Fast loading product images
- **Responsive Images** - Adaptive image delivery

### SEO & Analytics
- **Meta Tags** - Complete social media optimization
- **Structured Data** - Search engine optimization
- **Analytics Ready** - Google Analytics integration

### Accessibility
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG compliant design

## 🔧 Configuration

### Environment Variables
```env
REACT_APP_NAME=Sweet Dreams Bakery
REACT_APP_API_URL=your-api-url
REACT_APP_PHONE=your-phone
REACT_APP_EMAIL=your-email
# See .env file for complete configuration
```

### Features Toggle
Enable/disable features through environment variables:
- 3D Model interaction
- Product reviews
- Wishlist functionality
- Push notifications

## 📱 Mobile Optimization

- **Progressive Web App** ready
- **Touch-friendly** interfaces
- **Swipe gestures** for product galleries
- **Mobile-first** responsive design

## 🛡️ Security Features

- **Input validation** on all forms
- **XSS protection** for user content
- **HTTPS ready** for secure transactions
- **Environment variables** for sensitive data

## 📈 Analytics & Monitoring

- Google Analytics integration
- Error tracking and reporting
- Performance monitoring
- User behavior analytics

## 🎨 Customization

### Branding
- Update colors in CSS variables
- Replace logo and favicon
- Customize fonts and typography

### Products
- Modify `src/Data/StoreData.js` for your cake inventory
- Update product categories and pricing
- Add seasonal or special collections

### Content
- Update homepage sections in `src/Components/Home/`
- Customize about page content
- Modify contact information and business hours

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
- 📧 Email: support@sweet-dreams-bakery.com
- 📱 Phone: +1-555-CAKE-123
- 🌐 Website: https://sweet-dreams-bakery.netlify.app

---

## 🌟 Star History

<a href="https://www.star-history.com/#your-username/sweet-dreams-bakery&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=your-username/sweet-dreams-bakery&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=your-username/sweet-dreams-bakery&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=your-username/sweet-dreams-bakery&type=Timeline" />
 </picture>
</a>

🧁 **Sweet Dreams, Sweet Code!** 🧁
---
