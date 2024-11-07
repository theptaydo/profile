// Khởi tạo VR tour với Pannellum
const viewer = pannellum.viewer('panorama', {
  type: "equirectangular",
  panorama: "./kho-phoi.jpg",  // Đường dẫn tới ảnh 360°
  autoLoad: true,
  showZoomCtrl: true,
  pitch: 10,
  yaw: 180,
  hfov: 110,
  compass: true,
  hotSpots: [
    {
      // Ví dụ về một điểm hotspot để di chuyển
      pitch: 5,
      yaw: 150,
      type: "scene",
      text: "Go to next scene",
      sceneId: "scene2"
    }
  ]
});

// Tạo một cảnh khác (scene) để VR tour di chuyển đến
viewer.addScene("scene2", {
  type: "equirectangular",
  panorama: "./kho-phoi.jpg",
  pitch: 10,
  yaw: 180,
  hfov: 110,
  hotSpots: [
    {
      pitch: 0,
      yaw: -50,
      type: "scene",
      text: "Back to previous scene",
      sceneId: "scene1"
    }
  ]
});
