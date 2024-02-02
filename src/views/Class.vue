<script setup>
import StudentProfile from '../components/StudentProfile.vue'
import ChitChat from '../components/ChitChat.vue'
import ChatEditor from '../components/ChatEditor.vue'
</script>

<template>
  <main>
    <v-container>
      <v-row align="center">
        <v-col md="7">
          <div class="student-profiles overflow-scroll">
            <template v-for="n in 12" :key="n">
              <StudentProfile />
            </template>
          </div>
        </v-col>
        <v-col md="5">
          <div class="prompt-chats with-chatbox">
            <div class="chat-section overflow-scroll">
              <template v-for="n in 3" :key="n">
                <ChitChat />
              </template>
            </div>
            <div class="chat-textbox">
              <ChatEditor />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style lang="scss">
</style>


