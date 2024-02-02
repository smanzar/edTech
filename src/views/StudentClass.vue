<script setup>
import StudentProfile from '../components/StudentProfile.vue'
import ChitChat from '../components/ChitChat.vue'
import ChatEditor from '../components/ChatEditor.vue'
</script>

<template>
  <main>
    <v-container>
      <v-row align="start">
        <v-col md="1" class="pr-0">
            <div class="student-p-sec max-w-100">
                <v-btn density="compact" icon="mdi-close"></v-btn>
                <p class="small">Student 1</p>
            </div>
        </v-col>
        <v-col md="6">
            <div class="prompt-chats">
                <div class="chat-section overflow-scroll">
                    <template v-for="n in 3" :key="n">
                        <ChitChat />
                    </template>
                </div>
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


