<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'light'" class="sticky-top my-3 exa-header">
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
                <BNavItemDropdown class="dd-nav" text="Riwayat">
                    
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
                </BNavItemDropdown>

                <BNavItemDropdown class="dd-nav" text="Notifikasi" >
                    <div class="card p-3">
                        <ListGroupUnit />
                    </div>
                </BNavItemDropdown>

                <BNavItemDropdown class="dd-nav last-child">
                    <template v-slot:button-content>
                        <b>Thoriq saddad</b>
                        Business Process Outsourcing
                    </template>
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

    nav.navbar{
        &.exa-header {
            padding: 1rem;
            border-radius: 1rem;
            background-color: var(--g-kit-broccoli-50) !important;

            form {
                li.dd-nav {
                    list-style-type: none;
                    display: flex;
                    align-items: center;

                    &:not(:last-child) {
                        &::before {
                            content: url('../../assets/icon/check_round.svg');
                            width: 24px;
                            height: 24px;
                        }
                    }
                    &:last-child {
                        border-left: 2px solid white;

                        
                    }

                    &.last-child{
                        .btn-group {
                            .btn{
                                display: flex;
                                flex-direction: column;
                                font-size: var(--g-kit-font-size-omega);
                                line-height: var(--g-kit-line-height-omega);
                                font-weight: var(--g-kit-font-weight-normal);
                                b {
                                    font-size: var(--g-kit-font-size-sigma);
                                    line-height: var(--g-kit-line-height-sigma);
                                }
    
                                
                            }
                        }
                    }
                }
                
            }
    
            ul {
                flex-wrap: nowrap;
            }
    
            li {
                list-style-type: none;
    
                button {
                    width: 100%;
                }
                
                .dd-nav {
                    .card-header {
                        background-color: white;
    
                        .nav-item {
                            width: 100%;
                        }
                    }
                
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
    }
</style>