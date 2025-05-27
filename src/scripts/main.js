'use strict';

const list = document.querySelector('ul');
const item = Array.from(list.querySelectorAll('li'));

function sortList(data) {
  const sortedItems = data.sort((a, b) => {
    const salaryA = getNumberOfString(a.getAttribute('data-salary'));
    const salaryB = getNumberOfString(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortedItems.forEach((element) => list.appendChild(element));

  return sortedItems;
}

sortList(item);

function getNumberOfString(string) {
  let number = '';

  for (const el of string) {
    if (!isNaN(el)) {
      number += el;
    }
  }

  return +number;
}
