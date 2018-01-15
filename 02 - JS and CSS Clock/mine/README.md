[DEMO](https://ssj0936.github.io/javascript30_practice/02%20-%20JS%20and%20CSS%20Clock/mine/index.html)

# 02 - JS and CSS Clock
    
### 1. javascript related:
1. ``setinterval()`` - timer，隔了多少時間就執行function。
    ex.
    ````javascript
    setinterval(function(){
        console.log("1 second passed")
    },1000);
    ````

2. 修改CSS ``[element].style.[css_option] = [value]``
    ex``secondHand.style.transform = "rotate(90deg)";``
    
### 2.CSS related
1. `transform-origin` ，用來設transform的起點(預設是在中間)
    以``transform: rotate(90deg)``為例，單單設置會以element的中央做90度旋轉
    若設置`transform-origin = right`，則transform會以最右側當作支點
    ex. `<audio data-key="65" src="sounds/clap.wav"></audio>`
    
2. ``transition-timing-function``，用來設定transition動畫的樣式
    REF: [http://www.w3school.com.cn/cssref/pr_transition-timing-function.asp](http://www.w3school.com.cn/cssref/pr_transition-timing-function.asp)
