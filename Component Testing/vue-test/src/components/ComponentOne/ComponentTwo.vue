<template>
    <div>
        <p>My age is {{ age }}.</p>
        <p>I am {{ group }}.</p>
        <button @click="age = 0" data-qa-id="born-btn">Born</button>
        <div>
            <button @click="grow" data-qa-id="grow-btn">Grow</button>
        </div>
        <button @click="age = null" data-qa-id="die-btn">Die</button>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const age = ref(0)

const group = computed(() => age.value > 18 ? 'adult' : 'minor')

const grow = () => age.value++

</script>
