const isIsogram = word => {
    word = word.toLowerCase().split('')
    const result = word.reduce((resultletter, letter) => {
      !resultletter.includes(letter) && resultletter.push(letter);
      return resultletter;
    }, []);
    return result.length === word.length;
  }

  console.log(isIsogram("Dermatoglyphics"))
  console.log(isIsogram("aba"))
  console.log(isIsogram("moOse"))
