function numberSum(N) {
    var total = 0;
    for (var i = 1; i <= N; i++) {

        total += i;

    }
    return total;
}

function run() {
    val = document.getElementById("val").value;

    document.getElementById("results").innerHTML = "Sum of" + " " +
        val + " = " + numberSum(val)

}