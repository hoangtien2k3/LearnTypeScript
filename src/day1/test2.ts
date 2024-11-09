// `var` có phạm vi toàn cục hoặc hàm
function demoVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Kết quả: 10

    var a = 10;
    var a = 20; // Không lỗi
    console.log(a); // Kết quả: 20
}
demoVar();


//Khai báo bị "hoisted" (Kéo lên đầu hàm):
function demoHoist() {
    console.log(a); // Kết quả: undefined (khai báo bị kéo lên nhưng chưa gán giá trị)
    var a = 10;
}
demoHoist();
