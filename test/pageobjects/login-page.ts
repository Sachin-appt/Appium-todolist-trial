// import { $ } from '@wdio/globals'
// import Page from './page';

// import {Selector} from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TodoPage {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $('#username');
  }

  public get inputPassword() {
    return $('#password');
  }

  toDoInputTextArea() {
    return $('~input-text');
  }
  toDoSaveButton() {
    return $('~save button');
  }
  addedTodo() {
    return $('~added-Todo');
  }
}

export default new TodoPage();
