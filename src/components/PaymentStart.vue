<template>
    <div class="container">
        <nav class="flex flex-row">
            <div class="mt-1 py-4">
                <span class="text-medium font-semibold px-4 border-b border-indigo-400 py-2 truncate text-gray-800" >Cards</span>
                <span class="text-medium font-semibold px-4 truncate text-gray-800" >UPI</span>
                <span class="text-medium font-semibold px-4 truncate text-gray-800" >Wallet</span>
                <span class="text-medium font-semibold px-4 truncate text-gray-800" >Banking</span>
                <span class="text-medium font-semibold px-4 truncate text-gray-800" >Coupon</span>
                <div class="mt-6 ml-4">
                    <span class="text-sm text-gray-500">Card Number</span>
                    <input type="text" class="w-full py-2 px-2 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-500">

                    <div class="flex flex-row mt-6">
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500">Expiration</span>
                            <input type="text" class="py-2 px-2 w-20 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-500">
                        </div>
                        
                    <div class="flex flex-col ml-48">
                        <span class="text-sm text-gray-500">CVV</span>
                        <input type="text" class="py-2 px-2 w-20 bg-white rounded border border-gray-300  overflow-hidden focus:outline-none focus:border-indigo-500">
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