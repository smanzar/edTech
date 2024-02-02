<script setup>
import DashCard from '../components/DashCard.vue'
import RecentClass from '../components/RecentClass.vue'
</script>

<template>
  <main>
    <v-container>
      <v-row align="start">
        <v-col md="9">
            <v-row>
                <template v-for="n in 4" :key="n">
                    <v-col md="6">
                        <DashCard/>
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


