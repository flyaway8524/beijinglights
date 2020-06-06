$(document).ready(
    $('.container1').mouseenter(()=>{
        $('.detail1').slideDown(600);
    }),

    $('.container2').mouseenter(()=>{
        $('.detail2').slideDown(600);
    }),

    $('.container3').mouseenter(()=>{
        $('.detail3').slideDown(600);
    }),

);

function random () {
    let number = Math.floor(Math.random() * 14)+1;
    console.log(number);
    switch (number) {
        case 1 :
            window.open("../1-Qu Yizhen/qu-yizhen.html");
        break;
        
        case 2: 
            window.open("../2-Zhang Xuejiao/zhang-xuejiao.html");
        break;

        case 3:
            window.open("../3-Li Jianglun/li-jianglun.html");
        break;

        case 4:
            window.open("../4-Mu'zi/mu-zi.html");
        break;

        case 5:
            window.open("../5-Kuang/kuang.html");
        break;

        case 6:
            window.open("../6-Wei Jieguang/wei-jieguang.html");
        break;

        case 7:
            window.open("../7-Luo Yuanling/luo-yuanling.html");
        break;

        case 8:
            window.open("../8-Yu Jinying/yu-jinying.html");
        break;

        case 9:
            window.open("../9-Number Five/number-five.html");
        break;

        case 10:
            window.open("../10-Mr.Mao/mr-mao.html");
        break;

        case 11:
            window.open("../11-Wu/wu.html");
        break;

        case 12:
            window.open("../12-Meng Fanquan/meng-fanquan.html");
        break;

        case 13:
            window.open("../13-Yao Xuemei/yao-xuemei.html");
        break;

        case 14:
            window.open("../14-Wang Rongzhi/wang-rongzhi.html");
        break;
    }
}
