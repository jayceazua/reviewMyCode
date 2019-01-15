// const codeTextArea = document.getElementById('code-snippet')

// window.onload = function() {
//   var myCodeMirror = CodeMirror.fromTextArea(codeTextArea, {
//     // tabSize: 2
//     // lineNumbers: true,
//     // scrollbarStyle: "null"
//     cursorHeight: 0.85
//   });
//
//   changeLang = function() {
//     var codeLanguage = document.getElementById('snippet-language').value
//     loadScript(`/mode/${codeLanguage}/`, `${codeLanguage}.js`)
//     myCodeMirror.setOption("mode", {name: codeLanguage})
//   };
//   changeLang()
//   function loadScript (dir, file) {
//      var scr = document.createElement("script")
//      scr.src = dir + file
//      document.body.appendChild(scr)
//   }
// }
