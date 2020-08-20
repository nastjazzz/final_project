const assert = require("assert");
const chai = require('chai');
let expect = chai.expect;

const login = 'testLogin';
const pass = 'testPassword';

describe('Тестирование финального проекта BeeInterns', () => {
    before(function() {
        browser.url('http://localhost:3000/');
        const title = browser.getTitle();
        expect(title).to.equal('Final Project');
    })

    it('Отфильтровать питомцев по району', () => {
        $("[href='/login']").click();
        assert.deepStrictEqual(browser.getUrl(), 'http://localhost:3000/login');

        const submitButton = $('input.submit-btn');
        submitButton.waitForEnabled();
        expect(submitButton.getValue()).to.equal('Войти');

        const loginInputs = $$('input.input');
        loginInputs[0].setValue(login);
        loginInputs[1].setValue(pass);
        submitButton.click();
        browser.setTimeout({ 'pageLoad': 5000 });
        assert.deepStrictEqual(browser.getUrl(), 'http://localhost:3000/profile/2');

        const sidebarLinks = $$("ul[class*='sidebar'] a");
        expect(sidebarLinks[1].getText()).to.equal('Рекомендации');
        sidebarLinks[1].click();
        assert.deepStrictEqual(browser.getUrl(),'http://localhost:3000/search')

        const searchTitle = $('div.filter__title').getText();
        expect(searchTitle).to.equal('Рекомендации');

        $('//div[text()=\'Район\']').click();
        $("//input[@value='САО']").click();
        const location = $$('div.user-info__location');
        location.map(str => {
            expect(str.getText()).to.equal('Гуляют в САО');
        })
    })
})