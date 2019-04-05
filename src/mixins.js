import { mapActions } from 'vuex';

export const breadcrumbView = { // eslint-disable-line import/prefer-default-export
  props: {
    viewInfo: {
      type: Object,
      required: true,
    },
  },
  methods: mapActions([
    'setView',
  ]),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.setView(vm);
    });
  },
};
