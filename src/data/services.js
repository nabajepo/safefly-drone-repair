import repairDroneImg from "../assets/repair_drone.jpg";
import batteryImg from "../assets/battery.jpg";
import repairCameraImg from "../assets/repair_camera.jpg";
import inspectionImg from "../assets/inspection.jpg";

const services = [
  {
    id: 1,
    title: "Drone Repair",
    description: "Professional diagnostics and repair for damaged drones.",
    image: repairDroneImg,
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Battery testing, replacement and performance verification.",
    image: batteryImg,
  },
  {
    id: 3,
    title: "Camera Repair",
    description: "Camera and gimbal repair for stable aerial footage.",
    image: repairCameraImg,
  },
  {
    id: 4,
    title: "Flight Inspection",
    description: "Complete safety inspection before your next flight.",
    image: inspectionImg,
  },
];

export default services;