<template>
  <div class="code-section">
    <pre><code>{{ codeExample }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CodeSection",
  props: {
    codeExample: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
.code-section {
  width: 35%;
  background-color: #f4f4f4;
  border-radius: 10px;
  overflow-x: auto;
  max-height: 500px;
  overflow-y: auto;
  text-align: left;
  padding: 20px;
}

pre {
  font-size: 14px;
  white-space: pre-wrap;
  margin-top: 0;
}

code {
  font-family: "Courier New", Courier, monospace;
}
</style>
