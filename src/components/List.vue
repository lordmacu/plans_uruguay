<template>
    <div class="container-list">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true"></loading>
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue bg-dark show-in-desktop">
            <div class=" container">
                <a class="navbar-brand" href="#">COMPARADOR DE PLANES</a>
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
            <nav class="navbar navbar-expand-lg navbar-dark bg-blue bg-transparent show-in-mobile mb-3">
                <div class=" container">
                    <a class="navbar-brand" href="#">CP</a>
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
                    <div class="col-lg-5 container-choose  d-none d-sm-block">
                        <img src="../assets/choose.png"/>
                    </div>
                    <div class=" col-lg-12 mobile-title-text ">
                        <span>ELEGÍ TU MEJOR PLAN PARA CELULAR!</span>
                    </div>
                    <div class="col-lg-7">
                        <div class="row" v-if="0>4">
                            <div class="col-lg-12 text-helper-top-container-form">
                                <div class="btn-group ">
                                    <button type="button" class="btn white-button-dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        OPCIONES SIN EQUIPO
                                    </button>
                                    <div class="dropdown-menu">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 container-slides-header">
                            <div class="form-group" v-for="filter in filters" :key="filter.id">
                                    <label>{{filter.name}}: <span>{{filter.valueSelect}}</span></label>
                                    <vue-slider :data="filter.filterNames" :height="10" :railStyle="{ backgroundColor: 'red' }" v-model="filter.valueSelect" />
                            </div>
                            
                        </div>
                        <div class="col-lg-6 container-form-header">

                            <div class="form-group">
                                <label>REDES</label>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                         {{networkSelect}}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" v-if="networkSelect!='Mostrar Todas'"  href="javascript:void(0)" v-on:click="networkSelect='Mostrar Todas'" >Mostrar Todas</a>

                                        <a class="dropdown-item" href="javascript:void(0)" v-for="network in networks" :key="network.id" v-on:click="selectedValueFilters(network.id,networks,1)">{{network.name}}</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>REGIÓN</label>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{regionSelect}}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item"  href="javascript:void(0)" v-if="regionSelect!='Mostrar Todas'" v-on:click="regionSelect='Mostrar Todas'"  >Mostrar Todas</a>

                                        <a class="dropdown-item"  href="javascript:void(0)" v-for="region in regions" :key="region.id" v-on:click="selectedValueFilters(region.id,regions,2)">{{region.name}}</a>

                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>COMPAÑIAS</label>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{companySelect}}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item"  href="javascript:void(0)"  v-if="companySelect!='Mostrar Todas'" v-on:click="companySelect='Mostrar Todas'" >Mostrar Todas</a>

                                        <a class="dropdown-item"  href="javascript:void(0)" v-for="carrier in carriers" :key="carrier.id" v-on:click="selectedValueFilters(carrier.id,carriers,3)">{{carrier.name}}</a>

                                    </div>
                                </div>
                            </div>
                            <div class="form-group no-margin search-container-button">
                                <button class="btn button-red " v-on:click="getPlans()">Búscar</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-helper-container-form">
                            <p  >SELECCIONES UNO O VARIOS FILTROS PARA REALIZAR SU BÚSQUEDA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="body-list container">
        <div class="row">
            <div class="col-lg-6 col-12">
                <div class="row">
                    <div class="col-lg-12 container-result-mobile">
                        <span class="result-text">RESULTADO:</span>
                        <div class="btn-group">
                            <button type="button" class="btn  dropdown-toggle toggle-nopadding" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{contractSelect}}
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item"  href="javascript:void(0)"  v-if="contractSelect!='Mostrar Todo'" v-on:click="contractSelect='Mostrar Todo'" >Mostrar Todo</a>

                                <a class="dropdown-item" v-for="contract in contracts" href="javascript:void(0)" :key="contract.id" v-on:click="selectedValueFilters(contract.id,contracts,4)">{{contract.name}}</a>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9 col-9">
                        <span class="more-economic-plan-text">PLANES MÁS ECÓNOMICOS</span>
                    </div>
                    <div class="show-in-mobile col-3" >
                        <button v-if="0>4" class="btn   round-button filter-by-button-border icon-mobile" style="margin-right:3px"><img  src="../assets/arrow-blue.png" /></button>
                        <button v-if="0>4"  class="btn  round-button filter-by-button-border icon-mobile"><img  src="../assets/settings-blue.png" /></button>

                    </div>
                </div> 
            </div>
            <div class="col-lg-6 col-3">

                <div class="container-filter-button show-in-desktop" v-if="0>4">
                    <span>Filtrar</span>
                    <button class="btn btn-danger round-button filter-by-button"><img  src="../assets/setting_button.png" /></button>

                </div>
                <div class="container-order-by  show-in-desktop">
                    <button class="btn btn-danger round-button order-by-image "><img src="../assets/up-arrow.png" /></button>
                    <div class="btn-group">
                        <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{orderSelect}}
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="javascript:void(0)"  v-for="filter in filters" :key="filter.id" v-on:click="selectedValueFilters(filter.id,filters,5)">{{filter.name}}</a>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row container-rows-results">
            <div class="col-lg-12 shadow-result" v-for="(item,i) in list" :key="item.id" >
                <div class="row">
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-5 company-container">
                                <div class="show-in-desktop">
                                    <p>Compañia </p>
                                    <img :src="'http://comparador.comparaplanes.com/storage/'+item.carrier.image"/>
                                </div>
                                <div class="show-in-mobile row container-mobile-list-details">
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col-5 container-brand-mobile">
                                                <img width="100%" src="../assets/logo-result.png"/>
                                            </div>
                                            <div class="col-7">
                                                <span class="title-plan ">{{item.name}}</span>   <span v-html="calculateOff(item)" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 container-price-mobile">
                                        <p class="font-size-price-main "><span class="font-simbol">$</span><span>{{item.price}}</span><span class="month-font">/mes</span></p>
                                        <p class="after">antes<span>$ {{item.normal_price}}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 no-padding">
                                <div class="row show-in-desktop">
                                    <div class="col-lg-12 no-padding">
                                        <span class="title-plan ">{{item.name}}</span>    <span v-html="calculateOff(item)" /> 

                                    </div>
                                </div>
                                <div class="row conainer-list-description">
                                    <div class="col-lg-12 col-4 list-description no-padding" v-for="feature in item.features" :key="feature.id">
                                        <span><img src="../assets/check.png"/></span><span>{{feature.title}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-12 show-in-mobile">
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.minutes,maxMinutes),color: '#eb3b4c' }]"></vc-donut>
                                        <span class="number-size" v-if="item.minutes>99999">Ilimitado</span>
                                        <span class="number-size" v-if="item.minutes<99999">{{item.minutes}}</span>
                                        <span class='helper-text-list'>Minutos llamadas</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.internet,maxInternet),color: '#eb3b4c' }]"></vc-donut>
                                        <span class="number-size" v-if='item.internet<=maxInternet'>{{item.internet}} GB</span>
                                        <span class="number-size" v-if='item.internet>maxInternet'>ILIMITADO</span>
                                        <span class="helper-text-list">Datos Móviles</span>
                                    </div>
                                    <div class="col-4 container-contact">
                                        <img width="width: 50px;" src="../assets/clock.png"/>
                                        <div v-if="item.contract">
                                            <span class="year-title">{{item.contract.name}}</span>
                                            <span class="text-contact" v-if="item.contract.minimum_price">Contrato Mínimo</span>
                                        </div>
                                        <div v-if="!item.contract">
                                            <span class="year-title">Sin Contrato</span>
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 show-in-mobile" >
                                <div class="row" style="display: contents;">
                                    <div class="col-12 container-more-details">
                                        <a href="javascript:void(0)" v-on:click="goToIndividual(item.id)">Mostrar más Detalles ></a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 show-in-desktop">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-6 text-center">
                                                <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.minutes,maxMinutes),color: '#eb3b4c' }]"></vc-donut>
                                                 <span class="number-size" v-if="item.minutes>99999">Ilimitado</span>
                                                <span class="number-size" v-if="item.minutes<99999">{{item.minutes}}</span>
                                                <span class='helper-text-list'>Minutos llamadas</span>
                                            </div>
                                            <div class="col-lg-6 text-center">
                                                <vc-donut :size="50" foreground="#e6e6e6"  :thickness="50" :sections="[{ value: calculatePercentaje(item.internet,maxInternet),color: '#eb3b4c' }]"></vc-donut>
                                                
                                                 <span class="number-size" v-if='item.internet<=maxInternet'>{{item.internet}} GB</span>
                                                 <span class="number-size" v-if='item.internet>maxInternet'>ILIMITADO</span>
                                                <span class="helper-text-list">Datos Móviles</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 container-contact">
                                        <div v-if="item.contract">
                                            <span class="year-title">{{item.contract.name}}</span>
                                            <span class="text-contact" v-if="item.contract.minimum_price">Contrato Mínimo</span>
                                        </div>
                                        <div v-if="!item.contract">
                                            <span class="year-title">Sin Contrato</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 show-in-desktop">
                                <div class="row container-price-list mt-1">
                                    <div class="col-lg-7">
                                        <p class="container-economic" v-if="i==0"><img  src="../assets/economic.png"/></p>
                                        <p class="mt-4" v-if="i!=0"></p>
                                        <p class="font-size-price-main "><span class="font-simbol">$</span><span>{{item.price}}</span><span class="month-font">/mes</span></p>
                                        <p class="after">antes<span>$ {{item.normal_price}}</span></p>
                                    </div>
                                    <div class="col-lg-5 container-details">
                                        <a href="javascript:void(0)" v-on:click="goToIndividual(item.id)" class="btn button-red center-verticaly"    >Más Detalles</a>
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
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    import Donut from 'vue-css-donut-chart';
    import 'vue-css-donut-chart/dist/vcdonut.css';

    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

  // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    

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

    Vue.use(VueLogger, options);

    Vue.use(VueAxios, axios)
    Vue.use(Donut);

    export default {
        name: 'List',

        components: {
            VueSlider,
            Loading
        },
        mounted() {

            this.getPlans();
            this.getFilters();
        },
        data() {
            return {
                valueInternet: 0,
                valueMinutes: 0,
                valueSms: 0,
                valuePrice: 0,
                isLoading:true,
                list: [],
                maxMinutes:2000,
                maxInternet:15,
                maxSms:2000,
                filters:[],
                networks:[],
                regions:[],
                carriers:[],
                contracts:[],
                companySelect:"Mostrar Todas",
                networkSelect:"Mostrar Todas",
                regionSelect:"Mostrar Todas",
                contractSelect:"Mostrar Todo",
                orderSelect:"Ordernar por:"

            }
        }, methods: {
            goToIndividual(id){
              window.open("/#/detail/"+id);  
            },
            selectedValueFilters(index,array,regionSelect){

                for(var i =0; i<array.length;i++){
                    
                    if(index==array[i].id){

                        if(regionSelect==1){
                                this.networkSelect=array[i].name;
                            }
                            if(regionSelect==2){
                                this.regionSelect=array[i].name;
                            }
                             if(regionSelect==3){
                                this.companySelect=array[i].name;
                            }
                             if(regionSelect==4){
                                this.contractSelect=array[i].name;
                            }
                             if(regionSelect==5){
                                this.orderSelect=array[i].name;
                            }
                         
                    }
                }
                return regionSelect;
            },
            calculatePercentaje(value, maxvalue){                       
                        var result=value*100/maxvalue;
                        var resultDonut=100;
                        if(result<100){
                            resultDonut=result;
                        }
                        return resultDonut;

            },
            calculateOff(item){
                        if(item.price<item.normal_price){
                            return '<span class="off-number">'+(100-(item.price/item.normal_price)*100)+'% OFF</span>';
                        }else{
                            return "";
                        }
            },
            getPlans() {
                
                var filterValues=[];
                
                for(var i =0 ; i<this.filters.length; i++ ){
                    filterValues.push({value:this.filters[i].valueSelect,id:this.filters[i].id});
                }
                
                this.$http.post('http://comparador.comparaplanes.com/getPlans',{
                    companySelect:this.companySelect,
                    networkSelect:this.networkSelect,
                    regionSelect:this.regionSelect,
                    contractSelect:this.contractSelect,
                    orderSelect:this.orderSelect,
                    filters:filterValues
                }
                        ).then(response => {
                         this.list=response.data.data;
                 this.isLoading=false;
                });

            },
            getFilters() {
                this.$http.post('http://comparador.comparaplanes.com/getFilters').then(response => {
                        
                        
                        var filters=response.data.data;
                        this.networks=response.data.networks;
                        this.regions=response.data.regions;
                        this.carriers=response.data.carriers;
                        this.contracts=response.data.contracts;

                        
                        this.maxMinutes=response.data.maxMinutes;
                        this.maxInternet=response.data.maxInternet;
                        this.maxSms=response.data.maxSms;
                        
                        this.$log.error(response.data)

                        
                        for(var i=0; i<filters.length; i++){
                            var filterItem=filters[i];
                            
                            var optionsFilterValues=[];
                            var optionsFilterNames=[];
                            for(var o=0; o<filterItem.filters.length;o++){
                                optionsFilterNames.push(filterItem.filters[o].value)
                                optionsFilterValues.push(filterItem.filters[o].value_filter)
                            }
                            filterItem.valueSelect=optionsFilterNames[optionsFilterNames.length-1];
                            filterItem.filterNames=optionsFilterNames;
                            filterItem.filterValues=optionsFilterValues;

                            
                            this.filters.push(filterItem);
                        }
                      //  this.list=response.data.data;
                });

            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .center-verticaly{
        margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
        padding-top: 20px;
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
    
    .helper-text-list{
            display: block;
    line-height: 18px;
    }

    .shadow-result {
        border-top: 1px solid #cbcbcb;
        padding-top: 25px;
        -webkit-box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
        padding-bottom: 25px;
        color: #000;
        font-weight: 500;
        padding-left: 25px;
        padding-right: 25px;
        background-color: white
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
            text-transform: uppercase;

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
            margin: auto          ;
            display: table
        }
    }
    .round-button{
        border-radius: 1000px
    }
    .container-order-by{
        position: relative;
        float: right;
        margin-top: 23px;
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

   
    .title-plan{
        font-weight: 800;
        font-size: 17px; 
        line-height: 17px;
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
        text-align: center;
        img{
            width: 80px
        }
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
    
     .toggle-nopadding{
            padding-top: 0px;
            padding-top: 0px;
        }

    @media (min-width: 320px) and (max-width: 480px) {
        
        .month-font{
                width: 100%;
                display: table;
        }
        
        .off-number{
                    width: 100%;
    display: table;
        }
        
        .title-plan{
                padding-left: 10px;
        }
        .shadow-result{

        }
        .show-in-desktop{
            display: none
        }

        .show-in-mobile{
            display: flex
        }
        .more-economic-plan-text{
            font-size: 21px;
            font-weight: 700;
        }
        .container-result-mobile{
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .result-text{
            position: relative;
            top: 3px;
            margin-right: 10px;
            font-size: 17px;
        }
        .header{
            padding-top: 0px;
            padding-bottom: 0px;
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
            border: 1px solid #1575b3;
            border-radius: 10px;
            padding-bottom: 15px;
            margin: 15px;

            -webkit-box-shadow: 0px 2px 10px 0px rgba(148,148,148,1);
            -moz-box-shadow: 0px 2px 10px 0px rgba(148,148,148,1);
            box-shadow: 0px 2px 10px 0px rgba(148,148,148,1);
        }

        .container-rows-results{
            margin-top: 15px;
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
            font-size: 17px;
            text-transform: uppercase;
            margin-top: 10px;
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
    
     .off-number{
        background-color: #ea3646;
        color: white;
        padding-left: 5px;
        padding-right: 5px;
        margin-left: 10px;
        font-weight: 800
    }
</style>
