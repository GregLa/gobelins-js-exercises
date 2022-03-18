<template>
  <v-list-item v-on="$listeners">
    <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "item",
  props: {
    item: {
      type: Object,
      default: function () {
        return { text: "Nothing here", icon: "mdi-alien-outline" }
      }
    },
  },
};
</script>