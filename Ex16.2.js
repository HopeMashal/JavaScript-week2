function duplicationCount(string){
    const myobject = string.split('').reduce((ObjOFLetters, Letter) => {
        let letter=Letter.toLowerCase();
        ObjOFLetters[letter] = (ObjOFLetters[letter] || 0) + 1;
        return ObjOFLetters;
      }, {});
    let object= Object.entries(myobject).filter(letter => letter[1] > 1); 
    let MyString=`${object.length} #`;
    if(object.length === 0){
        MyString+=` no characters repeats more than once`;
    }
    else {
        object.forEach(letter => {
            MyString+=` '${letter[0]}' occurs ${letter[1]} times.`;
        })
    }

    return MyString;
}

console.log(duplicationCount("Hello!IamHope"))
console.log(duplicationCount("asdfghjkl"))