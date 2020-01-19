<template>
    <div>
        <modal name="payment-start" 
            transition="nice-modal-fade" 
            :scrollable=true
            :height="450"
            :width="450"
        >
            <h2 class="px-6 mt-4 text-gray-800 font-bold uppercase"> All Payments Methods</h2>
            <div v-on:click="cardOpen()" class="mt-2 px-3 py-4 ml-6 mr-6  block border border-gray-300 rounded shadow hover:border-indigo-700">
                <div class="flex flex-col">
                    <span class="items-start text-gray-700 font-bold">Card</span>
                    <span class="items-start text-gray-700">Master Visa RuPay</span>
                </div>
            </div>
         
            <div v-if="isCard">
                <div class="px-8 mt-4 flex flex-col">
                    <input type="text" class="px-6 border-b border-gray-400">
                    <span class="text-gray-700">Master Visa RuPay</span>
                </div>
            </div>

            <div class="mt-2 px-3 py-4 ml-6 mr-6  block border border-gray-300 rounded shadow hover:border-indigo-700">
                <div class="flex flex-col">
                    <span class="text-gray-700 font-bold">Netbanking</span>
                    <span class="text-gray-700 font-light">Master Visa RuPay</span>
                </div>                    
            </div>
            <div class="mt-2 px-3 py-4 ml-6 mr-6  block border border-gray-300 rounded shadow hover:border-indigo-700">
                <div class="flex flex-col">
                    <span class="text-gray-700 font-bold">Wallet</span>
                    <span class="text-gray-700">Master Visa RuPay</span>
                </div>
            </div>
            <div class="mt-2 px-3 py-4 ml-6 mr-6  block border border-gray-300 rounded shadow hover:border-indigo-700">
                <div class="flex flex-col">
                    <span class="text-gray-700 font-bold">UPI</span>
                    <span class="text-gray-700">Master Visa RuPay</span>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {

    data(){
        return {
            isCard:false
        }    
    },
    
    methods: {
        cardOpen(){
            if (this.isCard === true) {
                this.isCard = false
            }
            else{
                this.isCard = true
            }
        }
    },
    
}
</script>