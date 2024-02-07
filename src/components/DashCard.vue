<template>
    <div class="dashboard-point">
        <div class="point-text">
            <h2>{{props.dashboardCard.title}}</h2>
        </div>
        <img :src='getImage(props.dashboardCard.img)' alt="class">
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps(['dashboardCard'])
    console.log(props.dashboardCard)
    function getImage(imagePath) {
      return new URL(`../assets/images/${imagePath}`, import.meta.url).href;
    }
</script>