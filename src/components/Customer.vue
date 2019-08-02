<template>
    <div v-if="this.customer">
        <h4>Customer Details</h4>
        <div>
            <label>Name: </label> {{this.customer.name}}
        </div>
        <div>
            <label>Age: </label> {{this.customer.age}}
        </div>
        <span>
      <router-link class="button is-small btn-primary"
                   :to="{
                            name: 'customer-update',
                            params: { customer: this.customer, id: this.customer.id }
                        }">
        Sua
                    </router-link>
    </span>
        <span class="button is-small btn-danger" v-on:click="deleteCustomer()">Xoa</span>
        <div>
            <router-view></router-view>
        </div>
    </div>
    <div v-else>
        <br/>
        <p>Please click on a Customer...</p>
    </div>
</template>

<script>
    import dt from "../datasample"

    export default {
        name: "customer",
        props: ["customer"],
        methods: {
            deleteCustomer() {
                dt.customers = dt.customers.filter(customer => {
                    return customer.id !== this.customer.id;
                });
                this.$emit("refreshData");
                this.$router.push('/');
            }

        }
    };
</script>
