import avalon from 'avalon2';
import 'mmRouter';

function getPage(component) {
    const html = `<xmp is="${component}" :widget="{id:'${component.replace(/\-/g, '_')}',expire:${Date.now()}}"></xmp>`;
    return html;
}

function applyRouteConfig(config, parentRoute, accPath = '') {
    config.map(function (route) {
        let apps = {};
        if (route.component) {
            apps.currentPage = route.component;
        }
        if (route.apps) {
            apps = route.apps;
        }
        avalon.router.add(accPath + route.path, function () {
            Object.keys(apps).map(viewName => {
                let component = apps[viewName];
                if (typeof component === 'function') {
                    component(function (m) {
                        if (!avalon.vmodels[parentRoute.name]) {
                            const hashStr = window.location.hash.replace(/#!\//g,'')
                            const hashArr = hashStr.split('/');
                            avalon.router.navigate(hashArr[0], 2);
                            let timer = setInterval(() => {
                                console.log(avalon.vmodels);
                                if (avalon.vmodels[parentRoute.name]) {
                                    clearInterval(timer);
                                    avalon.router.navigate(hashStr, 2);
                                }
                            }, 25)

                        } else {
                            avalon.vmodels[parentRoute.name][viewName] = getPage(m.name);
                        }
                    });
                } else {
                    avalon.vmodels[parentRoute.name][viewName] = getPage(component.name);
                }
            });
        });
        // TODO 支持嵌套路由
        route.children && applyRouteConfig(route.children, route, accPath + route.path);
    });
}

const routeConfig = [{
        path: '/',
        component(resolve) {
            require.async('/apps/testA/testA', resolve);
        }
    },
    {
        path: '/testB',
        component(resolve) {
            require.async('/apps/testB/testB', resolve);
        }
    },
    {
        parentRouteId: 'test',
        name: 'testc',
        sysName: 'testC',
        path: '/testC',
        component(resolve) {
            require.async('/apps/testC/testC', resolve);
        },
        children: [{
                path: '/testC-A',
                component(resolve) {
                    require.async('/apps/testC-A', resolve);
                }
            },
            {
                path: '/testC-B',
                component(resolve) {
                    require.async('/apps/testC-B', resolve);
                }
            },
            {
                path: '/testC-C',
                component(resolve) {
                    require.async('/apps/testC-C', resolve);
                }
            },
        ]
    }
];

export function routerserver(name) {
    applyRouteConfig(routeConfig, {
        name
    });
}