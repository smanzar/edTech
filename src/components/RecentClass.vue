<script setup>
import ClassHistoryListItem from './ClassHistoryListItem.vue'
</script>

<template>
    <div class="recent-class-sb">
        <div class="recent-class-h">
            <h2>Recent Classes</h2>
        </div>
        <div class="recent-class-b">
            <div class="history-list">
                <template v-for="n in 10" :key="n">
                    <ClassHistoryListItem/>
                </template>
            </div>
        </div>
        <div class="recent-class-f">
            <v-btn variant="plain" class="text-primary">
                View all
                <v-icon icon="mdi-arrow-right"></v-icon>
            </v-btn>
        </div>
    </div>
</template>