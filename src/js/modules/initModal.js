import {
  Modal
} from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {},
    isClose: (modal) => {},
  });

  window.bank_kazan_API.modal = modal;

  // window.bank_kazan_API.modal.onOpen("modal-error");
};
