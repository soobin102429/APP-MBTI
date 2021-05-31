var num=1;

var q={
    1: {"title":"친구와 큰 오해가 생겨서 다툰 후, 해결하려고 할 때 당신의 선택은?","type":"EI","A":"일단 만나서 얘기하자고 한다.","B":"진심을 담은 카톡으로 대화를 신청한다."},
    2: {"title":"친구가 요즘 넷플릭스에서<br> 볼만한 것이 있는지 물어본다.<br> 당신의 대답은?","type":"EI","A":"어떤 장르, 배우가 좋은지 먼저 물어본다.","B":"내가 최근 본 것들을 바탕으로 추천해준다."},
    3: {"title":"당신이 친구와 식당에 갔을 때<br> 메뉴를 고르는 방식은?","type":"EI","A":"친구에게 먹고 싶은 메뉴가 없는지 먼저 물어본다.","B":"맛있어 보이는 메뉴를 골라 친구에게 물어본다."},
    4: {"title":"친구와 리뷰를 보고 찾아온 맛집의 대기시간이 1시간 이상이라면?","type":"SN","A":"포기하고 근처 다른 식당을 찾는다.","B":"기다려서라도 그 맛을 확인하고 간다."},
    5: {"title":"친구가 술 한 잔 하자고 한다.<br>어떤 술집으로 갈까?","type":"SN","A":"조용하고 아늑한 분위기의 술집","B":"시끄럽고 화려한 분위기의 술집"},
    6: {"title":"친구가 한 번도 시도해본 적 없던 <br>옷스타일을 제안한다면?","type":"SN","A":"급격한 변화는 부담스러우니 천천히 생각해본다.","B":"친구 말을 믿고 도전해본다."},
    7: {"title":"친구가 만나기로 한 약속 장소까지<br> 가는 법을 물어본다면?","type":"TF","A":"장소까지 찾아오는 방법을 상세하고 자세히 설명한다.","B":"큰 건물을 알려주고 근처와서 전화하라고 한다."},
    8: {"title":"친구와 여행을 가기로하고,<br> 여행 계획은 내가 짜기로 했다면?","type":"TF","A":"사전에 꼼꼼하게 계획을 세운다.","B":"중요한 것만 미리 정해놓고 나머지는 가서 생각한다."},
    9: {"title":"오랜만에 휴가를 '하루'를 얻었다.<br> 어떻게 보낼까?","type":"TF","A":"집에서 여유롭게 지낸다.","B":"친구들과 약속을 잡고 신나게 논다."},
    10: {"title":"타로 점이 안좋게 나온 친구에게 <br>당신이 해줄 위로의 말은?","type":"JP","A":"다른 곳에 가서 다시 한 번 받아보자고 한다.","B":"다 미신이라며 믿지말라고 한다."},
    11: {"title":"친구가 알바해 모은 돈으로 <br>해외여행 간다고 연락이 왔다.<br> 나의 첫번째 질문은?","type":"JP","A":"어떤 방법으로 어떻게 모았는지를 묻는다.","B":"모은 액수와 여행 목적지를 묻는다."},
    12: {"title":"집 가구를 조립하던 중 친구에게<br> 지금 만나자는 연락이 왔다면?","type":"JP","A":"먼저 친구를 만나고와서 나머지 조립을 완성한다.","B":"하던 조립을 완성하고 친구를 만나러 간다."}
}
var result = {
    "ISTJ" : {"animal":"생각많은<br>'고슴도치'",
    "explain":"고슴도치",
    "img":"images/hedge.png",
    "mbti-result":"당신의 본캐는 필요하거나 원하는 일을 끝까지 해내며, 은근히 계획적이고 감수성이 풍부한 고슴도치예요. 부캐는 생각이 많고 혼자 노는 것이 좋은 고슴도치입니다. 이런 나도 괜찮다면 먼저 다가와 주기를 바래...라고 생각하고 있군요.",
    "mbti-name":"'좋은 사람이 되고싶어요'",
    "explain1":"오늘 할 일을 내일의 나에게 맡기기로 결정했을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"믿음직한 리더<br>'호랭이'",
    "friend":"images/tiger.png"
},
    "ISFJ" : {"animal":"믿음직한 리더<br>'호랭이'",
    "explain":"호랑이",
    "img":"images/tiger.png",
    "mbti-result":"당신의 본캐는 모두를 이끄는 능력이 탁월하며 분위기를 편안하게 만들어주는 호랑이입니다. 부캐는 다른 사람의 생각을 중요하게 여겨 칭찬이나 비판에 민감한 비둘기예요.",
    "mbti-name":"'이쪽으로 오세요 같이 가요'",
    "explain1":"나를 믿는 사람들과 어울릴 때",
    "explain2":"모닥불 피울 수 있는 캠핑장",
    "explain3":"기차 안 사람들의 소리",
    "friend-tit":"생각많은<br>'고슴도치'",
    "friend":"images/hedge.png"
},
    "INTJ" : {"animal":"워라밸추구형<br>'소'",
    "explain":"소",
    "img":"images/cow.png",
    "mbti-result":"당신의 본캐는 별 말 없이도 다정함이 느껴지며 자신을 앞세우기보다 여유있게 일상을 즐기는 소입니다. 부캐는 너구리, 보통 오늘 할 일을 내일로 미루는 편이지만 불화를 피하기 위해 맡은 일을 끝까지 해내고야 마는군요.",
    "mbti-name":"'싸우기 싫어요 화내지 말아요'",
    "explain1":"오늘 할 일을 내일의 나에게 맡기기로 결정했을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"생각많은<br>'고슴도치'",
    "friend":"images/hedge.png"
},
    "INFJ" : {"animal":"에너자이저<br>'필라맹고'",
    "explain":"필라맹고",
    "img":"images/pilamango.png",
    "mbti-result":"당신의 본캐는 넘치는 에너지로 각종 문제 해결 능력이 뛰어난 필라맹고! 각종 모임의 리더 혹은 분위기 메이커로 활약하는 편이군요. 부캐는 길게 설명하는 것을 견디지 못하고 별 근심이 없으며 대충 살아도 결국 잘 사는 필라맹고 :)",
    "mbti-name":"'일단 저에게 맡겨주세요.'",
    "explain1":"손으로 무언가 그리거나 만들 때",
    "explain2":"건축학적 의미가 있는 공간",
    "explain3":"도서관에서 책장 넘기는 소리",
    "friend-tit":"해맑은 느낌<br>'코린이'",
    "friend":"images/elephant.png"
},
    "ISTP" :{"animal":"해맑은 느낌<br>'코린이'",
    "explain":"코끼리",
    "img":"images/elephant.png",
    "mbti-result":"당신의 본캐는 상상력이 풍부하며 다재다능하고 사람들에게 친절을 베푸는 것을 즐기는 코끼리군요! 부캐는 호기심 많고 열정적이며 무엇이든 연결하는 것을 좋아하는 기린입니다.",
    "mbti-name":"'손에 손 잡고 벽을 넘어서'",
    "explain1":"생각한 대로 행동할 때",
    "explain2":"이국적인 풍경이 펼쳐지는 공간",
    "explain3":"기내 안내 방송",
    "friend-tit":"저세상스타일<br>'필라맹고'",
    "friend":"images/pilamango.png"
},
    "ISFP" : {"animal":"집순이<br>'왈라비뿔소'",
    "explain":"코뿔소",
    "img":"images/hedge.png",
    "mbti-result":"당신의 본캐는 상대를 알기 전까지 자신을 잘 드러내지 않고, 남이 나를 어떻게 생각하는지 고민이 많은 왈라비뿔소예요. 부캐는 물질이나 환경에 대한 소유욕이 적으며 생각이 많은 데 비해 실행이 많지 않는 나무늘보입니다.",
    "mbti-name":"'우리 언제 집에 가요?'",
    "explain1":"꾸밈 없는 자연인의 모습으로 널부러져 있을 때",
    "explain2":"그냥 자기 집에서 노는 것",
    "explain3":"흔들리는 풍경 소리",
    "friend-tit":"에너자이저<br>'필라맹고'",
    "friend":"images/pilamango.png"
},
    "INTP" :{"animal":"사회생활 만랩<br>'거북이'",
    "explain":"거북이",
    "img":"images/turtle.png",
    "mbti-result":"당신의 본캐는 책임감과 공동체 의식이 강한 거북이에요. 사회생활 혹은 단체생활을 은근히 잘하고 안정감을 좋아해 회사에서 '좋은의미' 고인 물 될 확률이 가장 높은 타입이죠. 부캐는 자기 속도로 사는 것이 중요하며 삶의 여유를 추구하는 북이입니다.",
    "mbti-name":"'진지하게 이 문제를 살펴보자면 말이죠'",
    "explain1":"모든 것이 제자리에 있을 때",
    "explain2":"깔끔한 느낌의 도심지 호텔",
    "explain3":"자기 전 듣는 클래식 피아노",
    "friend-tit":"우주의 기운<br>'말랑이'",
    "friend":"images/lion.png"
},
    "INFP" : {"animal":"우주의 기운<br>'말랑이'",
    "explain":"사자",
    "img":"images/lion.png",
    "mbti-result":"당신의 본캐는 오직 믿을 것은 나 자신 뿐이라는 생가긍로 자신의 경꼐를 계속해서 넓혀 나가는 열정의 호랑이입니다. 부캐는 냉철하고 불도저 같은 말이군요.",
    "mbti-name":"'간절히 원하면 이루어져요'",
    "explain1":"새로 생긴 핫 플레이스를 찾아갈 때",
    "explain2":"아드레날린을 잠재워 줄 잔잔한 물가",
    "explain3":"깊은 바다 속 소리",
    "friend-tit":"사회생활 만랩<br>'거북이'",
    "friend":"images/turtle.png"
},
    "ESTJ" : {"animal":"낯가림협회 회원<br>'양질라'",
    "explain":"양질라",
    "img":"images/sheep.png",
    "mbti-result":"당신의 본캐는 차분하게 인생을 관찰하는 양이군요. 낯가림이 있고 남에게 별 관심 없는 듯 하지만 친해지면 본인도 예상치 모ㅓㅅ한 유머 감각을 선보이며 의외의 인기를 얻는 타입이에요. 부캐는 호기심이 많아 혼자 새로운 것을 찾아 나서기 좋아하는 친칠라입니다.",
    "mbti-name":"'인생 무엇일까! 누워서 생각해 볼게요.'",
    "explain1":"기계의 등가속도운동을 무심히 보게 될 때",
    "explain2":"인적이 드문 숲 속 산장",
    "explain3":"대나무 숲의 바람 소리",
    "friend-tit":"에너자이저<br>'필라맹고'",
    "friend":"images/pilamango.png"
},
    "ESFJ" :{"animal":"차가운 도시인<br>'펭스터'",
    "explain":"펭스터",
    "img":"images/penguin.png",
    "mbti-result":"당신의 본캐는 독창적인 아이디어로 모든 상황을 파악하고 강하게 밀어 붙이는 마이웨이 펭귄, 부개는 사람에게 정 붙이는데 오랜 시간이 걸리는 햄스터입니다.",
    "mbti-name":"'여러분 인간을 믿지 마세요.'",
    "explain1":"지적인 대화가 오갈때",
    "explain2":"다양한 예술작품을 볼 수 있는 공간",
    "explain3":"세차게 내리는 빗소리",
    "friend-tit":"낯가림협회 회원<br>'양질라'",
    "friend":"images/sheep.png"
},
    "ENTJ" : {"animal":"생각많은<br>'너구리'",
    "explain":"너구리",
    "img":"images/racoon.png",
    "mbti-result":"당신의 본캐는 필요하거나 원하는 일을 끝까지 해내며, 은근히 계획적이고 감수성이 풍부한 너구리이예요. 부캐는 생각이 많고 혼자 노는 것이 좋은 라쿤입니다. 이런 나도 괜찮다면 먼저 다가와 주기를 바래...라고 생각하고 있군요.",
    "mbti-name":"'좋은 사람이 되고싶어요'",
    "explain1":"오늘 할 일을 내일의 나에게 맡기기로 결정했을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"낯가림협회 회원<br>'양질라'",
    "friend":"images/sheep.png"
},
    "ENFJ" : {"animal":"친화력 갑<br>'얼룩이'",
    "explain":"얼룩이",
    "img":"images/zbra.png",
    "mbti-result":"당신의 본캐는 누구와도 친구가 도리 수 있으며 모든 일을 즐기는 얼룩말! 걱정 거리가 많지 않고 혼자보다 같이하는 일에 고낫미이 많군요. 부캐는 환경 적응력에 있어 타의 추종을 불허하는 참새입니다.",
    "mbti-name":"'오늘이 마지막인 것처럼 살아요'",
    "explain1":"맛있는 음식을 모두와 나눠 먹을 때",
    "explain2":"24시간 운영되는 파티하우스",
    "explain3":"비내리는 시골 마을의 풀벌레 소리",
    "friend-tit":"우주의 기운<br>'말랑이'",
    "friend":"images/lion.png"
},
    "ESTP" : {"animal":"생각많은<br>'고슴도치'",
    "explain":"고슴도치",
    "img":"images/hedge.png",
    "mbti-result":"당신의 본캐는 필요하거나 원하는 일을 끝까지 해내며, 은근히 계획적이고 감수성이 풍부한 곰이예요. 부캐는 생각이 많고 혼자 노는 것이 좋은 고슴도치입니다. 이런 나도 괜찮다면 먼저 다가와 주기를 바래...라고 생각하고 있군요.",
    "mbti-name":"'좋은 사람이 되고싶어요'","explain1":"오늘 할 일을 내일의 나에게 맡기기로 결정했을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"낯가림협회 회원<br>'양질라'",
    "friend":"images/sheep.png"
},
    "ESFP" : {"animal":"노는거 좋아하는<br>'기린'",
    "explain":"기린",
    "img":"images/giraffee.png",
    "mbti-result":"당신의 본캐는 상상력이 풍부하며 다재다능하고 사람들에게 친절을 베푸는 것을 즐기는 기린군요! 부캐는 호기심 많고 열정적이며 무엇이든 연결하는 것을 좋아하는 코끼리입니다.",
    "mbti-name":"'손에 손 잡고 벽을 넘어서'",
    "explain1":"생각한 대로 행동할 때",
    "explain2":"이국적인 풍경이 펼쳐지는 공간",
    "explain3":"기내 안내 방송",
    "friend-tit":"저세상스타일<br>'필라맹고'",
    "friend":"images/pilamango.png"
},
    "ENTP" : {"animal":"눈치 제빠른<br>'치타씨'",
    "explain":"치타",
    "img":"images/cheta.png",
    "mbti-result":"당신의 본캐는 필요하거나 원하는 일을 끝까지 해내며, 은근히 계획적이고 감수성이 풍부한 치타이예요. 부캐는 생각이 많고 혼자 노는 것이 좋은 고슴도치입니다. 이런 나도 괜찮다면 먼저 다가와 주기를 바래...라고 생각하고 있군요.",
    "mbti-name":"'도대체 왜 왜 왜 그러시죠?'",
    "explain1":"모든 일이 다 끝내져 있을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"우주의 기운<br>'말랑이'",
    "friend":"images/lion.png"
},
    "ENFP" : {"animal":"생각많은<br>'고슴도치'",
    "explain":"고슴도치",
    "img":"images/hedge.png",
    "mbti-result":"당신의 본캐는 필요하거나 원하는 일을 끝까지 해내며, 은근히 계획적이고 감수성이 풍부한 곰이예요. 부캐는 생각이 많고 혼자 노는 것이 좋은 고슴도치입니다. 이런 나도 괜찮다면 먼저 다가와 주기를 바래...라고 생각하고 있군요.",
    "mbti-name":"'좋은 사람이 되고싶어요'","explain1":"오늘 할 일을 내일의 나에게 맡기기로 결정했을 때",
    "explain2":"물이 흐르는 공간 (예: 양재천)",
    "explain3":"여름 밤의 귀뚜라미 소리",
    "friend-tit":"해맑은 느낌<br>'코린이'",
    "friend":"images/elephant.png"
}
}
function start(){
    $(".start").hide();
    $(".question").show();
}
$("#A").click(function(){
  var type= $("#type").val();
  var preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
  next();
});
$("#B").click(function(){
    next();
});
$("#title").click(function(){
    next();
});

function next(){
    if(num==13){
        $(".question").hide();
        $(".result").show();
        $(".main").css("background","#528975");
        $(".main").css("height","100%");
        var mbti = "";
        ($("#EI").val() < 2 )? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2 )? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2 )? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2 )? mbti+="P" : mbti+="J";
        // 삼항연산자
        // alert(mbti);
        $("#img").attr("src",result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#mbti-result").html(result[mbti]["mbti-result"]);
        $("#mbti-name").html(result[mbti]["mbti-name"]);
        $("#explain1").html(result[mbti]["explain1"]);
        $("#explain2").html(result[mbti]["explain2"]);
        $("#explain3").html(result[mbti]["explain3"]);
        $("#friend-tit").html(result[mbti]["friend-tit"]);
        $("#friend").attr("src",result[mbti]["friend"]);
    }else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
    num++;
    }
}