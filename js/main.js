/**
 * Khối 1 :
 * Bảng  Giá Cước
 * loaiXe , soKM , tgCho
 * 
 * Khối 2:
 * B1 :Tạo biến cho bảng giá cước
 * B2 :Lấy giá trị từ form
 * B3 :Kiểm tra loại xe
 * B4 :Lấy số KM
 * B5 :Tính tiền theo số KM
 *     0 < soKM <=1 :soKM * KM_Dau_CAR
 *     1 < soKM <=19:KM_Dau_CAR * 1 + (soKM - 1) * KM_1_19_CAR
 * 
 * Khối 3 :
 * thanhTien
 */

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
    //lấy giá trị từ form

    var radioCar = document.getElementById("grabCar")
    var radioSUV = document.getElementById("grabSUV")
    var radioBlack = document.getElementById("grabBlack")

    //KIỂM TRA LOẠI XE
    var loaiXe = ("");
    if (radioCar.checked){
        loaiXe = "grabCar"
    }
    else if(radioSUV.checked){
        //grapSUV dược chọn
        loaiXe = "grabSUV"
    }
    else if(radioBlack.checked){
         //grapBlack dược chọn
         loaiXe = "grabBlack"
    }
    else{
        alert("Loại Xe Chưa Chọn")
    }
    console.log(loaiXe);

    
    var soKM = document.getElementById("inputKM").value
    var thanhTien = 0
    var tgCho = document.getElementById("inputTG").value
    var lanPhat = Math.floor(tgCho / 3)
    var tienPhat = 0

    //TINH TIỀN KM
    switch (loaiXe) {
        case "grabCar":
            //Tính tiền theo KM của CAR
            if (0 < soKM && soKM <=1){
                console.log("CHan1")
                thanhTien = soKM * KM_Dau_CAR
               
            }
            else if (1 < soKM && soKM <=19){
                console.log("chan2")
                thanhTien = KM_Dau_CAR * 1 + (soKM - 1) * KM_1_19_CAR
            }
            else if (19 < soKM){
                console.log("chan3")
               thanhTien = KM_Dau_CAR + (18 * KM_Tren19_CAR) + (soKM - 19) * (KM_Tren19_CAR)
            }
            else{
                console.log("So Km ko hop le")
            }
            if (lanPhat >= 1){
                console.log("lanPhat1")
                tienPhat = lanPhat * TIME_CAR
            }
           thanhTien = thanhTien + tienPhat
            break;
        case "grabSUV":
            //Tính tiền theo KM của SUV
            if (0 < soKM && soKM <=1){
                console.log("CHan1")
                thanhTien = soKM * KM_Dau_SUV
               
            }
            else if (1 < soKM && soKM <=19){
                console.log("chan2")
                thanhTien = KM_Dau_SUV * 1 + (soKM - 1) * KM_1_19_SUV
            }
            else if (19 < soKM){
                console.log("chan3")
               thanhTien = KM_Dau_SUV + (18 * KM_Tren19_SUV) + (soKM - 19) * (KM_Tren19_SUV)
            }
            else{
                console.log("So Km ko hop le")
            }
            if (lanPhat >= 1){
                console.log("lanPhat1")
                tienPhat = lanPhat * TIME_SUV
            }
           thanhTien = thanhTien + tienPhat
            break;
            case "grabBlack":
                //Tính tiền theo KM của SUV
                if (0 < soKM && soKM <=1){
                    console.log("CHan1")
                    thanhTien = soKM * KM_Dau_BLACK
                   
                }
                else if (1 < soKM && soKM <=19){
                    console.log("chan2")
                    thanhTien = KM_Dau_BLACK * 1 + (soKM - 1) * KM_1_19_BLACK
                }
                else if (19 < soKM){
                    console.log("chan3")
                   thanhTien = KM_Dau_BLACK + (18 * KM_Tren19_BLACK) + (soKM - 19) * (KM_Tren19_BLACK)
                }
                else{
                    console.log("So Km ko hop le")
                }
                if (lanPhat >= 1){
                    console.log("lanPhat1")
                    tienPhat = lanPhat * TIME_BLACK
                }
               thanhTien = thanhTien + tienPhat
                break;
        default:
            
            break;
    }
   
    if(lanPhat >=1){

    }
    console.log(thanhTien )

    document.getElementById("txtthanhTien").innerHTML= "Thành Tiền : " +thanhTien +" đ "
    document.getElementById("txtthanhTien").style.color = "black"
    document.getElementById("txtthanhTien").style.padding = "20px"
    document.getElementById("txtthanhTien").style.fontSize = "20px"



}

