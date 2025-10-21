import { supabase } from './supabase.js';

// 3Dオブジェクトを追加する関数
document.getElementById('add3DObjectBtn').addEventListener('click', function() {
    const objectList = document.getElementById('gameObjectsList');

    // 3Dオブジェクトの追加（例: 立方体）
    const new3DObject = {
        type: '3D_cube',
        position: { x: 0, y: 0, z: 0 },
        size: 50,
        color: "#FF0000"
    };

    // オブジェクトを表示
    const newObjectItem = document.createElement('li');
    newObjectItem.innerHTML = `3Dオブジェクト: 立方体 (位置: ${new3DObject.position.x}, ${new3DObject.position.y}, ${new3DObject.position.z})`;
    objectList.appendChild(newObjectItem);

    // Supabaseに保存
    saveGame('Sample Game', [new3DObject], 'console.log("game script")');
});

// ゲームを保存する関数
async function saveGame(gameName, gameObjects, script) {
    const { data, error } = await supabase
        .from('games')
        .insert([
            {
                name: gameName,
                objects: JSON.stringify(gameObjects),
                script: script
            }
        ]);
    
    if (error) {
        console.error('エラーが発生しました:', error);
        return;
    }

    console.log('ゲームが保存されました:', data);
}

// プレビューの設定
document.getElementById('previewBtn').addEventListener('click', function() {
    const previewArea = document.getElementById('gamePreview');
    previewArea.innerHTML = ''; // 既存の内容をクリア

    // 3Dシーンを描画するためのThree.js設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);
    previewArea.appendChild(renderer.domElement);

    // 立方体を作成
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // アニメーション
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
});
