<template>
    <div>
        <modal name="create-topic"
               transition="nice-modal-fade"
               :min-width="680"
               :min-height="500"
               :delay="100"
               :resizable="true" 
        >
            <h1 class="text-black text-left mt-4 mx-8 font-extrabold">Create a Topic</h1>
            <p class="text-gray-600 mx-8">Topics where you form a group between colleague and buddies to share the expense.</p>
            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Name</label>
                <input type="text" class="ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight">
            </div>
            <div class="mt-3">
                <label class="ml-8 text-black font-semibold">Description</label>
                <input type="text" class="ml-8 bg-white focus:outline-none focus:shadow-outline rounded border py-2 px-2 block relative leading-tight">
            </div>

            <div class="mt-12 ml-8">
                <button class="bg-indigo-500 text-white hover:bg-indigo-800 rounded-lg block px-3 py-2 leading-tight">Create</button>
            </div>

            <p class="text-gray-600 mt-5 mx-8">You can form Topics with your friends and families</p>
        </modal>
    </div>
</template>

<style lang="css">
.v--modal-box{
    top: 200px !important;
    left: 660px !important;
    width: 680px !important;
    height: 500px !important;
}
</style>