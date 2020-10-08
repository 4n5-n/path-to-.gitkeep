// 問題文と選択しと答えを変数と定数で定義する
const quiz = [
    {
        question : 'sirの称号があたえられた部位はどこか？',
        answer : [
    'シャトーブリアン',
    'リブロース',
    'ヒレ',
    'サーロイン',
        ],
    correct : 'サーロイン'
    },{
        question : 'T-bornステーキはサーロインとどの部位が合わさったものか？',
        answer : [
    'シャトーブリアン',
    'リブロース',
    'ヒレ',
    'サーロイン',
        ],
    correct : 'ヒレ'

    },{
        question : 'バラ肉なのに赤身のようなサッパリとした旨みとサシがある部位はどこか？',
        answer : [
    'シャトーブリアン',
    'カイノミ',
    'ササミ',
    'トモサンカク',
        ],
    correct : 'カイノミ'

    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button");


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
document.getElementById("js-question").textContent = quiz[quizIndex].question;
let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
   buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解です')
        score++;
    }else{
        window.alert('不正解です')
    }
        quizIndex++;
        if(quizIndex < quizLength){
           setupQuiz();            //問題数があればこちらを実行
        }else{　　　　　　　　　　　 //問題数が無ければこちらを実行
        window.alert('終了！正解率は'+score+'/'+quizLength+'です');
        }
    };

//ボタンをクリックしてからの正誤判定
let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) =>{
        clickHandler(e);
    });
    handlerIndex++;    
