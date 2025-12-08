# ☕ CoffeeSoul | Your Mood-Based Caffeine Concierge

> **Not just a drink. It's a mood. A vibe. A tiny dose of therapy.**

CoffeeSoul is an interactive web experience that matches you with your perfect Indian coffee bean and brewing method based on your current mood, personality, and "vibe." Think of it as a personality quiz meets coffee education meets premium UX design.

![CoffeeSoul Banner](src/assets/india_map.png)

---

## ✨ What Makes This Special

### 🧠 **Intelligent Dual-Scoring Algorithm**
Unlike simple personality quizzes, CoffeeSoul uses a **sophisticated tag-based matching system** that scores:
- **Coffee Beans** independently (based on origin, flavor profile, and personality)
- **Brew Methods** independently (based on texture, strength, and ritual)

This means you get a **personalized pairing** that considers both *what* you drink and *how* you make it.

### 🎭 **Personality-Driven Questions**
14 carefully crafted questions that go beyond "Do you like strong coffee?"
- Abstract prompts like *"Pick a soundtrack for your coffee break"*
- Semantic tags like `monsoon`, `creative`, `intensity`, `vintage`
- Questions designed to reveal your **coffee soul**, not just your taste preferences

### 🗺️ **Interactive Map of Indian Coffee Origins**
- **Geographically accurate** pins showing where your recommended bean is grown
- Custom-designed, warm-toned map that matches the app's premium aesthetic
- Regions include: Malabar Coast, Chikmagalur, Wayanad, Araku Valley, and Coorg
- **Computer Vision calibration** ensures pins land precisely on the correct districts

### 🃏 **Multi-Card Result Experience**
After completing the quiz, users navigate through 5 beautifully designed result cards:

1. **Personality Card** - Your coffee personality archetype (e.g., "The Old Soul", "The Dreamer")
2. **Bean Card** - Detailed info about your matched coffee bean with image
3. **Origin Card** - Interactive map showing where your bean is grown
4. **Brew Card** - Step-by-step recipe for your recommended brewing method
5. **Passport Card** - A shareable summary card with all your results

Each card features smooth transitions, glassmorphic design, and rich typography.

---

## 🛠️ Technology Stack

### **Frontend**
- **React 19** - Modern component architecture with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Vanilla CSS** - Custom design system with CSS variables (no frameworks!)
- **html2canvas** - For generating shareable result images

### **Design Philosophy**
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Micro-animations** - Smooth hover states and transitions
- **Responsive Design** - Mobile-first approach with breakpoints
- **Premium Typography** - Custom font stack for readability and elegance

### **Data Architecture**
- **Structured Data Model** - `coffeeData.js` acts as a relational database
- **Tag-Based Matching** - Semantic tags connect questions → beans → brews
- **Modular Components** - Reusable `Quiz`, `ResultCard`, and `CoffeeMap` components

---

## 🤖 AI & Computer Vision: Map Calibration

One of the most technically impressive features is the **automated map pin calibration** system.

### The Challenge
We designed a stylized, artistic map of India with no embedded geographical metadata. Manually placing pins was inaccurate and time-consuming.

### The Solution: Python + OpenCV
We built a custom calibration pipeline (`scripts/calibrate_with_reference.py`) that uses **Computer Vision** to map real-world coordinates to our artistic image.

#### How It Works:
1. **Geographic Bounding Box** - Defined India's lat/lon bounds (8.1°N - 37.1°N, 68.1°E - 97.4°E)
2. **Landmass Detection** - Used **OpenCV (`cv2`)** to detect the map's visual boundaries
3. **Coordinate Transformation**:
   - **Input**: Real-world GPS coordinates (e.g., Araku Valley: 18.33°N, 82.87°E)
   - **Process**: Calculate proportional position within geographic bounds
   - **Output**: Transform to CSS percentages (`top`, `left`) for pixel-perfect placement

This ensures that even on a "vibe-based" artistic map, the geological locations are **scientifically accurate**.

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/CoffeeSoul.git
   cd CoffeeSoul
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
CoffeeSoul/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx              # 14-question quiz component
│   │   ├── ResultCard.jsx        # Multi-card result display
│   │   └── CoffeeMap.jsx         # Interactive India map
│   ├── data/
│   │   └── coffeeData.js         # Beans, brews, questions data
│   ├── assets/
│   │   ├── beans/                # Coffee bean SVG illustrations
│   │   └── india_map.png         # Custom India map
│   ├── App.jsx                   # Main app logic
│   ├── App.css                   # Component styles
│   └── index.css                 # Global styles & variables
├── scripts/
│   └── calibrate_with_reference.py  # Map calibration tool
└── public/
```

---

## 🎨 Design System

### Color Palette
```css
--primary-color: #6F4E37      /* Coffee Brown */
--secondary-color: #8B7355    /* Latte */
--accent-color: #D4A574       /* Caramel */
--dark-color: #231B18         /* Espresso */
--light-bg: #FAF8F5           /* Cream */
```

### Typography
- **Headings**: System font stack optimized for readability
- **Body**: Clean, modern sans-serif
- **Accents**: Italic styles for personality descriptions

---

## 🌟 Featured Coffee Beans

| Bean | Region | Personality | Flavor Profile |
|------|--------|-------------|----------------|
| **Monsooned Malabar AA** | Malabar Coast, Karnataka | The Old Soul | Earthy, Spicy, Mellow |
| **Mysore Nuggets Extra Bold** | Chikmagalur, Karnataka | The High Achiever | Chocolaty, Smooth, Hints of Spice |
| **Wayanad Robusta** | Wayanad, Kerala | The Powerhouse | Bold, Intense, Grainy |
| **Araku Valley Micro-Lot** | Araku Valley, Andhra Pradesh | The Dreamer | Fruity, Citrus, Caramel |
| **Coorg Arabica** | Coorg, Karnataka | The Naturalist | Balanced, Blueberry, Toast |

---

## 🧪 Brew Methods Included

- **South Indian Filter** - Traditional decoction-based coffee
- **French Press** - Immersion brewing for heavy body
- **Pour-Over (V60)** - Clean, tea-like, aromatic
- **Moka Pot** - Stovetop pressure brewing
- **Cold Brew** - Smooth, sweet, low acid

Each method includes a detailed step-by-step recipe.

---

## 🚀 Future Enhancements

- [ ] User accounts to save results
- [ ] Social sharing with custom OG images
- [ ] Coffee shop locator based on bean availability
- [ ] Expanded bean database with seasonal varieties
- [ ] Multi-language support (Hindi, Tamil, Kannada)
- [ ] Dark mode toggle

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Coffee data sourced from Indian Coffee Board research
- Map calibration inspired by GIS mapping techniques
- Bean illustrations created with SVG for scalability
- Special thanks to the coffee farmers of India 🌱

---

## 👨‍💻 Developer

Built with ☕ and code by **Ankush**

---

**Ready to find your coffee soul?** Run the app and discover your perfect brew! ✨
