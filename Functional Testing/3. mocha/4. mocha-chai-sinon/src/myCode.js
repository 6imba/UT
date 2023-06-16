function f1(arg) {
    console.log(arg+'--------------------------------------------')
    return `F1:${arg}`;
}
function f2(arg) {
    const a = `F2:${arg}`;
    return f1(a);
}
module.exports = { f1, f2, };
