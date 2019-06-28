import avalon from 'avalon2';
export const name = 'testc-c';

avalon.component(name, {
    template: __inline('./testC-C.html'),
    defaults: {
        onReady() {
            console.log('testC-C')
        },
        test:'testC-C'
    }
});