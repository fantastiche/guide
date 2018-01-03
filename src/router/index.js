import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition/PageTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [
        {
          path: '/',
          redirect: '/km0'
        }, {
          path: '/km0',
          name: 'km0',
          component: resolve => require(['../view/Detail/km0.vue'], resolve)
        }, {
          path: '/km1',
          name: 'km1',
          component: resolve => require(['../view/Detail/km1.vue'], resolve)
        }, {
          path: '/km2',
          name: 'km2',
          component: resolve => require(['../view/Detail/km2.vue'], resolve)
        }, {
          path: '/km3',
          name: 'km3',
          component: resolve => require(['../view/Detail/km3.vue'], resolve)
        }, {
          path: '/c0',
          name: 'c0',
          component: resolve => require(['../view/Delivery/c0.vue'], resolve)
        }, {
          path: '/c1',
          name: 'c1',
          component: resolve => require(['../view/Delivery/c1.vue'], resolve)
        }, {
          path: '/c2',
          name: 'c2',
          component: resolve => require(['../view/Delivery/c2.vue'], resolve)
        }, {
          path: '/c3',
          name: 'c3',
          component: resolve => require(['../view/Delivery/c3.vue'], resolve)
        }, {
          path: '/c4',
          name: 'c4',
          component: resolve => require(['../view/Delivery/c4.vue'], resolve)
        }, {
          path: '/c5',
          name: 'c5',
          component: resolve => require(['../view/Delivery/c5.vue'], resolve)
        }, {
          path: '/c6',
          name: 'c6',
          component: resolve => require(['../view/Delivery/c6.vue'], resolve)
        }, {
          path: '/c7',
          name: 'c7',
          component: resolve => require(['../view/Delivery/c7.vue'], resolve)
        }, {
          path: '/c8',
          name: 'c8',
          component: resolve => require(['../view/Delivery/c8.vue'], resolve)
        }, {
          path: '/c9',
          name: 'c9',
          component: resolve => require(['../view/Delivery/c9.vue'], resolve)
        }, {
          path: '/c10',
          name: 'c10',
          component: resolve => require(['../view/Delivery/c10.vue'], resolve)
        }, {
          path: '/c11',
          name: 'c11',
          component: resolve => require(['../view/Delivery/c11.vue'], resolve)
        }, {
          path: '/c12',
          name: 'c12',
          component: resolve => require(['../view/Delivery/c12.vue'], resolve)
        }, {
          path: '/c13',
          name: 'c13',
          component: resolve => require(['../view/Delivery/c13.vue'], resolve)
        }, {
          path: '/c14',
          name: 'c14',
          component: resolve => require(['../view/Delivery/c14.vue'], resolve)
        }, {
          path: '/c15',
          name: 'c15',
          component: resolve => require(['../view/Delivery/c15.vue'], resolve)
        }, {
          path: '/c16',
          name: 'c16',
          component: resolve => require(['../view/Delivery/c16.vue'], resolve)
        }, {
          path: '/c17',
          name: 'c17',
          component: resolve => require(['../view/Delivery/c17.vue'], resolve)
        }, {
          path: '/r0',
          name: 'r0',
          component: resolve => require(['../view/Receiving/r0.vue'], resolve)
        }, {
          path: '/r1',
          name: 'r1',
          component: resolve => require(['../view/Receiving/r1.vue'], resolve)
        }, {
          path: '/r2',
          name: 'r2',
          component: resolve => require(['../view/Receiving/r2.vue'], resolve)
        }, {
          path: '/r3',
          name: 'r3',
          component: resolve => require(['../view/Receiving/r3.vue'], resolve)
        }, {
          path: '/r4',
          name: 'r4',
          component: resolve => require(['../view/Receiving/r4.vue'], resolve)
        }, {
          path: '/r5',
          name: 'r5',
          component: resolve => require(['../view/Receiving/r5.vue'], resolve)
        }, {
          path: '/r6',
          name: 'r6',
          component: resolve => require(['../view/Receiving/r6.vue'], resolve)
        }, {
          path: '/r7',
          name: 'r7',
          component: resolve => require(['../view/Receiving/r7.vue'], resolve)
        }, {
          path: '/r8',
          name: 'r8',
          component: resolve => require(['../view/Receiving/r8.vue'], resolve)
        }, {
          path: '/s0',
          name: 's0',
          component: resolve => require(['../view/Receiving/s0.vue'], resolve)
        }, {
          path: '/s1',
          name: 's1',
          component: resolve => require(['../view/Receiving/s1.vue'], resolve)
        }, {
          path: '/s2',
          name: 's2',
          component: resolve => require(['../view/Receiving/s2.vue'], resolve)
        }, {
          path: '/s3',
          name: 's3',
          component: resolve => require(['../view/Receiving/s3.vue'], resolve)
        }, {
          path: '/s4',
          name: 's4',
          component: resolve => require(['../view/Receiving/s4.vue'], resolve)
        }, {
          path: '/s5',
          name: 's5',
          component: resolve => require(['../view/Receiving/s5.vue'], resolve)
        }, {
          path: '/s6',
          name: 's6',
          component: resolve => require(['../view/Receiving/s6.vue'], resolve)
        }, {
          path: '/p0',
          name: 'p0',
          component: resolve => require(['../view/Check/p0.vue'], resolve)
        }, {
          path: '/p1',
          name: 'p1',
          component: resolve => require(['../view/Check/p1.vue'], resolve)
        }, {
          path: '/p2',
          name: 'p2',
          component: resolve => require(['../view/Check/p2.vue'], resolve)
        }, {
          path: '/p3',
          name: 'p3',
          component: resolve => require(['../view/Check/p3.vue'], resolve)
        }, {
          path: '/p4',
          name: 'p4',
          component: resolve => require(['../view/Check/p4.vue'], resolve)
        }, {
          path: '/p5',
          name: 'p5',
          component: resolve => require(['../view/Check/p5.vue'], resolve)
        }, {
          path: '/p6',
          name: 'p6',
          component: resolve => require(['../view/Check/p6.vue'], resolve)
        }, {
          path: '/p7',
          name: 'p7',
          component: resolve => require(['../view/Check/p7.vue'], resolve)
        }, {
          path: '/p8',
          name: 'p8',
          component: resolve => require(['../view/Check/p8.vue'], resolve)
        }, {
          path: '/p9',
          name: 'p9',
          component: resolve => require(['../view/Check/p9.vue'], resolve)
        }, {
          path: '/p10',
          name: 'p10',
          component: resolve => require(['../view/Check/p10.vue'], resolve)
        }, {
          path: '/p11',
          name: 'p11',
          component: resolve => require(['../view/Check/p11.vue'], resolve)
        }, {
          path: '/p12',
          name: 'p12',
          component: resolve => require(['../view/Check/p12.vue'], resolve)
        }, {
          path: '/p13',
          name: 'p13',
          component: resolve => require(['../view/Check/p13.vue'], resolve)
        }, {
          path: '/p14',
          name: 'p14',
          component: resolve => require(['../view/Check/p14.vue'], resolve)
        }, {
          path: '/p15',
          name: 'p15',
          component: resolve => require(['../view/Check/p15.vue'], resolve)
        }, {
          path: '/p16',
          name: 'p16',
          component: resolve => require(['../view/Check/p16.vue'], resolve)
        }, {
          path: '/p17',
          name: 'p17',
          component: resolve => require(['../view/Check/p17.vue'], resolve)
        }, {
          path: '/i1',
          name: 'i1',
          component: resolve => require(['../view/Imember/i1.vue'], resolve)
        }, {
          path: '/i2',
          name: 'i2',
          component: resolve => require(['../view/Imember/i2.vue'], resolve)
        }, {
          path: '/i3',
          name: 'i3',
          component: resolve => require(['../view/Imember/i3.vue'], resolve)
        }, {
          path: '/i4',
          name: 'i4',
          component: resolve => require(['../view/Imember/i4.vue'], resolve)
        }, {
          path: '/i5',
          name: 'i5',
          component: resolve => require(['../view/Imember/i5.vue'], resolve)
        }, {
          path: '/i6',
          name: 'i6',
          component: resolve => require(['../view/Imember/i6.vue'], resolve)
        }, {
          path: '/i7',
          name: 'i7',
          component: resolve => require(['../view/Imember/i7.vue'], resolve)
        }, {
          path: '/i8',
          name: 'i8',
          component: resolve => require(['../view/Imember/i8.vue'], resolve)
        }, {
          path: '/i9',
          name: 'i9',
          component: resolve => require(['../view/Imember/i9.vue'], resolve)
        }, {
          path: '/i10',
          name: 'i10',
          component: resolve => require(['../view/Imember/i10.vue'], resolve)
        }, {
          path: '/i11',
          name: 'i11',
          component: resolve => require(['../view/Imember/i11.vue'], resolve)
        }, {
          path: '/i12',
          name: 'i12',
          component: resolve => require(['../view/Imember/i12.vue'], resolve)
        }, {
          path: '/i13',
          name: 'i13',
          component: resolve => require(['../view/Imember/i13.vue'], resolve)
        }, {
          path: '/i14',
          name: 'i14',
          component: resolve => require(['../view/Imember/i14.vue'], resolve)
        }, {
          path: '/i15',
          name: 'i15',
          component: resolve => require(['../view/Imember/i15.vue'], resolve)
        }, {
          path: '/i16',
          name: 'i16',
          component: resolve => require(['../view/Imember/i16.vue'], resolve)
        }, {
          path: '/i17',
          name: 'i17',
          component: resolve => require(['../view/Imember/i17.vue'], resolve)
        }, {
          path: '/i18',
          name: 'i18',
          component: resolve => require(['../view/Imember/i18.vue'], resolve)
        }, {
          path: '/i19',
          name: 'i19',
          component: resolve => require(['../view/Imember/i19.vue'], resolve)
        }, {
          path: '/i20',
          name: 'i20',
          component: resolve => require(['../view/Imember/i20.vue'], resolve)
        }]
    }]
})
