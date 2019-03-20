import { mapActions } from 'vuex'

export const breadcrumbView = {
  methods: mapActions([
    'setView'
  ]),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setView(vm)
    })
  }
}
