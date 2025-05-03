import { priceRanges } from '../data/products';

export const filterProducts = (products, filters) => {
  return products.filter(product => {
    // Search filter
    const searchMatch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                       product.description.toLowerCase().includes(filters.search.toLowerCase());

    // Category filter
    const categoryMatch = filters.category === 'all' || product.category === filters.category;

    // Price range filter
    let priceMatch = true;
    if (filters.priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === filters.priceRange);
      priceMatch = product.price >= range.min && product.price <= range.max;
    }

    return searchMatch && categoryMatch && priceMatch;
  });
};