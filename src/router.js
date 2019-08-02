import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList";
import Customer from "./components/Customer";
import UpdateCustomer from "@/components/UpdateCustomer";
import SearchCustomer from "@/components/SearchCustomer";
import AddCustomer from "@/components/AddCustomer";

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "customers",
            alias: "/customer",
            component: CustomersList,
            children: [
                {
                    path: "/customer/:id",
                    name: "customer-details",
                    component: Customer,
                    props: true
                }
            ]
        },
        {
            path: "/add",
            name: "add",
            component: AddCustomer
        },
        {
            path: "/search",
            name: "search",
            component: SearchCustomer
        },
        {
            path: "/customerupdate/:id",
            name: "customer-update",
            component: UpdateCustomer,
            props: true
        }

    ]
});