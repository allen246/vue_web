import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:
        [{
          'title': 'Brown eggs',
          'type': 'dairy',
          'description': 'Raw organic brown eggs in a basket',
          'filename': '0.jpg',
          'height': 600,
          'width': 400,
          'price': 28.1,
          'rating': 4
        }, {
          'title': 'Sweet fresh stawberry',
          'type': 'fruit',
          'description': 'Sweet fresh stawberry on the wooden table',
          'filename': '1.jpg',
          'height': 450,
          'width': 299,
          'price': 29.45,
          'rating': 4
        }, {
          'title': 'Asparagus',
          'type': 'vegetable',
          'description': 'Asparagus with ham on the wooden table',
          'filename': '2.jpg',
          'height': 450,
          'width': 299,
          'price': 18.95,
          'rating': 3
        }, {
          'title': 'Green smoothie',
          'type': 'dairy',
          'description': "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
          'filename': '3.jpg',
          'height': 600,
          'width': 399,
          'price': 17.68,
          'rating': 4
        }]
  },
  getters: {
    SaleProducts: state => {
      let saleProduct = state.products.map(product => {
        return {
          name: '**' + product.title + '**',
          price: product.price / 2
        }
      })
      return saleProduct
    }
  },
  mutations: {
    reducer: function (state) {
      state.products.forEach(product => {
        product.price -= 1
      })
    }
  },
  actions: {
    actionReducer: (context, delay) => {
      setTimeout(function () {
        context.commit('reducer')
      }, delay)
    }
  }
})
