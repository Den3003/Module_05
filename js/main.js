'use strict';

const liJsObject = document.querySelector('.item_three');
const liJsType = document.querySelector('.item_four');

liJsObject.after(liJsType);

const сlosureJsNestedLi = document.querySelector('.item_two .props__item_four');
const liJsTypeThreeElement = liJsType
    .querySelector('.props__item:nth-child(3)');

liJsTypeThreeElement.after(сlosureJsNestedLi);

const parentChangeElement = document.querySelectorAll('.content .props__list');
const cloneList = parentChangeElement[2].cloneNode(true);

parentChangeElement[2].replaceWith(parentChangeElement[4]);

const contentAsync = document.querySelector('.item_five .content');

contentAsync.append(cloneList);

const es6LastElement = parentChangeElement[5]
    .querySelectorAll('.props__item_two');

parentChangeElement[1].append(es6LastElement[0]);
parentChangeElement[1].append(es6LastElement[1]);

const es6Title = document.querySelector('.item_two .item__title');
const es6CloneTitle = es6Title.cloneNode(true);
const asyncTitle = document.querySelector('.item_six .item__title');
const closureTitle = document.querySelector('.item_five .item__title');

es6Title.replaceWith(closureTitle);
document.querySelector('.item_five .props__list').before(asyncTitle);
parentChangeElement[5].before(es6CloneTitle);

document.querySelector('.item_three .item__title')
    .innerHTML = 'This и прототипы объектов';

document.querySelector('.ads').remove();
