<template>
    <v-row dense>
            <v-col cols="9">
                <v-slider  dense thumb-label   persistent-hint class="align-center" 
                    v-model="data.value"   
                    :label="data.label" 
                    :max="data.max"   
                    :min="data.min"
                    @change="onChange"
                    >
                </v-slider>
            </v-col>

            <v-col cols="3"> 
                <v-text-field   type="number"  validate-on-blur    class=""     single-line       style=""    dense outlined
                    v-model="data.value"
                    :suffix="data.measure?data.measure:'px'"   
                    @change="onChange"
                    @blur="onBlur"
                    :max="data.max"   
                    :min="data.min"
                    ref="textField"
                    >
                </v-text-field>
            </v-col>
    </v-row>
</template>



<script>


export default {
    props: ['data'],
    methods:{
        onChange(){
            this.$emit('change')
        },
        onBlur(e){
            this.$refs.textField.lazyValue =this.data.value
        }
    },
    mounted(){
        window.tt = this
    }
};
</script>









<style  scoped>

    .v-text-field__suffix{
    color: #a509c5 !important;
    }
    .v-text-field input {
        text-align:right !important;
    } 
    .v-text-field input {
    text-align: end !important;
    }

    /* .zarovnat-vpravo input {
    text-align: end !important;
    }
    */

</style>