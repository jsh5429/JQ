/* html head에 cdn으로 값을 가져온 후 
다른 JS에서도 제이쿼리에 접근할 수 있다.*/

//.css()를 이용해서 style값을 바꿀 수 있다.
$("#header").css("color", "blue");
// 값을 여러개 넣고 싶을 떄는 객체형태로 작성한다.
// 속성이름을 적을 때 -있다면 첫글자는 대문자로 작성한다.
// 값안에 변수나 자바스크립트 계산식을 넣고 싶다면 `${}` 이용가능.
$("#header").css({"backgroundColor" : "gray",
    "font-size" : `${3}rem`});

// 버튼을 클릭했을 때, hidden 클래스 추가
$("#btn").on("click", function(){
    // 형제태그를 통해 p태그를 찾고 클래스 추가
    // this통해서 현재 이벤트가 실행된 태그를 가져올 수 있다.
    $(this).prev().addClass("hidden");
    console.log($(this));
});

// 버튼을 클릭했을 때, header가 숨김/보임
$("#btn2").on("click", function(){
    $("#header").toggleClass("hidden");
})

/*
$("#todo").children().first().on("click", function(){
    $("#todo").children().eq(1).toggleClass("done");
})
*/

/* 강사님 코드 */
// todo의 input를 클릭했을때 체크유무에 따라서
// 디자인을 바꿈
$("#todo input[type='checkbox']").on("click", function(e){
    console.log(e.target.checked)

    //this를 통해서 이벤트가 발생한 태그를 가져올 수 있다.
    // 위의 console.log와 동일하게 실행된다.
    // .prop(속성이름) : 속성이름의 속성값을 가져올 수 있다.
    console.log($(this).prop("checked"));
    if(e.target.checked){
        $("#todo").css("color","gray").addClass("checked");
    } else{
        $("#todo").css("color","").removeClass("checked");

    }
})


/*
$("#number-btns td>button").on("click", function(e){
    //console.log(e.target);
    $(this).prop("disabled", "true").css("color", "red");
})
*/

// 자바스크립트를 이용하여 버튼에 이벤트 넣기
const btns = document.querySelectorAll("#number-btns button");
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click", function(e){
        e.target.style.color = "red";
        e.target.disabled = "true";
    }) 
}

// 제이쿼리로 접근한 여러개의 태그는 배열로 처리하지 않아도
// 바로 메소드를 이용해 모두 적용할 수 있다.
console.log($("#number-btns button"));
$("#number-btns button").css({
    "color" : "blue"
})


