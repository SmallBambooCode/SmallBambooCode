// 如果你看到这段文字了，你懂我什么意思吧。
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

$(function(){

  var cf = document.createElement("canvas");
  var c = document.getElementById('startrack');

  let cw, ch;

  c.width = cf.width = cw = c.offsetWidth;
  c.height = cf.height = ch = c.offsetHeight;
  var longside = Math.max(cw,ch);
  cf.width = longside * 2.6
  cf.height = longside * 2.6

  var ctx = c.getContext('2d');
  var cftx = cf.getContext('2d');


  // ctx.beginPath(); 
  // ctx.rect(0, 0,  cw, ch); 
  // ctx.fillStyle='rgba(0,255,0,.1)'; 
  // ctx.closePath(); 
  // ctx.fill();

  // cftx.beginPath(); 
  // cftx.rect(0, 0,  cf.width, cf.height); 
  // cftx.fillStyle='rgba(255,255,255,.1)'; 
  // cftx.strokeStyle='rgba(255,255,255,.1)'; 
  // cftx.closePath(); 
  // cftx.stroke();


  var centerX = cw;
  var centerY = 0//-ch;
  var stars = [];
  var drawTimes = 0;

  ctx.fillStyle = "rgba(21,21,21,1)";
  ctx.fillRect(0,0,cw,ch);

  ctx.lineCap = 'round';

  function rand(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
  }

  function createStar(){
    stars.push({
      x: rand(-cf.width,cf.width),
      y: rand(-cf.height, cf.height),
      size: 1.2,
      color: randomColor(),
    })
  }

  function randomColor(){
    var r = rand(120,255);
    var g = rand(120,255);
    var b = rand(120,255);
    var a = rand(30,100)/100;
    //var a = 1;
    return "rgba("+r+","+g+","+b+","+a+")";
  }

  function drawStar(){
    var count = stars.length;
    while(count--){
      var cs = stars[count];
      cftx.beginPath(); 
      cftx.arc(cs.x, cs.y, cs.size, 0,Math.PI*2,true); 
      cftx.fillStyle=cs.color; 
      cftx.closePath(); 
      cftx.fill();
    }
  }

  function drawfromCache(){
    ctx.drawImage(cf, -cf.width/2,-cf.height/2);
  }

  function loop(){

    drawfromCache()
    
    drawTimes++;

    if(drawTimes > 400 ){
      if(drawTimes % 8==0){
        ctx.fillStyle = 'rgba(0,0,0,.04)';
        ctx.fillRect(-(longside*3),-(longside*3),longside*6,longside*6);
      }
    }
    rotateCanvas(0.025);

  }

  function rotateCanvas(deg){
    ctx.rotate(deg*Math.PI/180);
  }

  var count = 20000;
  while(count--){
      createStar();
  }
  drawStar();

  var x = centerX;
  var y = centerY;
  ctx.translate(x,y);

  function fireAnimate() {
      requestAnimFrame( fireAnimate );
      loop();
  }

  fireAnimate();

  function changeStar(){
    loop = function(){
      drawfromCache()
    
    drawTimes++;

    if(drawTimes > 150 ){
      if(drawTimes % 8==0){
        ctx.fillStyle = 'rgba(0,0,0,.04)';
        ctx.fillRect(-(longside*3),-(longside*3),longside*6,longside*6);
      }
    }
      rotateCanvas(random(1,100));
    }
  }
  
})


function getMsg(){
    var slogan = [
      "波澜壮岁欣回首，<br>敢在人先又续征。",
      "胸怀凌云志，莫负少年时。",
      "活鱼会逆流而上，<br>死鱼才会随波逐流。",
      "无法听命于自己的人，<br>终将听命于他人。",
      "凡不能杀死我的，<br>终使我更加强大。",
      "Learn.Think.<br>Decide.Do.",
      "Less is more.",
      "惟沉默是最高的轻蔑。",
      "我生来就是高山而非溪流。",
      "但求尽心，不求如人意。",
      "我能计算天体的运行，<br>却无法测度人心的疯狂。",
      "求知若饥，虚心若愚",
      "相信内向者的力量。",
      "没有行动的计划不过是一个愿望。",
      "胜利属于最坚韧的人。",
      "未来属于那些在可能性<br>显现之前便能预见的人。",
      "学习永远不会使思维疲惫。",
      "唯一真正有价值的东西是直觉。",
      "我没有特殊的才能，<br>我只是极度好奇。",
      "发现的乐趣就是奖赏。",
      "科学的态度是批判的态度。",
      "逻辑会把你从 A 带到 B，<br>想象力能带你去任何地方。",
      "未经审视的人生是不值得过的。",
      "真正的智慧是知道自己一无所知。",
      "知识的边界在未知中扩展，<br>真理的光辉在质疑中显现。",
      "问题本身比答案更重要。"
    ];
	var r = random(0,slogan.length-1);
	$("#slogan").html(slogan[r])
}

// 你都来这里翻代码看所有标签了，看来是真爱。
var tags = [
  // 生活
  '老社恐人了', '对什么都感兴趣，除了数学', '对计算机领域的任何东西都有点兴趣',
  '喜欢独处但又想被理解', 'INTP型人格', '人际交往缓冲区加载中', '总在凌晨想通很多事（不是EMO！）',

  // 动画 & 游戏
  '《漫漫长夜》中的麦肯齐', '《Minecraft》服主', '《欧卡2》司机一名',
  '模拟经营爱好者', '《都市:天际线》市长一名', '王者是什么？没玩过',
  '《The Big Bang Theory》观众一名',

  // 技术
  'WordPress用户', '已学C/C++', '已学Python', '已学PyTorch',
  '研究语义分割中', '研究遥感图像处理中', '计算机视觉科研中',

  // 职业
  '自媒体(竹MC&秋竹源)', '喜欢搞机(迫真)', '有一个淘宝店',
  '科研打工人', '班级学委但有点累',

  // 文化
  '二次元（?）', '喜欢听冷门钢琴曲', '纪录片爱好者', '还没看完柯南',
  '心理学自学ing', '荣格八维探索中', 'MBTI深度使用者', '费曼学习法忠实信徒',
  '读过《天生不同》', '看乔布斯传看到凌晨', '还在看《马斯克传》',

  // 设备&工具
  '88VIP YYDS！', '只用得起红米', '有一台13年的显示器', '希望我的S3610能用很久',
  '垃圾佬', '二手它不香嘛', '洋垃圾爱好者',

  // 建站&互联网
  '香港服务器不香吗？备案干啥。(艾玛真香)', '我有很多域名，你能找到几个呢？',
  'Flask 多好用啊', 'Markdown排版狂魔',

  // 短句
  '你记住我了吗，当你试着多roll几个标签的时候，我就赢了',
  '刚刚走神了，这个不算，再roll一个',
  '你可以把你眼中的我发到我的邮箱，我会考虑添加到这里', 
  '时间流逝，代码还在跑', '与其社交不如debug', '请叫我调参侠',
];

let rollTimer = null;

function random(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
}

$(function(){
  getMsg();
  console.log('你好，欢迎来到小竹的个人主页\n网站修改自Flag.Moe');
})

function rollATag() {
  $(".roll-tag").addClass('active');
  let el = $(".roll-tag span.ready")
  el.addClass('removing');
  setTimeout(() => {
    el.remove();
  }, 100)
  var span = $("<span></span>").text(getRandomTag());
  $(".roll-tag").append(span);
  setTimeout(() => {
    span.addClass('ready');
  }, 100)
}

function rollOnce() {
  clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 20)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 40)
  }, 400)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 80)
  }, 800)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 140)
  }, 1200)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = setInterval(rollATag, 240)
  }, 1600)
  setTimeout(function() {
    clearInterval(rollTimer)
    rollTimer = null
  }, 1800)
}

function getRandomTag() {
  return tags[random(0, tags.length-1)];
}

function nav (page){
  switch (page) {
    case 'friends':
      $(".gate-friends").toggle();
      break;
  
    default:
      break;
  }
}

$(document).ready(function () {
  const currentDate = new Date();
  const birthDate = new Date('2005-01-28');
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  if (currentDate.getMonth() < birthDate.getMonth() || 
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
  }
  $('#age').text(`你好，我是小竹，目前${age}岁啦！`);
});
