export const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export const createAndAttachTextNode = (element, text) => {
  const createdElement = document.createElement(element);
  const createdTextNode = document.createTextNode(text);

  createdElement.appendChild(createdTextNode);

  return createdElement;
}

export const appendChildren = (parent, children) => {
  children.forEach(child => {
    parent.appendChild(child);
  })

  return parent;
}