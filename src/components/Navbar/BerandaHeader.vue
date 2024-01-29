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
                <BNavItemDropdown class="dd-nav" text="Lang" right>
                    <div class="card">
                        <b-card no-body>
                            <b-tabs card align="center">
                                <b-tab title="Tugasku" active>
                                    <ListGroupOrdered />
                                </b-tab>
                                <b-tab title="Informasi">
                                    <b-card-text>Tab contents 2</b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                </BNavItemDropdown>

                <BNavItemDropdown class="dd-nav" text="Lang" right>
                    <div class="card p-3">
                        <ListGroupUnit />
                    </div>
                </BNavItemDropdown>
            </BNavForm>

        </BCollapse>
    </BNavbar>
</template>

<script>
    import ListGroupOrdered from '../ListGroup/ListGroupOrdered.vue';
    import ListGroupUnit from '../ListGroup/ListGroupUnit.vue';
    import {
        BNavbar,
        BNavbarBrand,
        BNavbarToggle,
        BNavbarNav,
        BNavForm,
    } from 'bootstrap-vue-next';

    export default {
        name: "BerandaHeader",
        components: {
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavForm,
            ListGroupOrdered,
            ListGroupUnit
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

<style lang="scss">
    nav.navbar {
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--g-kit-broccoli-50) !important;

        li {
            list-style-type: none;
            
            .dd-nav {
            
                .dropdown-menu {
                    padding: 0px;
    
                    &.show.overflow-auto {
                        position: absolute;
                        inset: 0px auto auto 0px;
                        margin: 0px;
                        border-radius: 6px;
                        max-width: 360px !important;
                        width: 360px !important;
                        margin-top: 34px;
                    }
                }
    
            }
        }

        &.sticky-top {
            top: 1rem;
        }

    }
</style>