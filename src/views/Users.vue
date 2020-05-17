<template>
  <main id="all-users">
    <section class="page-name">
        <h6>Users</h6>
    </section>

    <section>
        <div class="stats d-flex mb-5">
            <div class="card mr-3" style="width: 15rem;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 ); border: none;">
                <div class="card-body">
                    <div class="stat-header d-flex">
                        <i class="fas fa-user mr-2" style="font-size:15px; color:#04809A"></i>
                        <p>Number of Users</p>
                    </div>
                    <div class="stats-result">
                        {{compliledUsers.length}}
                    </div>
                </div>
            </div>

            <div class="card mr-3" style="width: 15rem;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 ); border: none;">
                <div class="card-body">
                    <div class="stat-header d-flex">
                        <i class="fas fa-user-shield mr-2" style="font-size:15px; color: gold"></i>
                        <p>Premium Users</p>
                    </div>
                    <div class="stats-result">
                        <!-- {{compliledUsers.length}} -->
                        0
                    </div>
                </div>
            </div>

            <div class="card mr-3" style="width: 15rem;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 ); border: none;">
                <div class="card-body">
                    <div class="stat-header d-flex">
                        <i class="fas fa-user-alt-slash mr-2" style="font-size:15px; color: #9A2804"></i>
                        <p>Blocked Users</p>
                    </div>
                    <div class="stats-result">
                         {{activeUsers}}
                    </div>
                </div>
            </div>

            <div class="card mr-3" style="width: 15rem;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 ); border: none;">
                <div class="card-body">
                    <div class="stat-header d-flex">
                        <i class="fas fa-user-check mr-2" style="font-size:15px; color: green"></i>
                        <p>Active Users</p>
                    </div>
                    <div class="stats-result">
                        {{activeUsers}}
                    </div>
                </div>
            </div>


        </div>
    </section>

    <section>
        <div class="user-table">
            <table class="w-100">
                <tr class="table-head">
                    <th> 
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Subscription
                    </th>
                    <th>
                        Date Joined
                    </th>
                    <th>

                    </th>
                </tr>
                <tr class=" w-100  user-details" v-for="user in compliledUsers" :key="user.id">
                    <td class="py-2 pl-2" >
                        <div class="d-flex ">                           
                            <div class="mr-3">
                                <img src="../assets/img/hs1.jpg" alt="">
                            </div>
                            {{ user.firstname }}
                        </div>
                    </td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.subscription }} </td>
                    <td>{{ user.created_on | fullDate }}</td>
                    <td id="userAction" v-if="user.status == 'active'" class="pr-3" @click="blockUser(user._id)">
                        <button 
                            style="color:green; background-color: #C0E3C1; border: 1px solid #4CAF50; cursor: pointer; border-radius: 5px; font-style: light;"> 
                            Active 
                        </button> 
                    </td>
                    <td id="userAction" v-else class="pr-2" @click="unblockUser(user._id)">
                        <button 
                            style="color:green; background-color: #C0E3C1; border: 1px solid red; cursor: pointer; border-radius: 5px; font-style: light;"> 
                            Blocked 
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions(['getAllUsers']),
        blockUser(id){
            this.$store.dispatch('blockUser', id)
        },
        unblockUser(id){
            this.$store.dispatch('unblockUser', id)
        },
    },
    computed: {
        ...mapState(["users"]),
        compliledUsers() {
        return this.users.allUsers
        },
        //filter and get all the audios in the state.sectionMedia
        activeUsers() {
            let activeUsers = this.$store.getters.getActiveUsers.filter((activeUsers) => activeUsers.status == "active" ).length
            return activeUsers
        },
        blockedUsers() {
            let blockedUsers = [this.$store.getters.getActiveUsers.find((activeUsers) => activeUsers.status == "active" )]
            return blockedUsers
        },
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    async mounted() {
        await this.getAllUsers()
    }
} 
</script>

<style>
#all-users .page-name h6{
      font-weight: 700;
      color: #292929;
    }
#all-users .page-name p{
      font-weight: 500;
      color: #9F9F9F;
      font-size: 12px;
      margin-top: -8px;
    }
#all-users .user-details img{
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 100%;
}

#all-users .user-details {
   background-color: white;
   padding: 5px 0;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
   border-radius: 30px;
   
}
#all-users .user-details td{
    font-size: 14px;
}
#all-users .user-table table tr td{
    margin-bottom: 29px !important;
}
#all-users .user-table .table-head th{
    color: #9F9F9F;
    font-size: 12px;
}
#userAction{
    font-size: 8px; 
    color: #9F9F9F;
    cursor: pointer;
    text-align: right;
}
#userAction:hover{
    font-size: 10px; 
    color: #292929
}
.stat-header p{
    font-size: 14px;
    color: #9F9F9F;
}
.stats-result{
    font-size: 16px;
    font-weight: 700;
}
</style>