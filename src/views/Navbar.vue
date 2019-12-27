<template>
<div>
    
 <div class="h-screen flex">
    <div class="w-64 px-8 py-4 bg-gray-900 border-r">
        <NavBar></NavBar>
    </div>    
    <div class="flex-1 min-w-0 bg-white">
        <ChatHeader></ChatHeader>        
        <main class="p-3">
            <div class="flex items-center justify-between">
                <Message></Message>            
                <UserList class="rounded-lg shadow-md w-64 px-8 py-4 bg-gray-100 border-r"></UserList>
            </div>
        </main>
        
    </div>
</div>

</div>
  
</template>

<script>
import ChatHeader from '../components/Header'
import NavBar  from '../components/Navbar'
import Message  from '../components/Message'
import UserList from  '../components/UserList'

export default {
    data(){
        return {
            'greeting':'hello'
        }
    },
    components: {
        ChatHeader,
        NavBar,
        Message,
        UserList
    }
}
</script>
