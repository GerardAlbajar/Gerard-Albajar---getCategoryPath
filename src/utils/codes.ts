export const categoriesCode = `// Statement
const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
];

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5';`;

export const getCategoryPathCode = `// Implementation of getCategoryPath
const getCategoryPath = (categories, categoryName) => {
  const search = (categories, categoryName, path) => {
    for (const category of categories) {
      const currentPath = \`\${path}/\${category.name}\`;
      if (category.name === categoryName) {
        return currentPath;
      }
      if (category.subcategories && category.subcategories.length > 0) {
        const result = search(category.subcategories, categoryName, currentPath);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const result = search(categories, categoryName, '');
  return result ? result : \`Category "\${categoryName}" not found.\`;
};`;
