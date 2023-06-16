<template>
  <h1>Parent Button 2</h1>
  <Child @parentClicked="greet"  data-qa-id="parent-button"/>
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
      data2: false,
    }
  },
  methods: {
    greet(){
      console.log(this.data2, '11111111111111111111111111111')
      this.data2 = !this.data2
      console.log(this.data2, '222222222222222222222222222222')
    }
  }
}
</script>
