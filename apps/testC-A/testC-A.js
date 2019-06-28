import avalon from 'avalon2';
export const name = 'testc-a';

avalon.component(name, {
    template: __inline('./testC-A.html'),
    defaults: {
        onReady() {
            console.log('testC-A')
        },
        test:'testC-A'
    }
});