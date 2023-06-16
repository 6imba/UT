<template>
  <button @click="$emit('parentClicked')">Click</button>
</template>

<script>
export default {
  name: 'ChildComponent',
}
</script>
