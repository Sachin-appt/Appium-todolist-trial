import toDoData from '../pageobjects/login-page';
import {faker} from '@faker-js/faker';
describe('Validate the todo app functionality', async () => {
  beforeEach(async () => {
    await driver.setImplicitTimeout(5000);
  });
  afterEach(async () => {
    await driver.setImplicitTimeout(5000);
  });
  it('TC-01 add todo in todoList by using accessibility label and by selecting green color', async () => {
    const elementText: any = [];
    const todoName: string = faker.lorem.words();
    await driver.setImplicitTimeout(2000);
    (await $('android=new UiSelector().textContains("AddToDo")')).click();
    (await toDoData.toDoInputTextArea()).click();
    (await toDoData.toDoInputTextArea()).addValue(todoName);
    await (
      await driver.$(
        '//android.view.ViewGroup[@content-desc="color"]/android.view.ViewGroup[3]/android.view.ViewGroup',
      )
    ).click();
    await driver.setImplicitTimeout(3000);
    await driver.hideKeyboard();
    (await toDoData.toDoSaveButton()).click();
    (await toDoData.addedTodo()).isDisplayed();
    await driver.setImplicitTimeout(6000);
    const text: any = await $$('android.widget.TextView');
    for (const element of text) {
      let text=await element.getText()
      elementText.push(text);
    }
    await expect(elementText).toContain(todoName);
    // console.log(elementText);
  });

  it('TC-02 add todo in todoList by using Ui selector text method', async () => {
    const elementText: any = [];
    const todoName: string = faker.lorem.words();
    (await $('android=new UiSelector().textContains("AddToDo")')).click();
    (await toDoData.toDoInputTextArea()).click();
    (await toDoData.toDoInputTextArea()).addValue(todoName);
    await (
      await driver.$(
        '//android.view.ViewGroup[@content-desc="color"]/android.view.ViewGroup[2]/android.view.ViewGroup',
      )
    ).click();
    await driver.setImplicitTimeout(3000);
    await driver.hideKeyboard();
    (await $('android=new UiSelector().textContains("Save")')).click();
    (await toDoData.addedTodo()).isDisplayed();
    // await expect('~todo-List').toContain(todoName);
    await driver.setImplicitTimeout(6000);
    const text: any = await $$('android.widget.TextView');
    for (const element of text) {
      elementText.push(await element.getText());
    }
    await expect(elementText).toContain(todoName);
    // console.log(elementText);

    // await expect(toDoData.addedTodo()).toHaveText(todoName);
  });

  it('TC-03 add todo in todoList by using xpath', async () => {
    const elementText: any = [];
    const todoName: string = faker.lorem.words();
    (await $('android=new UiSelector().textContains("AddToDo")')).click();
    await $('//android.widget.EditText[@content-desc="input-text"]').click();
    await $('//android.widget.EditText[@content-desc="input-text"]').addValue(
      todoName,
    );
    await (
      await driver.$(
        '//android.view.ViewGroup[@content-desc="color"]/android.view.ViewGroup[2]/android.view.ViewGroup',
      )
    ).click();
    await driver.setImplicitTimeout(3000);
    await driver.hideKeyboard();
    // (await $('android=new UiSelector().textContains("Save")')).click();
    (await $('//*[@text="Save"]')).click();
    (
      await $('//android.view.ViewGroup[@content-desc="todoList"]')
    ).isDisplayed();
    await driver.setImplicitTimeout(6000)
    const text: any = await $$('android.widget.TextView');
    for (const element of text) {
      elementText.push(await element.getText());
    }
    await expect(elementText).toContain(todoName);
    // console.log(elementText);
  });

  it('TC-04 add todo in todoList and should check in checkbox', async () => {
    const elementText: any = [];
    const todoName: string = faker.lorem.words();
    (await $('android=new UiSelector().textContains("AddToDo")')).click();
    (await toDoData.toDoInputTextArea()).click();
    (await toDoData.toDoInputTextArea()).addValue(todoName);
    (await toDoData.toDoSaveButton()).click();
    (await toDoData.addedTodo()).isDisplayed();
    (
      await $(
        '//android.view.ViewGroup[@content-desc="checkbox"]/android.view.ViewGroup/android.view.ViewGroup',
      )
    ).click();
    let checkbox = await $(
      '//android.view.ViewGroup[@content-desc="checkbox"]/android.view.ViewGroup/android.view.ViewGroup',
    );
    let ele = await checkbox.getAttribute('checked');
    await expect(ele).toBe('false');
    await driver.setImplicitTimeout(6000)
    const text: any = await $$('android.widget.TextView');
    for (const element of text) {
      elementText.push(await element.getText());
    }
    await expect(elementText).toContain(todoName);
    console.log(elementText);
  });
});
