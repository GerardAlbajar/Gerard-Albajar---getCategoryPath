import { expect, test } from 'vitest'
import { getCategoryPath } from '../src/App.vue';

const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

test('When "category4" is provided, Then it should return the correct path "/category1/category3/category4"', () => {
    const path = getCategoryPath(categories, 'category4');
    expect(path).toBe('/category1/category3/category4');
});

test('When "category2" is provided, Then it should return the correct path "/category1/category2"', () => {
    const path = getCategoryPath(categories, 'category2');
    expect(path).toBe('/category1/category2');
});

test('When "category5" is provided, Then it should return the correct path "/category5"', () => {
    const path = getCategoryPath(categories, 'category5');
    expect(path).toBe('/category5');
});

test('When a non-existent category is provided, Then it should return null', () => {
    const path = getCategoryPath(categories, 'nonExistentCategory');
    expect(path).toBe(null);
});