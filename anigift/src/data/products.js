export const products = [
  { id: 1, name: 'Goku Ultra Instinct', series: 'Dragon Ball Super', price: 129.99, emoji: '🦸', badge: 'hot', oldPrice: 159.99 },
  { id: 2, name: 'Naruto Hokage Statue', series: 'Naruto Shippuden', price: 89.99, emoji: '🍥', badge: 'new' },
  { id: 3, name: 'Sailor Moon Eternal', series: 'Sailor Moon', price: 74.99, emoji: '🌙', badge: '' },
  { id: 4, name: 'Tanjiro Sun Breathing', series: 'Demon Slayer', price: 99.99, emoji: '⚔️', badge: 'hot' },
  { id: 5, name: 'Totoro Forest Spirit', series: 'Studio Ghibli', price: 59.99, emoji: '🌳', badge: '' },
  { id: 6, name: 'Luffy Gear Fifth', series: 'One Piece', price: 119.99, emoji: '🏴‍☠️', badge: 'new' },
  { id: 7, name: 'Levi Ackerman', series: 'Attack on Titan', price: 94.99, emoji: '⚡', badge: 'hot' },
  { id: 8, name: 'Hatsune Miku', series: 'Vocaloid', price: 69.99, emoji: '🎤', badge: '' },
  { id: 9, name: 'Gojo Satoru', series: 'Jujutsu Kaisen', price: 84.99, emoji: '👁️', badge: 'new' },
  { id: 10, name: 'Pikachu Kanto', series: 'Pokémon', price: 49.99, emoji: '⚡', badge: '' },
  { id: 11, name: 'Spirited Away Bathhouse', series: 'Studio Ghibli', price: 109.99, emoji: '🏯', badge: '' },
  { id: 12, name: 'Eren Titan Form', series: 'Attack on Titan', price: 139.99, emoji: '🔥', badge: 'hot' },
];

export const trending = products.slice(0, 6);
export const featured = products.slice(6, 12);
