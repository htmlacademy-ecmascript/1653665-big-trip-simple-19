import {createElement} from '../render.js';

function createTaskListTemplate() {
  return '<div class="event"></div>';
}

export default class ListView {
  getTemplate() {
    return createTaskListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
