
let  messages = [];
const socket = io.connect();

function objectifyForm(formArray) {//serialize data function

    let returnArray = {};
    for (let i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

function epostaDogrula(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// ebulten yolla



document.querySelector(".ebultenYolla").addEventListener("click",function (a) {

    let form = document.querySelector("#ebultenForm").elements;

    let jsonForm = objectifyForm(form)

    let eposta =  epostaDogrula(jsonForm.eposta)
        if(eposta == false){
            alert("Yanlış eposta Formatı")
        }else{
            $.post("/doc/post/ebulten",jsonForm,function (d) {
                d.status == 0 ?  alert("Eposta Adresi Sisteme Kayıtlı")  :  alert("Eklendi");

            })
        }

})