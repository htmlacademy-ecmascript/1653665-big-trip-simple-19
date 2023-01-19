import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render.js';

const filterElement = document.querySelector('.trip-controls__filters  h2[class=visually-hidden]');
const MainElement = document.querySelector('.trip-events h2[class=visually-hidden]');
const boardPresenter = new BoardPresenter({boardContainer: MainElement});

render(new FilterView(), filterElement);

boardPresenter.init();
