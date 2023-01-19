import BoardView from '../view/board-view.js';
import ListView from '../view/list-view.js';
import SortView from '../view/sort-view.js';
import PointAdd from '../view/pointAdd-view.js';
import PointAddDistanceview from '../view/pointAddDistance-view.js';
import PointEdit from '../view/pointEdit-view.js';
import {render} from '../render.js';

export default class BoartPresenter {
  boardComponent = new BoardView();
  taskListComponent = new ListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new PointEdit(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointAddDistanceview(), this.taskListComponent.getElement());
    }

    render(new PointAdd(), this.boardComponent.getElement());
  }

}
