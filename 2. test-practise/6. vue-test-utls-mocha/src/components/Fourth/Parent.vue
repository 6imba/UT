<template>
  <h1>Parent Button 4</h1>
  <Child v-if="dataLoading" data-qa-id="child-loader"/>
  <button @click="greet" data-qa-id="parent-button">Click</button>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: 'ParentComponent',
  components: {
    Child,
  },
  computed: {
    dataLoading() {
        return true;
    },
  },
  methods: {
    greet(){
      console.log(this.dataLoading, '1..........')
      this.dataLoading = !this.dataLoading
      console.log(this.dataLoading, '2..........')
    }
  }
}
</script>
