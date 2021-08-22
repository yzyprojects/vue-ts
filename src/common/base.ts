export default class Base {
    constructor() {

    }

    // 英文字母第一个字母转大写
    ucfirst(str: string) {
        if (str) {
            var str = str.toLowerCase();
            str = str.replace(/\b\w+\b/g, function(word:string){
              return word.substring(0,1).toUpperCase()+word.substring(1);
            });
            return str;
        }
    }
}