var num=1;

var q={
    1: {"title":"문제 1번","type":"EI","A":"ㅁㅁㅁㅁㅁ","B":"ㅇㅇㅇㅇ"},
    2: {"title":"문제 2번","type":"EI","A":"ㅁㅁㅁㅁ","B":"ㅐㅐ"},
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