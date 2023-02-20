class Helper {
  handleLanguages(obj) {
    let values = [];
    for (const key in obj) {
      values.push(obj[key]);
    }
    return values;
  }

  handleCurrencies(obj) {
    let keys = [];
    for (const key in obj) {
      keys.push(`${obj[key].name} ( ${obj[key].symbol} )`);
    }
    return keys;
  }

  format(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      if (i !== array.length - 1) {
        result.push(`${array[i]}, `);
      } else {
        result.push(`${array[i]}`);
      }
    }

    return result;
  }
}

const helper = new Helper();

export default helper;
