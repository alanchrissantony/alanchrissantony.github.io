import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NProgress from 'nprogress';

// use
Vue.use(Router);

// create
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '.is()',
            component: Home,
            meta: {
                title: 'alan_chr.is',
                bodyClass: 'page-home',
                metaTags: [
                    {
                        name: 'description',
                        content: 'I am a self-taught Python developer and this is my portfolio'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'og:url',
                        content: 'https://https://alanchrissantony.github.io/'
                    },
                    {
                        name: 'og:description',
                        content: 'I am a self-taught Python developer and this is my portfolio'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/'
                    },
                    {
                        name: 'twitter:description',
                        content: 'I am a self-taught Python developer and this is my portfolio'
                    },
                ]
            }
        },
        {
            path: '/about',
            name: '.about()',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                title: 'alan.about',
                bodyClass: 'page-about',
                metaTags: [
                    {
                        name: 'description',
                        content: 'I am a self-taught Python developer and this is my resume'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/about'
                    },
                    {
                        name: 'og:description',
                        content: 'I am a self-taught Python developer and this is my resume'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/about'
                    },
                    {
                        name: 'twitter:description',
                        content: 'I am a self-taught Python developer and this is my resume'
                    },
                ]
            }
        },
        {
            path: '/work',
            name: '.work()',
            component: () => import(/* webpackChunkName: "work" */ './views/Work.vue'),
            meta: {
                title: 'alan.work',
                bodyClass: 'page-work',
                metaTags: [
                    {
                        name: 'description',
                        content: 'My selected works'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/work'
                    },
                    {
                        name: 'og:description',
                        content: 'My selected works'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/work'
                    },
                    {
                        name: 'twitter:description',
                        content: 'My selected works'
                    },
                ]
            },
        },
        {
            path: '/work/confianca',
            name: `.work('Confiança')`,
            component: () => import(/* webpackChunkName: "confianca" */ './views/work/Confianca.vue'),
            meta: {
                title: `alan_chr.is('Confiança')`,
                bodyClass: 'page-confianca',
                metaTags: [
                    {
                        name: 'description',
                        content: 'A detailed case of Confiança Delivery project.'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is(\'Confiança\')'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/work/confianca'
                    },
                    {
                        name: 'og:description',
                        content: 'A detailed case of Confiança Delivery project.'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is(\'Confiança\')'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/work/confianca'
                    },
                    {
                        name: 'twitter:description',
                        content: 'A detailed case of Confiança Delivery project.'
                    },
                ]
            },
        },
        {
            path: '/work/admin-panel',
            name: `.work('Admin Panel')`,
            component: () => import(/* webpackChunkName: "admin" */ './views/work/Admin.vue'),
            meta: {
                title: `alan_chr.is('Admin Panel')`,
                bodyClass: 'page-admin-panel',
                metaTags: [
                    {
                        name: 'description',
                        content: 'A detailed case of Biz Commerce\'s Admin Panel'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is(\'Admin Panel\')'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/work/admin-panel'
                    },
                    {
                        name: 'og:description',
                        content: 'A detailed case of Biz Commerce\'s Admin Panel'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is(\'Admin Panel\')'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/work/admin-panel'
                    },
                    {
                        name: 'twitter:description',
                        content: 'A detailed case of Biz Commerce\'s Admin Panel'
                    },
                ]
            },
        },
        {
            path: '/work/desbravando',
            name: `.work('Desbravando')`,
            component: () => import(/* webpackChunkName: "desbravando" */ './views/work/Desbravando.vue'),
            meta: {
                title: `alan_chr.is('Desbravando')`,
                bodyClass: 'page-desbravando',
                metaTags: [
                    {
                        name: 'description',
                        content: 'A detailed case of Pepê Reis\' Desbravando cover art'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is(\'Desbravando\')'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/work/desbravando'
                    },
                    {
                        name: 'og:description',
                        content: 'A detailed case of Pepê Reis\' Desbravando cover art'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is(\'Desbravando\')'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/work/desbravando'
                    },
                    {
                        name: 'twitter:description',
                        content: 'A detailed case of Pepê Reis\' Desbravando cover art'
                    },
                ]
            },
        },
        {
            path: '/contact',
            name: '.contact()',
            component: () => import(/* webpackChunkName: "work" */ './views/Contact.vue'),
            meta: {
                title: 'alan.contact',
                bodyClass: 'page-contact',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Contact me'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/contact'
                    },
                    {
                        name: 'og:description',
                        content: 'Contact me'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: 'alan_chr.is'
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/contact'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Contact me'
                    },
                ]
            },
        },
        {
            path: '*',
            name: `.err(404)`,
            component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
            meta: {
                title: `alan_chr.is(404)`,
                bodyClass: 'page-err404',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Ops! Page not found'
                    },
                    // facebook
                    {
                        name: 'og:title',
                        content: `alan_chr.is(404)`
                    },
                    {
                        name: 'og:url',
                        content: 'https://alanchrissantony.github.io/'
                    },
                    {
                        name: 'og:description',
                        content: 'Ops! Page not found'
                    },
                    // twitter
                    {
                        name: 'twitter:title',
                        content: `alan_chr.is(404)`
                    },
                    {
                        name: 'twitter:url',
                        content: 'https://alanchrissantony.github.io/'
                    },
                    {
                        name: 'twitter:description',
                        content: 'Ops! Page not found'
                    },
                ]
            },
        },
    ],
    // scrollBehavior (to, from, savedPosition) {
    //     // reset scroll
    //     return { x: 0, y: 0 }
    // }
});

// NProgress
NProgress.configure({
    easing: 'ease-out',
    speed: 500,
    trickleSpeed: 100,
    showSpinner: false,
});

// beforeEach
router.beforeEach((to, from, next) => {

    // 01. lock scroll
    document.body.classList.add('locked');
    // 02. start loader
    NProgress.start();
    // 03. remove classes to avoid styles conflicts
    document.body.classList.remove(
        '-mario-lock',
        '-mario-easter-egg',
        '-bit16',
        '-mario-played',
        '-open-nav',
        '-mario-bg',
        '-admin-bg',
        '-confianca-bg',
        '-desbravando-bg'
    );

    // 04. Update meta tags
    /*
    This goes through the matched routes from last to first, finding the closest route with a title.
    eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    */
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta');
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });
            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');
            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    // 05. continue
    next();
});

// afterEach
router.afterEach((to, from) => {
    // wait to complete intro transitions
    setTimeout(() => {
        // scroll to top
        // doing it here because the scrollBehavior() was triggered before the animations
        window.scroll(0,0);
        // 01. stop loader
        NProgress.done();
        // 02. release scroll
        document.body.classList.remove('locked');
    }, 1000)
});

export default router;