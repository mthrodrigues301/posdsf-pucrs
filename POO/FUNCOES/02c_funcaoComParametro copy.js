// 02b_funcaoComParametro.js funcoes anonimas

function decision(question, doOk, doCancel) {

    if (question == "OK") doOk();
    else doCancel();
}

let beOk = function showOk() { console.log("You agreed."); }

let beCancel = function showCancel() { console.log("You canceled the execution."); }

decision("OK", beOk, beCancel);
decision("Cancel", beOk, beCancel);