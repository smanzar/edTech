<script setup>
import { ref, reactive, computed } from 'vue'
import Header from './components/Header.vue'

const tab = ref(false)
</script>

<template>
  <Header />

  <main>
    <v-container>
      <v-row align="center">
        <v-col md="8" sm="8">
          <v-card variant='plain' class="my-tabs">
            <v-tabs
              v-model="tab"
            >
              <v-tab value="one">Class</v-tab>
              <v-tab value="two">Student</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <div class="tab-form">
                    <h2>Class Behavior</h2>

                    <v-form>
                      <v-row>
                        <v-col md="6" cols="12">
                          <label>Class</label>
                          <v-select
                            variant="outlined" rounded="xl"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                          ></v-select>
                        </v-col>
                        <v-col md="6" cols="12">
                          <label>Select Subject</label>
                          <v-select
                            variant="outlined" rounded="xl"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                          ></v-select>
                        </v-col>
                        <v-col md="6" cols="12">
                          <label>From</label>
                          <v-select
                            variant="outlined" rounded="xl"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                          ></v-select>
                        </v-col>
                        <v-col md="6" cols="12">
                          <label>To</label>
                          <v-select
                            variant="outlined" rounded="xl"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-btn rounded="xl" size="large" class="btn-primary">
                        View
                      </v-btn>
                    </v-form>
                  </div>
                </v-window-item>

                <v-window-item value="two">
                  Two
                </v-window-item>

              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" sm="4" class="text-center">
          <img src="./assets/images/behavior.png" alt="behavior" class="img-fluid">
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style lang="scss">
</style>


