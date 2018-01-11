# 01 - JavaScript Drum Kit

### 1. ES6 related:
1. ``const`` ：像是JAVA的final，宣告後不可再改變內容值
2. 變數直接引用至string的方法：\`${variable}\`
    ex. `audio[data-key='${keycode}']`
    概念像是PHP雙引號夾入變數，但ES6的大括號裡面甚至可以放入function
3. `function(e){}` = `(e)=>{}`
4. for的替代：`array.foreach`
    ````javascript 
    var arr = ["A","B","C"];
    arr.foreach((el,index)=>{
        console.log(index + ":" +el);
    });
    //0:A
    //1:B
    //2:C
    ````
    
### 2. javascript related:
1. ``keydown``,``keypress``,``keyup``較大的差別：
    `keypress`大小寫會回傳不同keycode
    `keydown`和`keyup`則是將大小寫的keycode視為相同
    `keypress`只能偵測文字按鍵
    `keydown`和`keyup`則可偵測到空白 enter backspace等等

2. 善用transitionend，而不是用setTimeout
    對於在CSS和JS的同步維護上較好
3. `document.querySelector([css selector])`和`document.querySelectorAll([css selector])`
    像是Jquery的`$()`選取器，但`querySelector`會只回傳第一個，而`querySelectorAll`會全部回傳
    
### 3.HTML related
1. `audio tag`
    ex. `<audio data-key="65" src="sounds/clap.wav"></audio>`
    
    javascript 端的DOM操作：
    ````javascript
    var audio = document.querySelector("audio");
    audio.currentTime = 0; //將目前時間設為開頭
    audio.play(); //撥放
    ````
    
    REF: [https://www.w3schools.com/jsref/dom_obj_audio.asp](https://www.w3schools.com/jsref/dom_obj_audio.asp)
