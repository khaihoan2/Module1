let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = +prompt("Nhập vào giá trị bạn cần kiểm tra: ");

function check() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] = num) {
            alert("Số bạn vừa nhập có trong mảng cho trước!");
            break;
        } else {
            alert("Số bạn vừa nhập không có trong mảng cho trước!");
            break;
        }
    }
}

check();