import avalon from 'avalon2';
export const name = 'testb';
console.log(2);

avalon.component(name, {
    template: __inline('./testB.html'),
    defaults: {
        onReady() {
            console.log('testB')
        },
        test:'testB'
    }
});