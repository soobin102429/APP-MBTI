var num=1;

var q={
    1: {"title":"친구와 큰 오해가 생겨서 다툰 후, 해결하려고 할 때 당신의 선택은?","type":"EI","A":"일단 만나서 얘기하자고 한다.","B":"진심을 담은 카톡으로 대화를 신청한다."},
    2: {"title":"친구가 넷플릭스에서 볼만한 것을 추천해달라고 한다. 당신의 대답은?","type":"EI","A":"어떤 장르, 배우가 좋은지 먼저 물어본다.","B":"내가 최근 본 것들을 바탕으로 추천해준다."},
    3: {"title":"문제 3번","type":"EI","A":"ㄴㅌㅌㅌ","B":"ㅐㅐㅐ"},
    4: {"title":"문제 4번","type":"EI","A":"S","B":"N"},
    5: {"title":"문제 5번","type":"EI","A":"S","B":"N"},
    6: {"title":"문제 6번","type":"EI","A":"S","B":"N"},
    7: {"title":"문제 7번","type":"TF","A":"T","B":"F"},
    8: {"title":"문제 8번","type":"TF","A":"T","B":"F"},
    9: {"title":"문제 9번","type":"TF","A":"T","B":"F"},
    10: {"title":"문제 10번","type":"JP","A":"J","B":"P"},
    11: {"title":"문제 11번","type":"JP","A":"J","B":"P"},
    12: {"title":"문제 12번","type":"JP","A":"J","B":"P"}
}
var result = {
    "ISTJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ISTJ"},
    "ISFJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ISFJ"},
    "INTJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"INTJ"},
    "INFJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"INFJ"},
    "ISTP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ISTP"},
    "ISFP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ISFP"},
    "INTP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"INTP"},
    "INFP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"INFP"},
    "ESTJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ESTJ"},
    "ESFJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ESFJ"},
    "ENTJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ENTJ"},
    "ENFJ" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ENFJ"},
    "ESTP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ESTP"},
    "ESFP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ESFP"},
    "ENTP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ENTP"},
    "ENFP" : {"animal":"못난이은정","explain":"뚱뚱이","img":"images/lion.jpg","mbti-result":"ENFP"}
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
    }else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
    num++;
    }
}