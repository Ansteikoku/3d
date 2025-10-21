document.getElementById('previewBtn').addEventListener('click', function() {
    // プレビューエリアを表示
    const previewArea = document.getElementById('previewArea');
    const gamePreview = document.getElementById('gamePreview');

    // プレビューエリアを表示
    previewArea.style.display = 'block';

    // プレビュー用のURL（実際のゲームの内容に合わせて変更）
    gamePreview.src = "gamePreview.html"; // ここを動的に変更することも可能

    // ユーザーのスクリプトを取得
    const scriptInput = document.getElementById('scriptInput').value;
    console.log("ユーザーのスクリプト:", scriptInput);
});

// オブジェクト追加ボタンの動作
document.getElementById('addObjectBtn').addEventListener('click', function() {
    const objectList = document.getElementById('gameObjectsList');
    const newObject = document.createElement('li');
    newObject.innerHTML = '<span>オブジェクト:</span> ボール';
    objectList.appendChild(newObject);
});
