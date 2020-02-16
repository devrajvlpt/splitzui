<template>
    <div class="container">
        <nav class="flex flex-row">
            <div class="mt-20 py-4 px-56">
                <span class="text-medium font-semibold px-4 border-b border-indigo-400 py-2 cursor-pointer text-gray-800" >Cards</span>
                <span class="text-medium font-semibold px-4 cursor-pointer text-gray-900" >UPI</span>
                <span class="text-medium font-semibold px-4 cursor-pointer text-gray-900" >Wallet</span>
                <span class="text-medium font-semibold px-4 cursor-pointer text-gray-900" >Banking</span>
                <span class="text-medium font-semibold px-4 cursor-pointer text-gray-900" >Coupon</span>
                <div class="mt-6 ml-4">
                    <span class="text-sm text-gray-700">Card Number</span>
                    <input type="text" class="w-full py-2 px-2 text-gray-900 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-700">

                    <div class="flex flex-row mt-6">
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-700">Expiration</span>
                            <input type="text" class="py-2 px-2 w-20 text-gray-900 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-700">
                        </div>
                        
                    <div class="flex flex-col ml-48">
                        <span class="text-sm text-gray-700">CVV</span>
                        <input type="text" class="py-2 px-2 w-20 text-gray-900 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-500">
                    </div>
                    </div>
                    

                </div>
            </div>

            
        </nav>
       
        
    </div>
</template>
<script>
export default {
    data(){
        // activeTab:0        
        return{
            activeTab: 0,
        }
    }
}
</script>