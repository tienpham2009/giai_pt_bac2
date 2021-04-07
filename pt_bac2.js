function giaiPt() {
    let a = +document.getElementById("nhapa").value;
    let b = +document.getElementById("nhapb").value;
    let c = +document.getElementById("nhapc").value;
    let x = -c/b;
    let td = b*b - 4 * a * c;
    let dt = Math.sqrt(b * b - 4 * a * c);
    let x1 = (-b + dt) / (2 * a);
    let x2 = (-b - dt) / (2 * a);
    let x3 = -b / (2 * a);
    if (a === 0) {
        if (b === 0) {
            document.getElementById("Result").innerHTML = "phuong trinh vo nghiem";
        } else if (c === 0) {
            document.getElementById("Result").innerHTML = "phuong trinh vo so nghiem";
        } else {
            document.getElementById("Result").innerHTML = "phuong trinh co 1 nghiem :" + x;
        }
    } else if (td < 0) {
        document.getElementById("Result").innerHTML = "phuong trinh vo nghiem";
    } else if (td === 0) {
        document.getElementById("Result").innerHTML = "phuong trinh co nghiem kep x1= x2= " + x3;
    } else if (td > 0) {
        document.getElementById("Result").innerHTML = "phuong trinh co 2 nghiem phan biet x1= " + x1 + ",x2= " + x2;
    }
}