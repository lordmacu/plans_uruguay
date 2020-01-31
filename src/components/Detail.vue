<template>
    <div class="container-list">
        <loading :active.sync="isLoading" 
            :can-cancel="true" 
            :is-full-page="true"></loading>
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue bg-dark show-in-desktop">
            <div class=" container">
                <a class="navbar-brand" href="javascript:void(0)" v-on:click="backLink()" >COMPARADOR DE PLANES </a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if='0>4'>
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <form class="form-inline my-2 my-lg-0 social-links">
                        <a href="#"><img src="../assets/twitter.png"/></a>
                        <a href="#"><img src="../assets/instagram.png"/></a>
                        <a href="#"> <img src="../assets/linkedin.png"/></a>
                    </form>
                </div>
            </div>
        </nav>
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-blue bg-transparent show-in-mobile mb-1">
                <div class=" container">
                    <router-link class="navbar-brand" to="/">CP </router-link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                        </ul>
                        <form class="form-inline my-2 my-lg-0 social-links">
                            <a href="#"><img src="../assets/twitter.png"/></a>
                            <a href="#"><img src="../assets/instagram.png"/></a>
                            <a href="#"> <img src="../assets/linkedin.png"/></a>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">

                    </div>
                    <div class="col-lg-6" v-if='0>4'>
                        <div class="container-filter-button show-in-desktop">
                            <span>Filtrar</span>
                            <button class="btn btn-danger round-button filter-by-button"><img  src="../assets/setting_button.png" /></button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="body-list container" v-if='item'>
            <div class="row show-in-desktop">
                <div class="col-lg-12 col-12">
                    <div class="row">
                        <div class="col-lg-11 container-result-mobile">
                            <span class="result-text"><router-link to="/">INICIO</router-link> /  <a href="#" v-if='item'>HASTA ${{item.price}}</a></span>
                        </div>
                        <div class="col-lg-1"  style="    text-align: right;margin-top: 10px;">
                            <router-link to="/">
                                <img class="back-individual-mobile" src="../assets/arrow-left-individual.png"/>

                            </router-link>


                        </div>
                    </div>
                </div>

            </div>
            <div class="row show-in-mobile breads-mobile">
                <div class="col-12">
                    <div class="row">
                        <div class="col-10 ">
                            <span class="result-text"><a href="#">INICIO</a> / <a href="#">PLANES TELEFONÍA</a> / <a href="#">HASTA $1000</a></span>
                        </div>
                        <div class="col-2">
                            <router-link to="/">
                                <img class="back-individual-mobile" src="../assets/arrow-left-individual.png"/>

                            </router-link>


                        </div>
                    </div>
                </div>
            </div>
            <div class="row container-rows-results" v-if='item'>
                <div class="col-lg-12 shadow-result" >


                    <div class="row">
                        <div class="col-lg-12 show-in-mobile mb-3">
                            <span class="title-plan ">{{item.name}}</span>   <span v-html="calculateOff(item)" /> 

                        </div>
                        <div class="col-lg-2 col-4" v-if="0>4">
                            <img  style="width: 80%;" class="show-in-desktop" src="../assets/phone.png"/>
                            <img  style="width: 80%;" class="show-in-mobile" src="../assets/phonemobile.png"/>
                        </div>
                        <div class="col-lg-12 col-12">
                            <div class="row show-in-desktop">
                                <div class="col-lg-12 container-title-invidual mb-3">
                                    <div class="row">
                                        <div class="col-lg-10">
                                            <span class="title-plan ">{{item.name}}</span>   <span v-html="calculateOff(item)" /> 
                                        </div>
                                        <div class="col-lg-2">
                                            <p class="text-center">PRECIO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="container-list-individual">
                                        <p><strong class="mr-1">REGIÓN: </strong>{{item.region.name}}</p>
                                        <p><strong class="mr-1">CONTRATO: </strong>{{item.contract.name}}</p>
                                        <p><strong class="mr-1">SALDO: </strong>${{item.balance}}</p>
                                        <p><strong class="mr-1">COMPAÑÍA: </strong>{{item.carrier.name}}</p>
                                    </div>
                                    <div class="container-company-individual mt-3">
                                        <img width="70px" :src="'http://comparador.comparaplanes.com/storage/'+item.carrier.image"/>
                                    </div>

                                </div>
                                <div class="col-lg-9 show-in-desktop">
                                    <div class="row">
                                        <div class="col-3 text-center mt-2">
                                            <span class="title-donut pl-5 pr-5">Datos Móviles</span>

                                            <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.internet,maxInternet),color: '#eb3b4c' }]"></vc-donut>

                                            <span class="number-size" v-if='item.internet<=maxInternet'>{{item.internet}} GB</span>
                                            <span class="number-size" v-if='item.internet>maxInternet'>ILIMITADO</span>
                                        </div>
                                        <div class="col-3 text-center mt-2">
                                            <span class="title-donut">Minutos llamadas</span>

                                            <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.minutes,maxMinutes),color: '#eb3b4c' }]"></vc-donut>
                                            <span class="number-size" v-if="item.minutes>99999">Ilimitado</span>
                                            <span class="number-size" v-if="item.minutes<99999">{{item.minutes}}</span>
                                        </div>
                                        <div class="col-3 text-center mt-2">
                                            <span class="title-donut">Mensajes de Texto</span>

                                            <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.sms,maxSms),color: '#eb3b4c' }]"></vc-donut>
                                            <span class="number-size" v-if="item.sms>99999">Ilimitado</span>
                                            <span class="number-size" v-if="item.sms<99999">{{item.minutes}}</span>
                                        </div>
                                        <div class="col-3">
                                            <div class="row container-price-list">
                                                <div class="col-lg-12">
                                                    <p class="container-economic"><img  src="../assets/economic.png"/></p>
                                                    <p class="font-size-price-main "><span class="font-simbol">$</span><span>{{item.price}}</span><span class="month-font">/mes</span></p>
                                                    <p class="after">antes<span>$ {{item.normal_price}}</span></p>
                                                </div>
                                                <div class="col-lg-12 container-details mt-2 text-center">
                                                    <a class="btn button-red mt-1" v-on:click="commingSoon()">CONTRATAR </a>
                                                    <a class="btn btn-primary button-blue mt-2"  v-on:click="commingSoon()">COMPARTIR </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <h5>MAS DETALLES:</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mr-5 ml-5 mt-2 mb-3">
                                    <div class="row">
                                        <div class="col-lg-4 col-4 list-description no-padding" v-for="feature in item.features" :key="feature.id">
                                            <span><img src="../assets/check.png"/></span><span>{{feature.title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details-mobile show-in-mobile">
                        <div class="row list-mobile-container mt-3 ">
                            <div class="col-3">
                                <span class="mobile-list-title ">DATOS MOVILES</span>
                            </div>
                            <div class="col-3">
                                <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.internet,maxInternet),color: '#eb3b4c' }]"></vc-donut>
                            </div>
                            <div class="col-6">
                                <span class="mobile-list-title">
                                    <span  v-if='item.internet<=maxInternet'>{{item.internet}} GB</span>
                                    <span  v-if='item.internet>maxInternet'>ILIMITADO</span>
                                </span>
                            </div>

                        </div>

                        <div class="row list-mobile-container mt-3">
                            <div class="col-3">
                                <span class="mobile-list-title">Minutos llamadas</span>
                            </div>
                            <div class="col-3">
                                <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.minutes,maxMinutes),color: '#eb3b4c' }]"></vc-donut>
                            </div>
                            <div class="col-6">
                                <span class="mobile-list-title"> {{item.minutes}}</span>
                            </div>

                        </div>

                        <div class="row list-mobile-container mt-3">
                            <div class="col-3">
                                <span class="mobile-list-title">Mensajes de Texto</span>
                            </div>
                            <div class="col-3">
                                <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.sms,maxSms),color: '#eb3b4c' }]"></vc-donut>
                            </div>
                            <div class="col-6">
                                <span class="mobile-list-title"> {{item.sms}}</span>
                            </div>

                        </div>
                        <div class="row container-contact-mobile">
                            <div class="col-4">
                                <a class="btn button-red mt-1 btn-sm" v-on:click="commingSoon()" >CONTRATAR </a>
                            </div>
                            <div class="col-4 price-mobilecontainer mt-2">
                                <p class="container-economic"><img  src="../assets/economic.png"/></p>
                                <p class="font-size-price-main "><span class="font-simbol">$</span><span>{{item.price}}</span><span class="month-font">/mes</span></p>
                                <p class="after">antes<span>$ {{item.normal_price}}</span></p>
                            </div>
                            <div class="col-4">
                                <a class="btn btn-primary button-blue mt-2 btn-sm"  v-on:click="commingSoon()">COMPARTIR </a>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample">


                            <div>
                                <div class="card-header-individual" id="headingThree">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed collapse-item" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <img class="down-arrow" src="../assets/arrow-down.png"/>
                                            <img class="up-arrow" src="../assets/arrow-up-collapse.png"/>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">


                                        <div class="row detail-container-mobile">
                                            <div class="col-12">
                                                <h6>Más Detalles</h6>
                                            </div>

                                            <div class="col-lg-12 col-4 list-description" v-for="feature in item.features" :key="feature.id">
                                                <span><img src="../assets/check.png"/></span><span>{{feature.title}}</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'vue-slider-component/theme/antd.css'

    import Donut from 'vue-css-donut-chart';
    import 'vue-css-donut-chart/dist/vcdonut.css';

    import VueLogger from 'vuejs-logger';
    const isProduction = process.env.NODE_ENV === 'production';

    const options = {
        isEnabled: true,
        logLevel: isProduction ? 'error' : 'debug',
        stringifyArguments: false,
        showLogLevel: true,
        showMethodName: true,
        separator: '|',
        showConsoleColors: true
    };

    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';


    import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
    import 'sweetalert2/dist/sweetalert2.min.css';

    Vue.use(VueSweetalert2);

    Vue.use(VueLogger, options);
    import Vue from 'vue'

            Vue.use(Donut);

    export default {
        name: 'List',

        components: {
            Loading
        },
        created() {
            this.idPlan = this.$route.params.id;
            this.getFilters();
        },
        methods: {
            getFilters() {
                this.$http.post('http://comparador.comparaplanes.com/getFilters', {onlyMax: true}).then(response => {


                    this.maxMinutes = response.data.maxMinutes;
                    this.maxInternet = response.data.maxInternet;
                    this.maxSms = response.data.maxSms;

            this.getPlanById();

                });

            },
            backLink() {
                window.history.back()
            },
            commingSoon() {
                this.$swal('Proximamente...');

            },
            getPlanById() {
                this.$http.post('http://comparador.comparaplanes.com/getPlanById', {id: this.idPlan}).then(response => {
                    // this.list=response.data.data;
                    this.item = response.data;
                    this.$log.error(response.data)
                    this.isLoading = false;
                });

            },
            calculatePercentaje(value, maxvalue) {
                var result = value * 100 / maxvalue;
                var resultDonut = 100;
                if (result < 100) {
                    resultDonut = result;
                }
                return resultDonut;

            },

            calculateOff(item) {
                if (item.price < item.normal_price) {
                    return '<span class="off-number">' + (100 - (item.price / item.normal_price) * 100) + '% OFF</span>';
                } else {
                    return "";
                }
            }
        },
        data() {
            return {
                value: 0,
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                idPlan: null,
                item: null,
                maxMinutes: 0,
                maxInternet: 0,
                maxSms: 0,
                isLoading: true

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


    .container-list-individual{
        p{
            padding: 0px;
            margin: 0px;
        }
    }

    .button-blue{
        background-color: #32a1ff;
        color: white;

    } 

    .title-donut{
        font-size: 25px;
        font-weight: 600;
        display: block;
        margin-bottom: 20px;
        line-height: 25px;
    }
    .container-title-invidual{
        margin-bottom: 0px;
    }

    .bg-transparent{
        background-color: transparent !important;
    }
    .mobile-title-text{
        display: none
    }       
    .header{
        background-image: url(../assets/background.jpeg);
        padding-bottom: 15px;
        padding-top: 15px;
        background-size: 100% 100%;
    }

    .search-container-button{
        text-align: center;
        button{
            border: 1px solid white;
            padding-left: 50px;
            padding-right: 50px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 20px;
        }
    }

    .shadow-result {
        background-color: white;
        border-top: 1px solid #cbcbcb;
        padding-top: 25px;
        -webkit-box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
        padding-bottom: 25px;
        color: #000;
        font-weight: 500;
        padding-left: 25px;
        padding-right: 25px;

    }

    .container-rows-results{
        margin-top: 20px;
    }

    .container-contact{
        display: grid;
        text-align: center;
        position: relative;
        img{
            width: 50px;
            margin: auto;
        }
        .text-contact{
            bottom: 0px;
            position: absolute;
            width: 100%;
            margin: auto auto;
            margin-bottom: 10px;
            display: contents;
        }
        .year-title{
            margin-top: 10px;
            font-size: 27px;
        }
    }

    .year-title{
        font-size: 20px;
        font-weight: 800;
        display: table;
        width: 100%;
    }

    .button-red{
        background-color: #ff4250;
        color:white
    }

    .container-price-list{
        p{
            padding: 0px;
            margin: 0px;
        }
    }
    .font-size-price-main {
        font-size: 45px;
        font-weight: 800;
        position: relative;
        top: 0;
        line-height: 30px;
        text-align: center
    }

    .font-simbol {
        font-size: 30px;
        bottom: 7px;
        right: 6px;
    }

    .container-economic{
        text-align: center;
        img{
            width: 150px;
        }
    }

    .after {
        font-family: Titillium Web,sans-serif;
        font-weight: 600;
        color: #b5b1b1;
        font-size: 18px;
        letter-spacing: -1px;
        text-decoration: line-through;
        margin-bottom: 4px;
        text-align: center
    }

    .container-details{
        button{
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }

    .month-font {
        font-size: 20px;
        top: -10px;
        left: 1px;
        letter-spacing: -1px;
    }

    .number-size{
        font-size: 20px;
        display: table;
        width: 100%;
        font-weight: 800;
        margin-top: 20px;
    }
    .container-form-header {
        padding-left: 30px;
        padding-right: 30px;
        .form-group{
            label{
                width: 100%
            }
            .btn-group{
                width: 100%;
                button{
                    text-align: left;
                    color: #289cfb;
                    background: white;
                    border: 0px;
                }
                button:after{
                    right: 10px;
                    position: absolute;
                    top: 16px;
                }
            }
        }
    }

    .container-slides-header{
        padding-left: 30px;
        padding-right: 30px;
        label{
            font-weight: 600;
            margin-bottom: 0px;

            span{
                font-size: 20px;
                color: white;
                font-weight: 300;
                margin-left: 20px;
            }
        }
    }

    .text-helper-container-form{
        text-align: center;
        margin-top: 10px;
        p{
            margin: 0px;
            padding: 0px;
            font-size: 14px;
        }

    }
    .text-helper-top-container-form{
        text-align: center;

    }
    .container-choose{
        text-align: center;
        img{
            width: 300px;
            margin: 35px;
        }
    }
    .white-button-dropdown{
        color: white;
        font-size: 20px
    }


    .more-economic-plan-text{
        font-size: 30px;
        font-size: 30px;
        font-weight: 800;
    }

    .container-filter-button{
        margin-left: 20px;
        position: relative;
        float: right;
        margin-right: 30px;
        span{
            margin: auto;
            margin-right: 20px;
            color: white;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 100;
            position: relative;
            top: 2px;
        }
    }
    .round-button{
        border-radius: 1000px
    }
    .container-order-by{
        position: relative;
        float: right;
        margin-top: 0px;
    }

    .order-by-image{
        width: 35px;
        height: 35px;
        padding: 0px;
        background-color: #1c97ff;
        border: 0px;
        img{
            width: 20px;
            height: 20px
        }
    }

    .filter-by-button{
        width: 45px;
        height: 45px;
        padding: 0px;
        background-color: #1c97ff;
        border: 0px;
        img{
            width: 30px;
            height: 30px;
        }
    }

    .filter-by-button-border{
        width: 45px;
        height: 45px;
        padding: 0px;
        background-color: transparent;
        border: 1px solid #1878b6;
        img{
            width: 30px;
            height: 30px;
        }
    }

    .off-number{
        background-color: #ff5561;
        color: white;
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 10px;
        font-weight: 800;
        font-size: 25px;
        position: relative;
        top: -4px;
        border-radius: 5px;
    }
    .title-plan{
        font-weight: 800;
        font-size: 37px;
        line-height: 27px;
        color: #575757;
    }
    .no-padding{
        padding: 0px;
    }

    .no-margin{
        margin: 0px;
    }

    .list-description{
        span{
            font-size: 14px;
            img{
                margin-right: 5px;
                width: 10px;
            }
        }
    }

    .company-container{
        text-align: center
    }


    .show-in-desktop{


        display: block
    }

    .show-in-mobile{
        display: none
    }

    .social-links{
        a{
            margin-left: 10px;
            img{
                width: 20px;
            }
        }
    }

    .result-text{
        color: #369eff;
        margin-top: 10px;
        display: table;
        margin-bottom: 10px;
        a{
            color: #369eff !important;
            font-size: 18px;
        }
    }
    .back-individual-mobile{
        width: 20px;
        margin-top: 15px;
    }
    @media (min-width: 320px) and (max-width: 480px) {


        .collapse-item{
            width: 100%;
            text-align: right;    
            .down-arrow{
                display:block;
                float: right
            }
            .up-arrow{
                display:none;
            }
        }

        .collapsed{
            .down-arrow{
                display:none;
            }
            .up-arrow{
                display:block;
                float: right

            }
        }
        .card-header-individual{
            border-bottom: 1px solid #bababa;
        }
        .card-body{
            padding-left: 0px;
            padding-right: 0px;
        }

        .detail-container-mobile{
            padding-top: 10px;
        }
        .list-description{
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 10px;
        }
        .container-contact-mobile{
            border-bottom: 1px solid #dadada;
            padding-bottom: 10px;
            a{
                margin: 0;
                position: absolute;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }
        .price-mobilecontainer{
            p{
                padding: 0px;
                margin: 0px;
            }
            img{
                width: 100px;
            }
        }
        .mobile-list-title{
            font-weight: 800;
            line-height: 17px;
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
        .list-mobile-container{
            border-bottom: 1px solid #dadada;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .container-list{
            background: #f5f5f5
        }
        .show-in-desktop{
            display: none
        }

        .title-plan{
            font-size: 20px;
        }

        .off-number{
            font-size: 20px;
            float: right;
        }
        .show-in-mobile{
            display: block
        }
        .more-economic-plan-text{
            font-size: 21px;
            font-weight: 700;
        }
        .container-result-mobile{
            margin-top: 0px;
            margin-bottom: 0px;
        }
        .result-text{

            position: relative;
            top: 3px;
            margin-right: 10px;
            font-size: 13px;

            a{
                font-size: 13px;
            }
        }
        .header{
            padding-top: 0px;
            background-image: url(../assets/background-mobile.jpg) !important;

        }

        .no-padding{
            padding-right: 15px;
            padding-left: 15px;
        }

        .container-form-header{
            margin-top: 20px;
        }

        .container-slides-header{
            padding-left: 50px !important;
            padding-right: 50px !important;
        }

        .container-slides-header{
            label{
                font-weight: 400 !important;
                margin-bottom: 0px;
                font-size: 20px;
                span{
                    font-size: 30px !important;
                }
            }
        }
        .text-helper-top-container-form{

            .btn-group {
                button{
                    color: black;
                    font-size: 23px;
                }
                button::after{
                    color: white;
                }
            }
            margin-bottom: 10px;
        }
        .mobile-title-text{
            display:inline;
            text-align: center;
            span{
                font-size: 30px;
                color: white;
                line-height: 35px;
            }
        }

        .container-form-header .form-group label{
            font-size: 20px;
        }

        .toggle-nopadding{
            padding: 0px;
            margin: 0px;
            font-size: 17px;
        }
        .icon-mobile{
            width: 30px;
            height: 30px;
            img{
                width: 20px;
                height: 20px;
                position: relative;
                top: -2px;
            }
        }

        .shadow-result{

            background: #f5f5f5;
            border: 0px;
            padding-top: 5px;
            box-shadow: none;
        }

        .container-rows-results{
            margin-top: 0px;
        }

        .list-description{

        }

        .container-brand-mobile{
            img{
                margin: 0;
                position: relative;
                top: 50%;
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }


        .container-price-mobile{
            p{
                margin: 0px;
            }
        }
        .container-mobile-list-details{
            margin-bottom: 20px;
        }

        .conainer-list-description{
            border-bottom: 1px solid #e2e2e2;
            margin-bottom: 10px;
            padding-bottom: 10px;
        }

        .number-size{
            font-size: 27px;
        }
        .year-title{
            margin-top: 0px !important;
        }


        .container-more-details{
            text-align: center;
            margin-top: 10px;
            a{
                color: #3289bf;
                font-weight: 700;
                font-size: 20px;
            }
        }
    } 
</style>

<style>
    .vue-slider-rail{
        bottom: 0;
        background: #fff;
        background: -webkit-gradient(linear,left bottom,left top,color-stop(13%,#e6e3e3),color-stop(50%,#fff),color-stop(85%,#a09e9e));
        background: linear-gradient(0deg,#e6e3e3 13%,#fff 50%,#a09e9e 85%);
        border-radius: 14px;
        height: 11px;
        top: 7px;
        border: 1px solid #fff;
    }   

    .vue-slider-process{
        position: absolute;
        left: 0;
        right: 165px;
        background: -webkit-gradient(linear,left bottom,left top,color-stop(13%,#ad1717),color-stop(50%,#ff2121),color-stop(85%,#cc0404));
        background: linear-gradient(0deg,#ad1717 13%,#ff2121 50%,#cc0404 85%);
    }
    .vue-slider-dot{
        width: 25px !important;
        height: 25px !important;
        background: #fb2828 !important;
        background: radial-gradient(circle,#fb2828 0,#fb2828 50%,#d61313 76%,#d50a0a 92%) !important;
        border: 4px solid #fff !important;
        border-radius: 50px !important;
        box-shadow: 0 0 1px #000 !important;
    }
    .vue-slider-dot-handle{
        background-color: #fb2828 !important;
        border: 0;
    }
    body{
        background: #f5f5f5
    }

    strong{
        color:#383838 !important
    }
</style>
