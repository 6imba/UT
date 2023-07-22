<template>
    <div>
        <p>My age is {{ age }}.</p>
        <p>I am {{ group }}.</p>
        <button @click="grow">Grow</button> | 
        <button @click="age = 0">Die</button>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
    lineChartData: {
        type: Object,
        default: () => { }
    },
})

const age = ref(0)

const group = computed(() => age.value > 18 ? 'adult' : 'minor')

const grow = () => age.value++

</script>
