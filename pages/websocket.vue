<script setup lang="ts">
import { useWebSocket, type UseWebSocketOptions } from "@vueuse/core";

const socketHandler: UseWebSocketOptions = {
  autoReconnect: true,
  // heartbeat: {
  //   message: "ping",
  //   interval: 5000,
  //   pongTimeout: 5000,
  // },
  onOpen: (e, open) => {
    console.log("onOpen: ", e, open);
  },
  onMessage: (e, msg) => {
    console.log("onMessage: ", e, msg.data);
  },
  onError: (e, err) => {
    console.log("onError: ", e, err);
  },
  onClose: (e, close) => {
    console.log("onClose: ", e, close);
  },
};
const { status, data, send, open, close } = useWebSocket(
  "ws://localhost:8000/ws",
  socketHandler
);
</script>

<template>
  <div class="pa-2">
    <div>status: {{ status }}</div>
    <div>data: {{ data }}</div>
    <div class="d-flex flex-column ga-2 align-start">
      <button @click="send('asdf')">send</button>
      <button @click="open">open</button>
      <button @click="close()">close</button>
    </div>
  </div>
</template>
