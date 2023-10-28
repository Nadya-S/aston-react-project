class MyLocalStorage {
  getItem(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
  }

  setItem(itemName, itemValue) {
    localStorage.setItem(`${itemName}`, JSON.stringify(itemValue));
  }
}

export default new MyLocalStorage();
