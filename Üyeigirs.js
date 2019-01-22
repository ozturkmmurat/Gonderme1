function login(params){
    if(document.getElementById('exampleInputEmail1').value == "admin"){
        alert("Başarılı Giriş Yaptınız Anasayfaya Yönlendiriliyorsunuz");
         window.location.href = "Proje.html";
         
     }
   
}
function tikla(){
    document.getElementById("kutu").innerHTML = "Katılmaktan Vazgeç"; 
   
}
function sehirlerigoster1() {
    var hhtpistegi = new XMLHttpRequest();
    var adres = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-bolge.json";

    hhtpistegi.onreadystatechange = function () {
        this.readyState == 4 && this.status == 200 
            var myArr = JSON.parse(this.responseText);
            var ulkeSlc = document.getElementById('ulkeler');
            
            myArr.forEach(myArr => {
                ulkeSlc.innerHTML += '<option> ' + myArr.il + ' <option>'
            });
        
    };
    hhtpistegi.open("GET", adres, true);
    hhtpistegi.send();

}
function yenikısım (){
    var metin =document.getElementById("textarea").value;
    var yenielement = document.createElement("p");
    var icerik =document.createTextNode(metin);
    yenielement.appendChild(icerik);
    var anakısım = document.getElementById("anakısım");
    anakısım.appendChild(yenielement);
 
}

function sil (){
    var elementler =document.getElementsByTagName("p");
    if (elementler.length !=0) {
        var element =elementler[elementler.length-1];
        var ana =element.parentNode;
        ana.removeChild(element);
    }
}    