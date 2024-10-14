// CodeMirror editörünü başlat
const editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true,
    mode: 'htmlmixed',
    theme: 'default'
});

// Kodu çalıştırma
document.getElementById('run-code').addEventListener('click', () => {
    const code = editor.getValue();
    const outputFrame = document.getElementById('output');
    outputFrame.srcdoc = code;
});