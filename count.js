function countClickFirst(counter = 5, el) {
  const innerText = el.innerText;
  el.innerText = `${innerText} (${counter})`;
  return function () {
    counter--;
    if (counter === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText} (${counter})`;
    return counter;
  };
}

export default countClickFirst;
