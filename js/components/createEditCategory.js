import { createElement } from "../helper/createElement.js";
const TITLE = 'Введите название категории';

export const createEditCategory = (app) => {

    const createCategory = createElement('section', {
        className: 'edit section-offset',
    });
    const container = createElement('div', {
        className: 'container edit__container',
    });

    const title = createElement('h2', {
        className: 'edit__title',
        contentEditable: true,
        title: 'Можно редактировать',
    });

    const table = createElement('table', {
        className: 'edit__table table',
    });

    const thead = createElement('thead');

    const trThead = createElement('tr');

    const tableHeadCellMain = createElement('th', {
        className: 'table__cell',
        textContent: 'main',
    });

    const tableHeadCellSecond = createElement('th', {
        className: 'table__cell',
        textContent: 'second',
    });

    const tableHeadCellEmpty = createElement('th', {
        className: 'table__cell',
    });

    const tbody = createElement('tbody');

    const btnWrapper = createElement('div', {
        className: 'edit__btn-wrapper',
    });

    const btnAddRow = createElement('button', {
        className: 'edit__btn edit__add-row',
        textContent: 'Добавить пару',
    });

    const btnAddSave = createElement('button', {
        className: 'edit__btn edit__save',
        textContent: 'Сохранить категорию',
    });

    const btnAddCancel = createElement('button', {
        className: 'edit__btn edit__cancel',
        textContent: 'Отмена',
    });

    const createTRCell = (dataArr) => {
        const tr = createElement('tr');

        const tableCellMain = createElement('td', {
            className: 'table__cell table__cell_one',
            textContent: 'Добавить пару',
            contentEditable: true,
        });

        const tableCellSecond = createElement('td', {
            className: 'table__cell table__cell_two',
            textContent: dataArr[0],
            contentEditable: true,
        });

        const tableCellDel = createElement('td', {
            className: 'table__cell',
            textContent: dataArr[1],
        });

        const delRow = createElement('button', {
            className: 'table__del',
            textContent: 'X',
        });

        delRow.addEventListener('click', () => {

            if (confirm('Вы уверены, что хотите удалить строку?')) {
                tr.remove();
            }
        });

        tableCellDel.append(delRow);
        tr.append(tableCellMain, tableCellSecond, tableCellDel);

        return tr;
    };


    const mount = () => {

    };

    const unmount = () => {

    };

    return { mount, unmount }
}