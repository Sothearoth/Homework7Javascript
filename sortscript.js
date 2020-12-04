function sorting() {
    var k = [];
    var input = document.getElementsByName("array[]");
    var tmp;
    var resultArr = "";
    var arr = []; //[9, 1, 86, -12, 99];

    for (var i = 0; i < input.length; i++) {
        var a = arr[i];
        k = input[i].value;
        arr.push(k);

    }
    console.log(" arr append " + arr);

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < input.length; j++) {
            if (arr[i] > arr[j]) {

                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        resultArr =
            resultArr + arr[i] + " ";

    }

    document.getElementById("par").innerHTML = "The sorting array is :" + " " +
        resultArr;

    // document.getElementById("po").innerHTML = "Output";
    window.alert(resultArr);


}