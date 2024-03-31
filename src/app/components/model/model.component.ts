import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextureLoader } from 'three';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  masque: any;
  scene = new Scene();
  camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new WebGLRenderer({ antialias: true });
  controls!: OrbitControls;

  isLoading = true;
  isRotating = true;

  constructor() { }

  ngOnInit(): void {
    const loader = new TextureLoader();
    loader.load('../../../assets/img/bg_model3D.jpg', (texture) => {
      this.scene.background = texture;
    });
  
    this.renderer.setClearColor(0x040113); 
    this.addLights();
    this.loadModel();
  }

  ngAfterViewInit(): void {
    const width = window.innerWidth * 0.6; 
    const height = window.innerHeight * 0.6;
    this.renderer.setSize(width, height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minPolarAngle = 0; // radians
    this.controls.maxPolarAngle = Math.PI; // radians
    this.controls.update();
    this.animate();
  }
  loadModel(): void {
    var loader = new GLTFLoader();
    loader.load( '../../../assets/model3D/MasqueDogon.glb', ( gltf ) => {
      this.masque = gltf.scene;
      this.masque.scale.set(6, 6, 6);
      this.masque.position.y = -90; 
      this.masque.position.x = -90; 
      this.scene.add(this.masque);
  
      this.camera.position.set(0, 100, 450); // move the camera up
      this.camera.lookAt(new Vector3(0, 0, 0));
  
      this.controls.target.copy(this.masque.position);
      this.controls.update();
  
      this.isLoading = false; 
  
      this.zoomIn();
    });
  }
  
  zoomIn(): void {
    if (this.camera.position.z > 0) {
      this.camera.position.z -= 2; 
      requestAnimationFrame(() => this.zoomIn());
    }
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
  
    if (this.masque && this.isRotating) {
      this.masque.rotation.y += 0.01; 
    }
  
    this.renderer.render(this.scene, this.camera);
  }

  addLights(): void {
    const ambientLight = new AmbientLight(0xffffff, 2); 
    this.scene.add(ambientLight);
  }

  @HostListener('window:keydown', ['$event'])
  onDocumentKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.camera.position.y += 1;
        break;
      case 'ArrowDown':
        this.camera.position.y -= 1;
        break;
    }
  }

  toggleRotation(): void {
    this.isRotating = !this.isRotating;
  }

  
}