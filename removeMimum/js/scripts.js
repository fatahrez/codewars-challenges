function removeSmallest(numbers) {
    if(!numbers) return[];
    var newNumbers = [...numbers];
    var min = Math.min.apply(null, newNumbers);
    newNumbers.splice(newNumbers.indexOf(min), 1);
    return newNumbers;
      throw "TODO: removeSmallest";
    }