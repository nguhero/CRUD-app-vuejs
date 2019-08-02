<template>
    <div class="list list-group">
        <div >
            <h4>List Customer</h4>
            <ul>
                <li class="list-group-item"
                    v-for="(customer, index) in customers"
                    :key="index">
                    <router-link
                            :to="{name:'customer-details', params:{customer:customer,id:customer.id}}">
                        {{customer.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <router-view @refreshData="refreshList"></router-view>
        </div>

    </div>
</template>

<script>
    import dt from "../datasample"

    export default {
        name: "CustomersList",
        data() {
            return {
                customers: []
            }
        },
        methods: {
            getData() {
                this.customers = dt.customers;
            },
            refreshList() {
                this.getData();
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>
    .list {
        text-align: left;
        max-width: 450px;
        margin: auto;
    }
</style>