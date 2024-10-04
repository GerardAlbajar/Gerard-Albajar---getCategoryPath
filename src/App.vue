<template>
  <section class="container">
    <CodeSection :codeExample="categoriesCode" />
    <div class="form-section">
      <div class="form-section--header">
        <h1>getCategoryPath</h1>
        <span>(UI Example)</span>
      </div>
      <input
        v-model="inputCategory"
        @keyup.enter="findCategoryPath"
        type="text"
        placeholder="Ingresa el nombre de la categoría"
      />
      <button @click="findCategoryPath" :disabled="inputCategory.trim() === ''">
        Search route
      </button>
      <div class="output" v-if="output">
        <h2>Route found:</h2>
        <p>{{ output }}</p>
      </div>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <CodeSection :codeExample="getCategoryPathCode" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Category } from "./types";
import CodeSection from "./components/CodeSection.vue";
import { categoriesCode, getCategoryPathCode } from "./utils/codes";

export const getCategoryPath = (
  categories: Category[],
  categoryName: string
): string | null => {
  const search = (
    categories: Category[],
    categoryName: string,
    path: string
  ): string | null => {
    for (const category of categories) {
      const currentPath = `${path}/${category.name}`;
      if (category.name === categoryName) {
        return currentPath;
      }
      if (category.subcategories && category.subcategories.length > 0) {
        const result = search(
          category.subcategories,
          categoryName,
          currentPath
        );
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const result = search(categories, categoryName, "");
  return result ? result : null;
};

export default defineComponent({
  name: "App",
  components: {
    CodeSection,
  },
  setup() {
    const categories: Category[] = [
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

    const inputCategory = ref<string>("");
    const output = ref<string>("");
    const error = ref<string>("");

    const findCategoryPath = (): void => {
      output.value = "";
      error.value = "";
      const trimmedInput = inputCategory.value.trim();
      if (trimmedInput === "") {
        error.value = "Please enter a category name.";
        return;
      }
      const path = getCategoryPath(categories, trimmedInput);
      if (path) {
        output.value = path;
      } else {
        error.value = `Category "${trimmedInput}" not found.`;
      }
    };

    return {
      inputCategory,
      output,
      error,
      findCategoryPath,
      categoriesCode,
      getCategoryPathCode,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}

.form-section {
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.form-section--header {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

h1 {
  margin-bottom: 20px;
}

input {
  padding: 15px;
  width: 80%;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #f9f9f9;
}

.output {
  padding: 15px;
}

.error {
  padding: 15px;
  background-color: #ffe0e0;
  color: #cc0000;
  border-radius: 10px;
  margin: 0;
}

button:disabled {
  background-color: #e0e0e0; /* Color para el botón deshabilitado */
  cursor: not-allowed; /* Cambiar el cursor */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .form-section {
    width: 100%;
    max-width: 400px;
  }

  .code-section {
    width: 100%;
    max-width: 400px;
  }
}
</style>
