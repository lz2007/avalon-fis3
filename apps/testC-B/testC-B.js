import avalon from 'avalon2';
export const name = 'testc-b';
console.log(2);

avalon.component(name, {
    template: __inline('./testC-B.html'),
    defaults: {
        onReady() {
            console.log('testC-B')
        },
        test:'testC-B'
    }
});