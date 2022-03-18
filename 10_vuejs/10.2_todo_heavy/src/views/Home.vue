<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-card-title>Add todo</v-card-title>
    <v-card-text>
      <v-text-field outlined label="Enter text" v-model="todoText" @keyup.enter="addTodos()"></v-text-field>
    </v-card-text>
    <v-list>
      <v-subheader>To be done :</v-subheader>
      <v-list-item-group color="primary">
        <item
          v-for="(item, i) in notDoneTodos"
          :key="i"
          :item="item"
          @click="done(item.id)"
        />
      </v-list-item-group>
      <v-subheader>Done : </v-subheader>
      <v-list-item-group color="primary">
        <item
          v-for="(item, i) in doneTodos"
          :key="i"
          :item="item"
          @click="undone(item.id)"
        />
      </v-list-item-group>
    </v-list>
    <v-card-actions>
      <v-btn color="primary" text @click="archive()"> Archive dones </v-btn>
      <v-btn color="secondary" text to="/archives"> Go to archives </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Item from "../components/Item.vue";
import { mapGetters } from "vuex";
import store from "../store/index";

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      doneTodos: "doneTodos",
      notDoneTodos: "notDoneTodos",
    }),
  },
  data: () => ({
    todoText: "",
  }),
  methods: {
    done(id) {
      store.commit("setDoneState", { id: id, done: true });
    },
    undone(id) {
      store.commit("setDoneState", { id: id, done: false });
    },
    archive() {
      store.commit("archiveDones");
    },
    addTodos() {
      if (this.todoText.length) {
        store.commit("addTodo", this.todoText);
        this.todoText = "";
      }
    },
  },
  components: {
    Item,
  },
};
</script>