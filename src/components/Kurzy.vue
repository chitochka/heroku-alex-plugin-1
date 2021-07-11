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
                outlined
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
                outlined
                v-model="czk"
                :disabled="disable"
                @input="inputCZK"
                @blur="truncate"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-banner>
                <v-text-field
                :class="'textToRight'"
                readonly
                label="od 11.07.2021"
                value="10.02"
                prefix="KZT"
                suffix="1 Kc  ="
              ></v-text-field>
              </v-banner>
                     
                     
              <v-banner>
                 <v-text-field
                :class="''"
                readonly
                reverse
                solo
                label="od 11.07.2021"
                value="10.02"
                prefix="KZT"
                suffix="1 Kc="
              ></v-text-field>
              </v-banner>
              
            </v-col>
            <v-col cols="6">
             
       
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9"> </v-col>
            <v-col cols="3" align-self="end" class="textToRight">
              datum {{ new Date().toLocaleDateString() }}
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <!-- <v-text-field  :class="'textToRight'"    readonly  reverse    label="od 11.07.2021"       value="10.02"      prefix="KZT"   suffix="1 Kc  ="      
></v-text-field> -->

          <v-spacer></v-spacer>
          <v-btn
            small
            elevation="5"
            color="primary"
            @click="loadData"
            :disabled="disable"
          >
            Stahnout nove kurzy
          </v-btn>
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

      // date: null,
      // CZK_KZT:0, //  kolik KZT v 1Kc
      disable: false,
      loading: false,
    };
  },
  methods: {
    inputKZT() {
      this.czk = !!+this.kzt
        ? (this.kzt * this.currency.KZT_CZK).toFixed(2)
        : "";
    },
    inputCZK() {
      this.kzt = !!+this.czk
        ? (this.czk * this.currency.CZK_KZT).toFixed(2)
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

  beforeMount() {
    this.currency = this.$store.getters.currency;

    // let {date, rates: {CZK, KZT}} = await this.$store.getters.currency
    // this.date = new Date(date).toLocaleDateString()
    // this.CZK_KZT =  (KZT/CZK).toFixed(2)
  },
};
</script>



<style  scoped>
.textToRight {
  text-align: right;
}

.row {
  border: 2px solid red;
}
.col {
  border: 2px dotted rgb(24, 109, 221);
}
</style>>
