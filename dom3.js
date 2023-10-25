const itemList = document.getElementById('itemList')

const firstItem = itemList.firstChild

const lastItem = itemList.lastChild

const secondItem = firstItem.nextSibling

const thirdItem = secondItem.previousSibling

console.log('first Item: ',firstItem)