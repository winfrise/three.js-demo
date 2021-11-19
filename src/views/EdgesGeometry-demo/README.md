# 边缘几何体（EdgesGeometry）

可以作为一个辅助对象来查看Geometry的边缘。

### 示例

```js
    var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    scene.add( line );
```