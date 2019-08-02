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

            <button v-on:click="updateCustomer" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submissstted successfully!</h4>
            <button class="btn btn-success" v-on:click="backCustomer">OK</button>
        </div>
    </div>
</template>
<script>
    import dt from "../datasample"
    export default {
        name: "UpdateCustomer",
        props:["customer"],
        data(){
            return {
                submitted:false
            };
        },
        methods: {
            updateCustomer(){
                var index=dt.customers.findIndex(x=>x.id===this.customer.id);
                dt.customers[index].age=this.customer.age;
                dt.customers[index].name=this.customer.name;
                this.submitted=true;
            },
            backCustomer(){
                this.$router.push('/');
                this.submitted=false;
            }
        }
    }
</script>

<style scoped>
    .submitform{
        max-width: 300px;
        margin: auto;
    }
</style>