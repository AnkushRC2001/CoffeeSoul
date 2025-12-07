// Bean Data with Map Coordinates (Approximate for visual map)
export const beans = [
  {
    id: 'monsooned-malabar',
    name: 'Monsooned Malabar AA',
    region: 'Malabar Coast, Karnataka',
    coordinates: { top: '76.7%', left: '30.8%' }, // Visual position on map
    roast: 'Medium',
    flavor: 'Earthy, Spicy, Mellow',
    description: "A unique coffee exposed to monsoon winds. Low acidity, heavy body, and a distinct earthy flavor.",
    tags: ['monsoon', 'spicy', 'heavy', 'rainy', 'calm', 'thick', 'earthy', 'thoughts'],
    facts: [
      "Created by accident when beans transported by sea swelled due to humidity.",
      "Has Geographical Indication (GI) status.",
      "Known for extremely low acidity."
    ]
  },
  {
    id: 'mysore-nuggets',
    name: 'Mysore Nuggets Extra Bold',
    region: 'Chikmagalur, Karnataka',
    coordinates: { top: '75.6%', left: '33.0%' },
    roast: 'Medium-Dark',
    flavor: 'Chocolaty, Smooth, Hints of Spice',
    description: "The 'Gold Nuggets' of Indian Arabica. Large, premium beans with a rich, full-bodied cup.",
    tags: ['focus', 'chocolaty', 'smooth', 'morning', 'productive', 'rich', 'deadline', 'strong'],
    facts: [
      "Represents the highest grade of washed Arabica from India.",
      "Grown in the Baba Budan Giri hills.",
      "Perfect balance of acid and body."
    ]
  },
  {
    id: 'robusta-kaapi',
    name: 'Wayanad Robusta (Kaapi Royale)',
    region: 'Wayanad, Kerala',
    coordinates: { top: '80.3%', left: '33.8%' },
    roast: 'Dark',
    flavor: 'Bold, Intense, Grainy',
    description: "High caffeine, strong body. The backbone of traditional South Indian Filter Coffee.",
    tags: ['energy', 'bitter', 'punchy', 'traditional', 'awake', 'strong', 'traffic', 'fritters', 'thick'],
    facts: [
      "Wayanad produces some of the finest soft Robusta in the world.",
      "Contains almost double the caffeine of Arabica.",
      "Ideally paired with milk and sugar."
    ]
  },
  {
    id: 'araku-valley',
    name: 'Araku Valley Micro-Lot',
    region: 'Araku Valley, Andhra Pradesh',
    coordinates: { top: '61.8%', left: '50.3%' },
    roast: 'Light-Medium',
    flavor: 'Fruity, Citrus, Caramel',
    description: "Award-winning coffee known for its complex flavor profile and sustainable cultivation.",
    tags: ['creative', 'fruity', 'light', 'afternoon', 'inspired', 'tea-like', 'sketchbook', 'tart', 'rich'],
    facts: [
      "Grown by tribal farmers in the Eastern Ghats.",
      "Often wins international cupping competitions.",
      "Known for organic and biodynamic farming practices."
    ]
  },
  {
    id: 'coorg-arabica',
    name: 'Coorg Arabica (Canopy Grown)',
    region: 'Coorg, Karnataka',
    coordinates: { top: '78.1%', left: '32.9%' },
    roast: 'Medium',
    flavor: 'Balanced, Blue Berry, Toast',
    description: "Grown under the shade of rainforest trees, offering a sweet and balanced cup.",
    tags: ['calm', 'sweet', 'smooth', 'rainy', 'comfort', 'monsoon'],
    facts: [
      "Coorg is known as the 'Coffee Cup of India'.",
      "Grown in biodiversity hotspots.",
      "Has a natural sweetness due to shade growing."
    ]
  }
];

// Brew Methods with Recipes
export const brewMethods = [
  {
    id: 'filter',
    name: 'South Indian Filter',
    description: "The traditional way. Strong, decoction-based coffee perfect for milk.",
    tags: ['traditional', 'strong', 'morning', 'thick', 'energy', 'family', 'fritters', 'traffic'],
    recipe: [
      "Add 3 tbsp filter coffee powder to the upper chamber.",
      "Press the powder down with the tamper.",
      "Pour 100ml boiling water over the tamper.",
      "Close lid and wait 15 mins for decoction to drip.",
      "Mix decoction with hot frothy milk and sugar to taste."
    ]
  },
  {
    id: 'french-press',
    name: 'French Press',
    description: "Immersion brewing for a heavy, rich body and textured mouthfeel.",
    tags: ['rainy', 'heavy', 'thick', 'calm', 'earthy', 'thoughts', 'monsoon', 'spicy'],
    recipe: [
      "Add 20g coarse ground coffee to the press.",
      "Pour 300ml hot water (not boiling).",
      "Stir gently and cover. Wait 4 minutes.",
      "Press the plunger down slowly.",
      "Pour immediately and enjoy the texture."
    ]
  },
  {
    id: 'pourover',
    name: 'Pour-Over (V60)',
    description: "A paper filter method for a clean, tea-like, and aromatic cup.",
    tags: ['creative', 'light', 'tea-like', 'fruity', 'afternoon', 'sketchbook', 'tart', 'inspired'],
    recipe: [
      "Place paper filter in V60 and rinse with hot water.",
      "Add 15g medium-fine coffee.",
      "Pour 30g water to 'bloom' (wet beans). Wait 30s.",
      "Pour remaining 220g water in slow circles.",
      "Total brew time should be around 2:30 minutes."
    ]
  },
  {
    id: 'mokapot',
    name: 'Moka Pot',
    description: "Stovetop pressure brewing. Intense, almost like espresso.",
    tags: ['focus', 'strong', 'punchy', 'bitter', 'awake', 'deadline', 'productive', 'chocolaty'],
    recipe: [
      "Fill bottom chamber with water up to the valve.",
      "Fill filter basket with fine coffee. Do not tamp.",
      "Screw on top and place on medium heat.",
      "Remove from heat when it gurgles and flow creates foam.",
      "Stir and serve black or with a little milk."
    ]
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: "Steeped cold for 12+ hours. Smooth, sweet, and low acid.",
    tags: ['hot', 'smooth', 'sweet', 'afternoon', 'rich', 'relaxed'],
    recipe: [
      "Mix coarse coffee and room temp water (1:10 ratio).",
      "Leave in fridge/counter for 12-18 hours.",
      "Strain through a cloth or paper filter.",
      "Serve over ice, diluted with water or milk."
    ]
  }
];

export const questions = [
  {
    id: 1,
    text: "What vibe are you chasing right now?",
    options: [
      { text: "A warm hug on a rainy day", value: "monsoon" },
      { text: "Laser focus to crush goals", value: "focus" },
      { text: "Creative inspiration & flow", value: "creative" },
      { text: "Pure energy to wake up", value: "energy" }
    ]
  },
  {
    id: 2,
    text: "What is your flavor personality?",
    options: [
      { text: "Earthy, spicy, and deep", value: "spicy" },
      { text: "Rich dark chocolate", value: "chocolaty" },
      { text: "Bright, fruity, and floral", value: "fruity" },
      { text: "Strong, bold, and punchy", value: "bitter" }
    ]
  },
  {
    id: 3,
    text: "Ideally, where are you sipping this?",
    options: [
      { text: "Curled up in a blanket", value: "rainy" },
      { text: "At my desk, getting things done", value: "morning" },
      { text: "On a sunny balcony", value: "afternoon" },
      { text: "Standing at a Darshini", value: "traditional" }
    ]
  },
  {
    id: 4,
    text: "How do you like the body/texture of your coffee?",
    options: [
      { text: "Thick and heavy", value: "thick" },
      { text: "Smooth as silk", value: "smooth" },
      { text: "Tea-like and delicate", value: "tea-like" },
      { text: "Syrupy and intense", value: "punchy" }
    ]
  },
  {
    id: 5,
    text: "Pick a soundtrack for your coffee break.",
    options: [
      { text: "Rain sounds & acoustic guitar", value: "calm" },
      { text: "Lo-fi beats to study to", value: "focus" },
      { text: "Soft Jazz or Classical", value: "creative" },
      { text: "City traffic & loud chatter", value: "traffic" }
    ]
  },
  {
    id: 6,
    text: "Select your ideal companion.",
    options: [
      { text: "Just my own thoughts", value: "thoughts" },
      { text: "A looming deadline", value: "deadline" },
      { text: "A sketchbook or notebook", value: "sketchbook" },
      { text: "A newspaper", value: "traditional" }
    ]
  },
  {
    id: 7,
    text: "What is the weather outside?",
    options: [
      { text: "Stormy monsoon rains", value: "rainy" },
      { text: "Crisp early morning", value: "morning" },
      { text: "Golden hour sunset", value: "afternoon" },
      { text: "Hot and humid", value: "hot" }
    ]
  },
  {
    id: 8,
    text: "What dessert would you pair it with?",
    options: [
      { text: "Spicy fritters (Bhaji)", value: "fritters" },
      { text: "Dark chocolate mousse", value: "chocolaty" },
      { text: "Lemon tart", value: "tart" },
      { text: "Osmania Biscuits", value: "strong" }
    ]
  },
  {
    id: 9,
    text: "How do you want to feel afterwards?",
    options: [
      { text: "Calm and centered", value: "calm" },
      { text: "Productive machine", value: "productive" },
      { text: "Inspired and artistic", value: "inspired" },
      { text: "Wide awake and buzzing", value: "awake" }
    ]
  },
  {
    id: 10,
    text: "One word to describe your perfect cup?",
    options: [
      { text: "Mellow", value: "earthy" },
      { text: "Rich", value: "rich" },
      { text: "Complex", value: "light" },
      { text: "Strong", value: "strong" }
    ]
  }
];

