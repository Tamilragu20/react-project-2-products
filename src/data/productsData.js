import headphonesImg from '../assets/prod-headphones.svg';
import watchImg from '../assets/prod-watch.svg';
import keyboardImg from '../assets/prod-keyboard.svg';
import lampImg from '../assets/prod-lamp.svg';
import backpackImg from '../assets/prod-backpack.svg';
import monitorImg from '../assets/prod-monitor.svg';

export const categories = ['All', 'Audio', 'Wearables', 'Workspace', 'Accessories'];

export const productsData = [
  {
    id: 'prod-1',
    name: 'StudioPulse Wireless ANC Headphones',
    category: 'Audio',
    price: 189.99,
    rating: 4.8,
    stock: 18,
    image: headphonesImg,
    description: 'Active noise-canceling over-ear headphones with 40-hour battery life and spatial audio.',
  },
  {
    id: 'prod-2',
    name: 'AeroTrack Pro Fitness Watch',
    category: 'Wearables',
    price: 229.0,
    rating: 4.7,
    stock: 11,
    image: watchImg,
    description: 'AMOLED health tracker with continuous heart-rate telemetry, GPS, and 10-day battery.',
  },
  {
    id: 'prod-3',
    name: 'KeyForge 75% Mechanical Keyboard',
    category: 'Workspace',
    price: 139.5,
    rating: 4.9,
    stock: 24,
    image: keyboardImg,
    description: 'Hot-swappable tactile switches, anodized aluminum frame, and dual wireless connectivity.',
  },
  {
    id: 'prod-4',
    name: 'Lumina Arc Architect Desk Lamp',
    category: 'Workspace',
    price: 74.0,
    rating: 4.6,
    stock: 15,
    image: lampImg,
    description: 'Stepless color-temperature LED lamp with glare-free optics and touch dimming.',
  },
  {
    id: 'prod-5',
    name: 'Nomad 22L Commuter Tech Pack',
    category: 'Accessories',
    price: 112.0,
    rating: 4.8,
    stock: 9,
    image: backpackImg,
    description: 'Weather-resistant nylon backpack with padded 16-inch laptop sleeve and quick-access pockets.',
  },
  {
    id: 'prod-6',
    name: 'UltraView 27" QHD Studio Display',
    category: 'Workspace',
    price: 349.0,
    rating: 4.9,
    stock: 6,
    image: monitorImg,
    description: 'Factory-calibrated IPS display with 99% sRGB coverage and single-cable USB-C hub.',
  },
];
