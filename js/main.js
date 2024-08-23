'use strict';

const liJsObject = document.querySelector('.item_three');
const liJsType = document.querySelector('.item_four');
const сlosureJsNestedLi = document.querySelector('.item_two .props__item_four');
const liJsTypeThreeElement = liJsType
    .querySelector('.props__item:nth-child(3)');
const parentChangeElement = document.querySelectorAll('.content .props__list');
console.log('parentChangeElement: ', parentChangeElement);
const cloneList = parentChangeElement[3].cloneNode(true);
const contentAsync = document.querySelector('.item_five .content');
const es6LastElement = parentChangeElement[5]
    .querySelectorAll('.props__item_two');
const es6Title = document.querySelector('.item_two .item__title');
const es6CloneTitle = es6Title.cloneNode(true);
const asyncTitle = document.querySelector('.item_six .item__title');
const closureTitle = document.querySelector('.item_five .item__title');

liJsObject.after(liJsType);
liJsTypeThreeElement.after(сlosureJsNestedLi);
parentChangeElement[3].replaceWith(parentChangeElement[4]);
contentAsync.append(cloneList);
parentChangeElement[2].append(es6LastElement[0]);
parentChangeElement[2].append(es6LastElement[1]);
es6Title.replaceWith(closureTitle);
document.querySelector('.item_five .props__list').before(asyncTitle);
parentChangeElement[5].before(es6CloneTitle);
document.querySelector('.item_three .item__title')
    .innerHTML = 'This и прототипы объектов';
document.querySelector('.ads').remove();

