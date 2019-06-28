import avalon from 'avalon2';
export const name = 'testc';

avalon.component(name, {
    template: __inline('./testC.html'),
    defaults: {
        onReady() {
            console.log('testC')
        },
        test:'testC',
        currentPage:''
    }
});