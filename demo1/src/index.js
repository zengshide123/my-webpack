// import '@babel/polyfill';
import './a';
import './style/index.css';
import './style/test.less';
import './style/test.scss';
import pic from './common/325702.jpg';

console.log('maybe is running good');

$('body').css('backgroundImage',`url(${pic})`)

const arrow = ()=>{
    console.log("it's a arrow");    
}

arrow()

function log(fn){
    fn
    console.log('我是一个装饰器'); 
}

@log
class Fn{
    constructor(){
    
    }
}
    
function *ge(){
    yield 1
}
console.log(ge().next());

var a = new Promise(()=>{
    
});


