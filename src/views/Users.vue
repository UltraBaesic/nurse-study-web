<template>
  <main id="all-users">
    <section class="page-name">
        <h6>Users</h6>
        <p>Tuesday,June 14,2020</p>
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
                </tr>
                <tr class=" w-100 user-details" v-for="user in Users" :key="user.id">
                    <td class="py-2 pl-2">
                        <img src="../assets/img/hs1.jpg" alt="">
                        {{ user.firstname }}
                    </td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.userSub }}</td>
                    <td>{{ user.created_on | fullDate }}</td>
                </tr>
            </table>
        </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {

methods: {
    ...mapActions(['getAllUsers'])
},
computed: {
    Users() {
      return this.$store.state.Users.allUsers
    }
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
   padding: 20px 0;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
   border-radius: 30px;
   
}
#all-users .user-details td{
    font-size: 14px;
}
#all-users tr{
    margin-bottom: 29px;
}
#all-users .user-table .table-head th{
    color: #9F9F9F;
    font-size: 12px;
}
</style>