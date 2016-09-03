module.exports = {
  buildArrayFromObject(sourceObject, destinationArray, keyName, valueName) {
    Object.keys(sourceObject).forEach((key) => {
      const obj = {};
      obj[keyName] = key;
      obj[valueName] = sourceObject[key];
      destinationArray.push(obj);
    });
  },

  buildObjectFromArray(sourceArray, destinationObject, keyName) {
    for (let i = 0; i < sourceArray.length; i++) {
      destinationObject[sourceArray[i][keyName]] = sourceArray[i];
    }
  },

  isDevModules(req) {
    return req.originalUrl.toUpperCase().indexOf('DEV') !== -1;
  },

  isGlobalModules(req) {
    return req.originalUrl.toUpperCase().indexOf('GLOBAL') !== -1;
  },

  JSONparse(stringToParse) {
    let result = null;
    try {
      result = JSON.parse(stringToParse);
    } catch (e) {
      return console.error(e);
    }
    return result;
  },

  setInArrayByRepoAndKey(repo, keyToFind, valueToFind, keyToSet, valueToSet, arr) {
    const item = this.findInArrayByRepoAndKey(repo, keyToFind, valueToFind, arr);

    if (item) {
      item[keyToSet] = valueToSet;
    }
  },

  findInArrayByRepoAndKey(repo, keyToFind, valueToFind, arr) {
    const index = arr
      .findIndex((item) => item.repo === repo && item[keyToFind] === valueToFind);

    return arr[index];
  },

  extend(source, destination) {
    for (const [key, value] of source) {
      destination[key] = value;
    }
  },
};