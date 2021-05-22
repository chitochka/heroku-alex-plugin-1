<template >
  <div>
      <v-form>
      <v-card class="" elevation="10" max-width="" :loading="loading">
        <v-card-text>
          <v-row>
            <v-col >
              <v-text-field
                v-model="kzt"
                name="kzt"
                label="KZT"
                outlined
                prefix="₸"
                :disabled="disable"
              ></v-text-field>
            </v-col>
            <v-col >
              <v-text-field
                v-model="czk"
                name="czk"
                label="CZK"
                outlined
                prefix="Kč"
                :disabled="disable"
              ></v-text-field>
            </v-col>
          </v-row>
          <h5>  kurzy byli stahnute naposled 1.5.2021 </h5>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small elevation="5" color="primary" 
                @click="loadData" :disabled="disable"
            >Stahnout nove kurzy</v-btn>
          <!-- <v-btn text color=""> cancel</v-btn> -->
        </v-card-actions>
      </v-card>
      </v-form>
  </div>
</template>







<script>
export default {
  data() {
    return {
      kzt: null,
      czk: null,

      disable:false,
      loading:false
    };
  },
  methods:{
        loadData (){
            this.disable = true
            this.loading = true
            setTimeout(()=>{
                this.disable = false
                this.loading = false
            },3000)
        }
  }
};
</script>



<style lang="">
</style>