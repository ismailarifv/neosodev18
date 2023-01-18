let form = document.getElementById('formSubmit').addEventListener('click', function(event){
    //Varsayılan değerleri görmezden gel
    
    event.preventDefault();
    return kontrolEt()
});
function parolagoster(){
    let checkBox = document.getElementById("numbers");
    let x =document.getElementById("sifre")
    let y = document.getElementById("sifre-2")
    if(checkBox.checked == true){
    
        if(x.type  ==="password"){
            x.type = "text"
        }
        if(y.type ==="password"){
            y.type="text"
        }

    } 
        else{
            x.type = "password"
            y.type ="password"
        } 
}
function checkPrivate(private) {
    return ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",",".","?"].includes(private)
  }
function checkNumber(numbers) {
    return ["1","2","3","4","5","6","7","8","9","0"].includes(numbers)
}  
function kontrolEt(){
  let hataKodu = document.getElementById('err')
    let adInput = document.getElementById('ad')
   let sifre = document.getElementById('sifre')
   let sifre_tekrar = document.getElementById('sifre-2')
   let hataMesaji = "";
   let arrayOlarak = adInput.value.split("");
 
    if(adInput.value && sifre.value && sifre_tekrar.value){
        hataMesaji=" "
      
        //şifreleri kontrol et
        if(sifre.value != sifre_tekrar.value){
            hataMesaji = "*Şifreler ayni olmak zorunda \n"
           
        }
        if(sifre.value.length < 8){
            hataMesaji+="*Şifre en az 8 karakter içermelidir \n"
        }
        if(arrayOlarak.filter(checkPrivate).length>0){
            hataMesaji += "*kullanıcı adı özel karakter içeremez \n"
        }
        if(["1","2","3","4","5","6","7","8","9","0"].includes(arrayOlarak[0])){
            
                hataMesaji += "*kullanıcı adının başında sayı kullanılamaz \n"
         
        }
        

    }
    else{
        

        if(!adInput.value.length) hataMesaji += "Kullanıcı adı boş bırakılamaz\n "
        if(!sifre.value.length) hataMesaji += "Şifre boş bırakılamaz \n"
        if(!sifre_tekrar.value.length) hataMesaji += "Şifre Tekrar boş bırakılamaz"

        hataKodu.classList.add("kirmizi")
        
    }
    if(hataMesaji.length)
    {
        hataKodu.classList.add('kirmizi');
        return hataKodu.innerText = hataMesaji;
    }
}
//Ödev: Şifrelerin uzunluğu minumum 8 karakter olacak şekilde ayarla kullanıcıadı özel karakter içermesin başında sayı olmasın passwordu buttonla görünür yapabil.





