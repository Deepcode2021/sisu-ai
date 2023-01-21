function copyCodeq() {
    var code = document.getElementById("codepy");
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.getElementById("copyBtnpy").innerHTML = "Copiedpy";
    //alert("Code copied to clipboard!");
  }
  
function copyCode() {
    var code = document.getElementById("codejs");
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.getElementById("copyBtnjs").innerHTML = "Copied";
    //alert("Code copied to clipboard!");
  }
