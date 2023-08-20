<template>
  <div>
    <Parent1/>
    <hr>
    <Parent2/>
    <hr>
    <Parent3/>
    <hr>
    <Parent4/>
    <hr>
  </div>
</template>

<script>
import Parent1 from "./components/First/Parent.vue";
import Parent2 from "./components/Second/Parent.vue";
import Parent3 from "./components/Third/Parent.vue";
import Parent4 from "./components/Fourth/Parent.vue";

export default {
  name: "App",
  components: {
    Parent1, 
    Parent2,
    Parent3,
    Parent4,
  },
};
</script>

