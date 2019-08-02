<template>
    <div class="searchform">
        <h4>Find by Age</h4>
        <div class="form-group">
            <input type="number" class="form-control" id="age" required v-model="age" name="age">
        </div>

        <div class="btn-group">
            <button v-on:click="searchCustomers" class="btn btn-success">Search</button>
        </div>

        <ul class="search-result">
            <li v-for="(customer, index) in customers" :key="index">
                <h6>{{customer.name}} ({{customer.age}})</h6>
            </li>
        </ul>
    </div>
</template>

<script>
    import dt from "../datasample";

    export default {
        name: "search-customer",
        data() {
            return {
                age: 0,
                customers: []
            };
        },
        methods: {
            searchCustomers() {
                this.customers=dt.customers.filter(customer=>{
                    return customer.age===this.age;
                })
            }
        }
    };
</script>

<style scoped>
    .searchform{
        max-width: 300px;
        margin: auto;
    }
</style>