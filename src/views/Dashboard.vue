<script setup>
import DashCard from '../components/DashCard.vue'
import RecentClass from '../components/RecentClass.vue'
import { ref } from 'vue'

const dashboardCard = ref({
  dummyObj: [{
    title: 'Create a New Class',
    id: '1',
    img: 'class.png'
  },
  {
    title: 'Join Live Class',
    id: '2',
    img: 'joinClass.png'
  },
  {
    title: 'View Behavior',
    id: '3',
    img: 'behavior.png'
  },
  {
    title: 'Previous Classes',
    id: '4',
    img: 'prevClass.png'
  }]
})
</script>

<template>
  <main>
    <v-container>
      <v-row align="start">
        <v-col md="9">
            <v-row>
                <template v-for="n in 4" :key="n">
                    <v-col md="6">
                      <DashCard :dashboardCard="dashboardCard.dummyObj[n-1]" />
                    </v-col>
                </template>
            </v-row>
        </v-col>
        <v-col md="3">
          <RecentClass/>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style lang="scss">
</style>


