<template>
  <h1>Parent Button 3</h1>
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
  data(){
    return{
      dataLoading: true,
    }
  },
  methods: {
    greet(){
      console.log(this.dataLoading)
      this.dataLoading = !this.dataLoading
      console.log(this.dataLoading)
    }
  }
}
</script>
