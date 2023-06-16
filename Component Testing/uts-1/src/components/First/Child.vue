<template>
  <button @click="greet" data-qa-id="child-button">Click</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  data(){
    return{
      data1: false,
    }
  },
  methods: {
    greet(){
      console.log(this.data1)
      this.data1 = !this.data1
      console.log(this.data1)
    }
  }
}
</script>
