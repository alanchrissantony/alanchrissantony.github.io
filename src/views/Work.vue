<template>
    <div id="work" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                work<br v-if="viewport.is568">(<span class="params">'selected'</span>)
            </h1>

            <div class="std">
                <p class="-gray">// Some special projects explained in details.</p>

                <ul class="work-list">
                    <li>
                        <router-link to="/work/admin-panel" title="Amazon">
                            <img src="@/assets/work/amazonlogo.png" alt="A smartphone showing the home page for the Confiança Delivery project">
                            <div class="details">
                                <strong>Amazon</strong><br>
                                <span class="-comment">// 2021 - Ecommerce</span><br>
                                An online store with a large selection of products
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/confianca" title="Netflix">
                            <img src="@/assets/work/netflixlogo.png" alt="Two white gears inside a purple circle">
                            <div class="details">
                                <strong>Netflix</strong><br>
                                <span class="-comment">// 2020 - OTT Platform</span><br>
                                A streaming platform that offers a wide variety of movies
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/desbravando" title="OLX">
                            <img src="@/assets/work/olx.png" alt="An acoustic guitar floating on a wavy ocean">
                            <div class="details">
                                <strong>OLX</strong><br>
                                <span class="-comment">// 2019 - Online Marketplace</span><br>
                                An online store with a diverse product offering
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    // styles
    import '@/styles/work.scss';

    export default {
        name: 'work',
        props: {
            viewport: Object,
        },
        data() {
            return {
                intro: new TimelineMax()
            }
        },
        methods: {},
        mounted() {

            /**
             * @desc
             * Intro scene
             */
            this.intro
                .addLabel('enter', 1)
                .from('.title', 2, {
                    autoAlpha: 0,
                    rotationX: 70,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                }, 'enter')
                .from('.std', 2, {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                }, 'enter+=1.5');

        },
    };
</script>
