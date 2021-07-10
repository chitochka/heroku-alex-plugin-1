<template >
  <div>
      <v-form>
      <v-card class="" elevation="10" max-width="" :loading="loading">
        <v-card-text>
          <v-row>
            
            <v-col >
              <v-text-field type="number" name="kzt"  label="KZT" prefix="₸" outlined
                v-model="kzt"
                :disabled="disable"
                @input="inputKZT"
                @blur="truncate"
              ></v-text-field>
            </v-col>
            
            <v-col >
              <v-text-field type="number" name="czk"  label="CZK"  prefix="Kč"  outlined
                v-model="czk"
                :disabled="disable"
                @input="inputCZK"
                @blur="truncate"
              ></v-text-field>
            </v-col>

          </v-row>
          <h5>  
            kurzy byli naposled stahnute <strong> {{this.date}} </strong> 
          </h5>
          1 Kc = {{CZK_KZT }}    KZT
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
import {mapGetters, mapMutations} from 'vuex'
import store from 'vuex'

export default {
  data() {
    return {
      kzt: null,
      czk: null,

      date: null,
      CZK_KZT:0, //  kolik KZT v 1Kc
      disable:false,
      loading:false
    };
  },
  methods:{
    inputKZT () {
      this.czk = (!!+this.kzt)? (this.kzt / this.CZK_KZT).toFixed(2) : ''
    },
    inputCZK () {
      this.kzt = (!!+this.czk)? (this.czk * this.CZK_KZT).toFixed(2) : ''
    },    
    truncate (){
      if ((!+this.kzt) || (!+this.czk)) {
        this.czk = this.kzt = null
      } else {
        this.kzt = (+this.kzt).toFixed(2)
        this.czk = (+this.czk).toFixed(2)
      }
    },

    loadData (){
      this.disable = true
      this.loading = true
        setTimeout(()=>{
            this.disable = false
            this.loading = false
        },3000)
      },
  },
  
  async mounted() {
    let {date, rates: {CZK, KZT}} = await this.$store.getters.currency
    this.date = new Date(date).toLocaleDateString()
    this.CZK_KZT =  (KZT/CZK).toFixed(2)
  }

};
</script>



<style lang="">
</style>