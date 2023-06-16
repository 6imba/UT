<template>
  <h1>Parent Button 1</h1>
  <Child/>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: 'ParentComponent',
  components: {
    Child,
  }
}
</script>
