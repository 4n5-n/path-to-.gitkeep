// 問題文と選択しと答えを変数と定数で定義する
const question = 'sirの称号があたえられた部位はどこか';
const answer = [
    'シャトーブリアン',
    'リブロース',
    'ヒレ',
    'サーロイン',
];
const correct = 'サーロイン';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answer[0];
document.getElementsByTagName('button')[1].textContent = answer[1];
document.getElementsByTagName('button')[2].textContent = answer[2];
document.getElementsByTagName('button')[3].textContent = answer[3];


//ボタンをクリック手からの正誤判定
document.getElementsByTagName('button')[0].addEventListener('click',() =>{
    if(correct === document.getElementsByTagName('button')[0].textContent){
        window.alert('正解です')
    }else{
        window.alert('不正解です')
        }
    });

document.getElementsByTagName('button')[1].addEventListener('click',() =>{
    if(correct === document.getElementsByTagName('button')[1].textContent){
        window.alert('正解です')
    }else{
       window.alert('不正解です')
       }
    });
    document.getElementsByTagName('button')[2].addEventListener('click',() =>{
    if(correct === document.getElementsByTagName('button')[2].textContent){
        window.alert('正解です')
    }else{
        window.alert('不正解です')
        }
    });
    document.getElementsByTagName('button')[3].addEventListener('click',() =>{
    if(correct === document.getElementsByTagName('button')[3].textContent){
        window.alert('正解です')
    }else{
        window.alert('不正解です')
         }
    });
