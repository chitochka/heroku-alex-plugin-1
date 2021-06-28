<template>
  <div>
        <v-form >
    <v-card flat>
      <v-card-text>
        <v-text-field 
          v-model.trim="text"
          label="Slovo pro překlad"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        
        <v-btn small color="primary"
          @click="togglePassword"> {{passwordHide?'Ukazat':'Skryt'}} {{'hesla'}} 
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click.prevent="translate"
          :disabled="text ? false : true"
          :elevation="5"
          color="primary"
          type="submit" 
        >
          Přelož
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-form>
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
      let win = window.open(url,'slovnik',params);
    },
    togglePassword() {
      let $vm = this
      console.log(('togglePassword'));
      /* funkce se pouziva ve verze Google Extension
        // chrome.runtime.sendMessage({type: "togglePassword"}, function(resp) {
        //   console.log((resp));
        // });

      // this.passwordHide = !this.passwordHides
      // this.queryToContentScript("togglePassword", function(hide) {
      //   console.log((hide));
      //   $vm.passwordHide = hide
      // })
      */
    },

    queryToContentScript (type, callback) {
      /* funkce se pouziva ve verze Google Extension
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: type },callback)
      });
      */
    }

  },
  mounted() {
    let $vm = this
    /* funkce se pouziva ve verze Google Extension
    this.queryToContentScript("getText", function(response) {
            $vm.text = response
      });
    */
  },
};
</script>

<style scoped></style>
