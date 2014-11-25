    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
    
    var container;
    var camera, scene, renderer;
    var mouseX = 0, mouseY = 0;
    
    var windowHalfX = window.innerWidth * 0.75;
    var windowHalfY = window.innerHeight * 0.75;
    var current = {object:null, texture:null};

    var selectedColor = "#ffffff";
    var ambientColor = ColorLuminance(selectedColor, -0.2);

    
    var modelArray = ["assets/js/three/chair.obj", "assets/js/three/table.obj", "assets/js/three/bookshelf.obj"];
    var modelIndex = 0;
    var textureArray = [
      ["assets/js/three/Wood_chair.jpg", "assets/js/three/metalsurface_woodframe.jpg", "assets/js/three/glasssurface_woodframe.jpg"],//row represents frame materials, column is surface
      ["assets/js/three/glasssurface_metalframe.jpg", "assets/js/three/metalsurface_woodframe.jpg", "assets/js/three/glasssurface_woodframe.jpg"],
      ["assets/js/three/glasssurface_metalframe.jpg", "assets/js/three/metalsurface_woodframe.jpg", "assets/js/three/glasssurface_woodframe.jpg"]
    ];
    var frameIndex = 0;
    var surfaceIndex = 0;

    
    init();
    animate();
    
    function init() {
      // Creates <div> that will host the canvas for our scene and inserts it into the existing div with id of "three" 
      container = document.createElement( 'div' );
      threediv = document.getElementById("three");
      threediv.insertBefore( container );

      // CAMERA
      camera = new THREE.PerspectiveCamera( 8, windowHalfX / windowHalfY, 1, 2000 );
      camera.position.z = 100;
      camera.position.x = -180;
      camera.position.y = 100;
    
      // CONTROLS
      controls = new THREE.OrbitControls( camera, threediv ); //can't be container, needs to be parent of container or the controls go screwy
      controls.autoRotate = true;
      controls.minDistance = 50;
      controls.maxDistance = 500;
      controls.addEventListener( 'change', render );

      // SCENE
      scene = new THREE.Scene();
    
      // LIGHT
      var ambient = new THREE.AmbientLight( 0x939393 );
      scene.add( ambient );
      
      var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add( directionalLight );

spotLight = new THREE.SpotLight (0xFCF6EB, 0.5);
        spotLight.position.set(-10, 30, 20); //RH x(forward/back) y(up/down) z(left/right)
        spotLight.target.position.set(-2, 0, -2);
        scene.add(spotLight);

        spotLight.castShadow = true;


        spotLight.shadowCameraNear = 10;
        spotLight.shadowCameraFar = 100;
        spotLight.shadowCameraFov = 45;

        spotLight.shadowDarkness = 0.5;

        spotLight.shadowMapWidth = 2048;//lower makes more jagged
        spotLight.shadowMapHeight = 2048;




          var terrainGeo = new THREE.PlaneGeometry(100, 100);
    var terrainMaterial = new THREE.MeshLambertMaterial({ color: 0xFCF6EB, opacity: 0.5, transparent: true });
    var terrain = new THREE.Mesh(terrainGeo, terrainMaterial);
    terrain.rotation.x = -Math.PI / 2;
        terrain.position.y = -10;
    terrain.receiveShadow = true;
    scene.add(terrain);


    
      // TEXTURE
      var manager = new THREE.LoadingManager();
      manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
      };
      current.texture = new THREE.Texture();
      var loader = new THREE.ImageLoader( manager );
    
      // You can set the texture properties in this function. 
      loader.load( textureArray[frameIndex][surfaceIndex], function ( image ) {
        current.texture.image = image;
        current.texture.needsUpdate = true;
      } );
    
      // OBJECT
      var loader = new THREE.OBJLoader( manager );

    
      // As soon as the OBJ has been loaded this function looks for a mesh inside the data and applies the texture to it.
      loader.load( modelArray[modelIndex], function ( event ) {
        current.object = event;
        current.object.traverse( function ( child ) {
          if ( child instanceof THREE.Mesh ) {
            child.material.map = current.texture; //this is the proper texture
            //child.material = new THREE.MeshLambertMaterial({color: selectedColor, ambient: ambientColor});
            child.position.y = -10; //positions the model in the center of the canvas
            child.castShadow = true; //RH
          }
        } );
        scene.add( current.object );
      });
    
      // RENDERER
      // We set the renderer to the size of the window and append a canvas to our HTML page.
      renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
      renderer.setClearColor(0x000000, 0);
      renderer.setSize( windowHalfX, windowHalfY );
      renderer.shadowMapEnabled = true;
      renderer.shadowMapType = THREE.PCFSoftShadowMap;
      container.appendChild( renderer.domElement );
      window.addEventListener( 'resize', onWindowResize, false );
    }
    

    function animate() {
      // This function calls itself on every frame. You can for example change
      // the objects rotation on every call to create a turntable animation.
      requestAnimationFrame( animate );
    
      // On every frame we need to calculate the new camera position
      // and have it look exactly at the center of our scene.
      controls.update();
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }


    function render() {
      renderer.render( scene, camera );
    }


    function onWindowResize() {
      camera.aspect = windowHalfX / windowHalfY;
      camera.updateProjectionMatrix();
    
      renderer.setSize( window.innerWidth, window.innerHeight );
    
      render();
    }


    function ColorLuminance(hex, lum) {
      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '');
      if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      }
      lum = lum || 0;
      // convert to decimal and change luminosity
      var rgb = "#", c, i;
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
      }
      return rgb;
      //alert(rgb);
    }


    function refreshObject() {
      scene.remove( current.object );
        
      // TEXTURE
      var manager = new THREE.LoadingManager();
      manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
      };
      current.texture = new THREE.Texture();
      var loader = new THREE.ImageLoader( manager );
      // You can set the texture properties in this function. 
      loader.load( textureArray[frameIndex][surfaceIndex], function ( image ) {
        current.texture.image = image;
        current.texture.needsUpdate = true;
      } );
      
      // OBJECT
      var loader = new THREE.OBJLoader( manager );
      // As soon as the OBJ has been loaded this function looks for a mesh inside the data and applies the texture to it.
      loader.load( modelArray[modelIndex], function ( event ) {
        current.object = event;
        current.object.traverse( function ( child ) {
          if ( child instanceof THREE.Mesh ) {
            child.material.map = current.texture;
            child.position.y = -10; //positions the model in the center of the canvas
          }
        } );
        scene.add( current.object );
      });
    }


    /*CHANGING OBJECT BASED ON INPUTS*/

    var $typeOption = $("input:radio[name=type]"),
        $frameOption = $('select.frame-material'),
        $surfaceOption = $('select.surface-material');

    $('input[type=radio], select').change(function(){
        modelIndex = $typeOption.index($typeOption.filter(':checked')); 
        frameIndex = $frameOption.prop("selectedIndex");
        surfaceIndex = $surfaceOption.prop("selectedIndex");   
        refreshObject();
    });

    $('#remove').click(function(){
        modelIndex = $typeOption.index($typeOption.filter(':checked')); 
        frameIndex = $frameOption.prop("selectedIndex");
        surfaceIndex = $surfaceOption.prop("selectedIndex");
        refreshObject();
    });

    //SWITCHING COLOR DEPENDING ON COLOR PICKER

    $(".picker").change(function() {
      var selectedColor = $(".picker").val();
      var ambientColor = ColorLuminance(selectedColor, -0.2);

        scene.remove( current.object );

        // TEXTURE
        var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
          console.log( item, loaded, total );
        };
        current.texture = new THREE.Texture();
        var loader = new THREE.ImageLoader( manager );
        // You can set the texture properties in this function. 
        loader.load( textureArray[frameIndex][surfaceIndex], function ( image ) {
          current.texture.image = image;
          current.texture.needsUpdate = true;
        } );
        
        // OBJECT
        var loader = new THREE.OBJLoader( manager );
        // As soon as the OBJ has been loaded this function looks for a mesh inside the data and applies the texture to it.
        loader.load( modelArray[modelIndex], function ( event ) {
          current.object = event;
          current.object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
            //child.material.map = current.texture; //this is the proper texture
            child.material = new THREE.MeshLambertMaterial({color: selectedColor, ambient: ambientColor});
            child.position.y = -10; //positions the model in the center of the canvas
          }
          } );
          scene.add( current.object );
        });

    });/*end color picker change*/



    
    