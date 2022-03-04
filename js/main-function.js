//Global
 const KM_Dau_CAR = 8000
 const KM_1_19_CAR = 7500
 const KM_Tren19_CAR = 7000
 const TIME_CAR = 2000
 
 const KM_Dau_SUV= 9000
 const KM_1_19_SUV = 8500
 const KM_Tren19_SUV = 8000
 const TIME_SUV = 3000
 
 const KM_Dau_BLACK= 10000
 const KM_1_19_BLACK = 9500
 const KM_Tren19_BLACK = 9000
 const TIME_BLACK = 3500

 function tinhTienGrap(){
    var radioCar = document.getElementById("grabCar")
    var radioSUV = document.getElementById("grabSUV")
    var radioBlack = document.getElementById("grabBlack")

    var loaiXe = ("");
    loaiXe = kiemTraLoaiXe(radioCar,radioSUV,radioBlack)
    console.log(loaiXe)

    var soKM = document.getElementById("inputKM").value
    var thanhTien = 0
    var tgCho = document.getElementById("inputTG").value
    var lanPhat = Math.floor(tgCho / 3)
    var tienPhat = 0
    switch (loaiXe) {
        case "grabCar":
            
            thanhTien = tinhTheoKM(soKM,KM_Dau_CAR,KM_1_19_CAR,KM_Tren19_CAR) + tinhTienPhat(lanPhat,TIME_CAR)
            
           

            break;
        case "grabSUV":
            
            thanhTien = tinhTheoKM(soKM,KM_Dau_SUV,KM_1_19_SUV,KM_Tren19_SUV) + tinhTienPhat(lanPhat,TIME_SUV)
            
            break;
        case "grabBlack":
            
            thanhTien = tinhTheoKM(soKM,KM_1_19_BLACK,KM_1_19_BLACK,KM_Tren19_BLACK) + tinhTienPhat(lanPhat,TIME_BLACK)
            
            
            break;
    
        default:
            console.log("Loại Xe Chưa Có");
            
            break;
    }
    document.getElementById("txtthanhTien").innerHTML= "Thành Tiền : " +thanhTien +" đ "
    document.getElementById("txtthanhTien").style.color = "black"
    document.getElementById("txtthanhTien").style.padding = "20px"
    document.getElementById("txtthanhTien").style.fontSize = "20px"

   

 }

 function kiemTraLoaiXe(radio1,radio2,radio3){
    var loaiXe = ("");
    if (radio1.checked){
        loaiXe = "grabCar"
    }
    else if(radio2.checked){
        //grapSUV dược chọn
        loaiXe = "grabSUV"
    }
    else if(radio3.checked){
         //grapBlack dược chọn
         loaiXe = "grabBlack"
    }
    else{
        alert("Loại Xe Chưa Chọn")
    }
    return loaiXe;

    
   

}

function tinhTheoKM(soKM,KM_Dau,KM_1_19,KM_Tren19){
    var thanhTien = 0
    if (0 < soKM && soKM <=1){
        
        thanhTien = soKM * KM_Dau
       
    }
    else if (1 < soKM && soKM <=19){
       
        thanhTien = KM_Dau * 1 + (soKM - 1) * KM_1_19
    }
    else if (19 < soKM){
            
       thanhTien = KM_Dau + (18 * KM_Tren19) + (soKM - 19) * (KM_Tren19)
    }
    else{
        console.log("So Km ko hop le")
    }
    return thanhTien;
}

function tinhTienPhat(lanPhat,TIME){
    var tienPhat = 0
    if(lanPhat >=1){
        tienPhat = lanPhat * TIME
    }
    return tienPhat
}