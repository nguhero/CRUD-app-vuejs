<template>
    <div class="submitform">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" required v-model="customer.name" name="name">
            </div>

            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" class="form-control" id="age" required v-model="customer.age" name="age">
            </div>

            <button v-on:click="saveCustomer" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" v-on:click="newCustomer">Add</button>
        </div>
    </div>
</template>

<script>
    import dt from "../datasample";

    export default {
        name: "add-customer",
        data() {
            return {
                customer: {
                    id: 0,
                    name: "",
                    age: 0,
                },
                submitted: false
            };
        },
        methods: {
            saveCustomer() {
                var data = {
                    id:dt.customers[dt.customers.length-1].id +1,
                    name: this.customer.name,
                    age: this.customer.age
                };
                dt.customers.push(data);

                this.submitted = true;
            },
            newCustomer() {
                this.submitted = false;
                this.customer = {};
            }
        }
    };
</script>

<style scoped>
.submitform{
    max-width: 300px;
    margin: auto;
}
</style>