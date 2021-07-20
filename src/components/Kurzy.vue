<template >
  <div>
    <v-form>
      <v-card class="" elevation="10" max-width="" :loading="loading">
        <v-card-text>
          <v-row>
            
            <v-col>
              <v-text-field
                type="number"
                name="kzt"
                label="KZT"
                prefix="₸"
                outlined hideDetails
                v-model="kzt"
                :disabled="disable"
                @input="inputKZT"
                @blur="truncate"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field
                type="number"
                name="czk"
                label="CZK"
                prefix="Kč"
                outlined hideDetails
                v-model="czk"
                :disabled="disable"
                @input="inputCZK"
                @blur="truncate"
              ></v-text-field>
            </v-col>
          </v-row>


       
          <v-row v-if="currency">
            <v-col cols="6" class="rates"> 
              <div> <span>1 <small> €  </small> </span> → <span>   {{ currency.rates.EUR_KZT.toFixed(2)  }} </span> <small>KZT</small>  </div>
              <div> <span>1 <small> Kc </small> </span> → <span>   {{ currency.rates.CZK_KZT.toFixed(2)  }} </span> <small>KZT</small>  </div>
            </v-col>

            <v-col cols="6" align-self="end" class="textToRight">
              <div> Pocet stahnuti:   {{currency.usage.usage }} </div>
               {{ new Date(currency.usage.timestamp).toGMTString().substr(5,17)  }}
            </v-col>
          </v-row>

        </v-card-text>

        <v-card-actions>


          <v-spacer></v-spacer>
          <!-- <v-btn
            small
            elevation="5"
            color="primary"
            @click="loadData"
            :disabled="disable"
          >
            Stahnout nove kurzy
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>







<script>
import { mapGetters, mapMutations } from "vuex";
import store from "vuex";

export default {
  data() {
    return {
      kzt: null,
      czk: null,

      currency: null,
      disable: false,
      loading: false,
    };
  },
  methods: {
    inputKZT() {
      this.czk = !!+this.kzt
        ? (+this.kzt * (1/this.currency.rates.CZK_KZT)).toFixed(2)
        : "";
    },
    inputCZK() {
      this.kzt = !!+this.czk
        ? (+this.czk * this.currency.rates.CZK_KZT).toFixed(2)
        : "";
    },
    truncate() {
      if (!+this.kzt || !+this.czk) {
        this.czk = this.kzt = null;
      } else {
        this.kzt = (+this.kzt).toFixed(2);
        this.czk = (+this.czk).toFixed(2);
      }
    },

    loadData() {
      this.disable = true;
      this.loading = true;
      setTimeout(() => {
        this.disable = false;
        this.loading = false;
      }, 3000);
    },
  },
  async mounted(){
        this.currency = await this.$store.dispatch('fetchCurrencyData')
        window.tt = this
        console.log('[Mounted]')
        console.log(this.currency)
        
  }
};
</script>



<style  scoped>

  small {
      color: rgb(11, 29, 192);
  }

  .rates div {
    padding-left: 1rem ;
  }
  .rates div span{
    font-weight: bolder;
    color: rgb(0, 0, 0);
  }

  .textToRight {
    text-align: right;
  }

  .row {
    border: 0px solid red;
  }
  .col {
    border: 0px dotted rgb(24, 109, 221);
  }
</style>>
