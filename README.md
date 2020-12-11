# LaborAntdDesign

## AntiDesign이란?
Ant Design에서 운영하고 있는 웹사이트로 Input이나 Layout등 여러가지 html태그들을 CSS를 작업 해놓은 디자인이다.

## React에서 사용하는 방법은 
```
--------npm i antd 
import {사용할 태그 이름} from 'antd'
import 'antd/dist/antd.css';
```

이코드를 사용하여 컴포넌트에 적용시킨다.

이런 웹사이트를 이용해서 노무사 문의 신청 페이지를 꾸며 보았다.
<div>
<img src="./gitimages/main.png">
</div>
노무사소개에 노무사를 클릭하게되면 디테일 화면이 나오게 된다.
<div>
<img src="./gitimages/detail.png">
</div>
버튼을 누르게 되면 문의를 넣을수있는 페이지로 넘어갈수 있게 해준다.

<div>
<img src="./gitimages/content.png">
</div>
 입력할수 있도록 하는 입력창이 나오고
 
* 필수입력을 하지 안게 되면 경고 창이 뜨게 된다.
 <div>
 <img src="./gitimages/important.png">
</div>

 필수입력을 다할경우 데이터 가 보내지면서 JANDI메신저앱의 연동되어있는 WebHook과 Email전송을 하게 해준다.
<div>
 <img src="./gitimages/senddata.png">
</div>
 보내지는 데이터 코드로는 

 ```javascript
 var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://wh.jandi.com/connect-api/webhook/18007791/2ee1e9fdb8febe410ab4734d7d46d211', false);

            //Send the proper header information along with the request
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/vnd.tosslab.jandi-v2+json");

            xhr.onreadystatechange = function () { // Call a function when the state changes.
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    // Request finished. Do processing here.
                }
            }

            var payload = {
                "body": "[[노무사 문의]](http://url_to_text) 노무사 신청이 들어왔습니다.",
                "connectColor": "#FAC11B",
                "connectInfo": [{
                    "title": "이름",
                    "description": formdata.enquiryName
                },
                {
                    "title": "전화번호",
                    "description": formdata.number

                }, {
                    "title": "의뢰한 노무사님",
                    "description": formdata.lawer
                }, {
                    "title": "용건",
                    "description": formdata.play
                },
                {
                    "title": "시간",
                    "description": formdata.time
                }]
            }
            console.log(JSON.stringify(payload))
 ```

 이메일 전송 코드는
 ```javascript
 let content =
            {
                from_name: formdata.enquiryName,
                lawer: formdata.lawer,
                play: formdata.play,
                email: formdata.email
            }
            let content2 =
            {
                from_name: formdata.enquiryName,
                lawer: formdata.lawer,
                play: formdata.play,
            }

            emailjs.init("user_nORNSxbA9Ew8k6aTRsN9U");
            emailjs.send("andy@jober.io", "template_gi6fgh1", content)
            emailjs.send("andy@jober.io", "template_xoixqdj", content2)
                .then(function (response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function (err) {
                    console.log("FAILED. error=", err);
                })
 ```

 이런 식이며 메일과 웹훅에 데이터가 담겨져 전송 되면 이런 화면이 송출된다
>## 문의 신청한 사람 메일 화면
 <div>
 <img src="./gitimages/sendgetmail
 .png">
</div>

## 문의 받는 사람 메일 화면
 <div>
 <img src="./gitimages/getmail.png">
</div>

## WebHook으로 온 화면
<div> 
<img src="./gitimages/webhook.png"></div>