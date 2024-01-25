<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'light'" class="sticky-top my-3">
        <BNavbarBrand href="#">
            <img :src="require('../../assets/images/logo-pgd/exa.svg')" />
        </BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>

            <BNavbarNav>
                <BFormInput class="me-2" placeholder="Search" />
            </BNavbarNav>

            <!-- Right aligned nav items -->
            <BNavForm class="d-flex">
                <BNavItemDropdown text="Lang" right>
                    <BDropdownItem href="#">EN</BDropdownItem>
                    <BDropdownItem href="#">ES</BDropdownItem>
                    <BDropdownItem href="#">RU</BDropdownItem>
                    <BDropdownItem href="#">FA</BDropdownItem>
                </BNavItemDropdown>

                <BNavItemDropdown text="Lang" right>
                    <BDropdownItem href="#">EN</BDropdownItem>
                    <BDropdownItem href="#">ES</BDropdownItem>
                    <BDropdownItem href="#">RU</BDropdownItem>
                    <BDropdownItem href="#">FA</BDropdownItem>
                </BNavItemDropdown>
            </BNavForm>
            
        </BCollapse>
    </BNavbar>
</template>

<script>
    import {
        BNavbar,
        BDropdownItem,
        BNavbarBrand,
        BNavbarToggle,
        BNavbarNav,
        BNavForm,
    } from 'bootstrap-vue-next';

    export default {
        name: "BerandaHeader",
        components: {
            BNavbar,
            BDropdownItem,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavForm,
        },
        props: {
            label: {
                type: String,
                default: "Beli Tabungan Emas",
            },
            action: {
                type: Function,
                default: function () {
                    window.history.go(-1);
                },
            },
        },
    };
</script>

<style scoped lang="scss">
    nav.navbar {
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--g-kit-broccoli-50) !important;

        li {
            list-style-type: none;
        }

        &.sticky-top {
            top: 1rem;
        }
    }
</style>