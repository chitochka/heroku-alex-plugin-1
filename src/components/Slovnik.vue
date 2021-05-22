<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-text-field
          v-model="text"
          label="slovo pro preklad"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        
        <v-btn  color="primary"
          @click="togglePassword"> {{passwordHide?'Ukazat':'Skryt'}} {{'hesla'}} 
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="translate"
          :disabled="text ? false : true"
          :elevation="5"
          color="primary"
        >
          Přelož
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      passwordHide: true
    };
  },
  // computed: {
  //   disable:
  // },
  methods: {
    translate() {
      const params = "width=550,height=500,left=500,top=0" 
      var url = "https://slovnik.seznam.cz/preklad/cesky_rusky/" + this.text;
      window.open(url,'slovnik',params);
    },
    togglePassword() {
      this.passwordHide = !this.passwordHide
      return 
      this.queryToContentScript("togglePassword", function(response) {
      })
    },

    queryToContentScript (type, callback) {
      /*
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: type },callback)
      });
      */
    }

  },
  mounted() {
    let $vm = this
    this.queryToContentScript("getText", function(response) {
            $vm.text = response
      });
  },
};
</script>

<style scoped></style>
