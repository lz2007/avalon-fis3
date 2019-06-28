import avalon from 'avalon2';
export const name = 'testa';

avalon.component(name, {
    template: __inline('./testA.html'),
    defaults: {
        onReady() {
            console.log('testA')
        },
        test:'testA'
    }
});