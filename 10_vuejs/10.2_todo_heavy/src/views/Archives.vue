<template>
  <v-app>
    <v-card class="mx-auto" max-width="300" tile>
      <v-card-title>Archives</v-card-title>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in archives" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions>
        <v-btn color="secondary" text to="/">
          Back to todos
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Archives",
  computed: {
    ...mapState({
      archives: (state) => state.archives,
    }),
  },
  data: () => ({}),
};
</script>
