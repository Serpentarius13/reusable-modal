import { defineStore } from "pinia";

import { extend } from "@vue/shared";
import InfoModalWindow from "../components/Modals/InfoModalWindow.vue";

const component = extend({});
type VueComponent = InstanceType<typeof component>;

export interface IModalProps {
  component: null | VueComponent;
  props?: object;
}

export interface IModalState {
  modalState: IModalProps;
}

const basicState = { component: null, props: {} };

export default defineStore("modal-store", {
  state: (): IModalState => ({ modalState: basicState }),
  actions: {
    openModal(payload: IModalProps) {
      // Get props and component from payload passed to function
      const { props, component } = payload;

      // Get the body element
      const body = document.body;

      // If its there, prevent scroll from happening
      if (body) body.style.overflow = "hidden";

      // Assign them to our state
      this.modalState = { component, props: props || {} };
    },

    closeModal() {
      // Reset our state
      this.modalState = basicState;

      // Get the body element
      const body = document.body;

      // If its there, reset overflow style
      if (body) body.style.overflow = "auto";
    },

    openInfoModal(info: string) {
      this.openModal({ component: InfoModalWindow, props: { text: info } });
    },
  },
  getters: {},
});
