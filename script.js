document.addEventListener('DOMContentLoaded', function() {
    console.log('LandView page loaded and script is running.');

    // Smooth scrolling for anchor links on the main page
    if (document.querySelector('a[href^="#"]')) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Initialize Pannellum viewer on the detail page
    if (document.getElementById('panorama')) {
        pannellum.viewer('panorama', {
            "fullscreenToggle": true,
            "default": {
                "firstScene": "entrance",
                "author": "LandView",
                "sceneFadeDuration": 1000,
                "autoLoad": true
            },
            "scenes": {
                "entrance": {
                    "title": "Entrada Principal",
                    "hfov": 110,
                    "pitch": -3,
                    "yaw": -10,
                    "type": "equirectangular",
                    "panorama": "https://i.imgur.com/xWgY1oH.jpeg",
                    "hotSpots": [
                        {
                            "pitch": -2.1,
                            "yaw": 132.9,
                            "type": "scene",
                            "text": "Vista Aérea",
                            "sceneId": "aerialView"
                        },
                        {
                            "pitch": -0.8,
                            "yaw": -46.5,
                            "type": "scene",
                            "text": "Vista Interior",
                            "sceneId": "interiorView"
                        }
                    ]
                },
                "aerialView": {
                    "title": "Vista Aérea (Dron)",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "https://i.imgur.com/vLhF2r2.jpeg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -167,
                            "type": "scene",
                            "text": "Volver a la Entrada",
                            "sceneId": "entrance",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                },
                "interiorView": {
                    "title": "Vista Interior",
                    "hfov": 110,
                    "yaw": 5,
                    "type": "equirectangular",
                    "panorama": "https://i.imgur.com/AlJzSCo.jpeg",
                    "hotSpots": [
                        {
                            "pitch": -0.6,
                            "yaw": -167,
                            "type": "scene",
                            "text": "Volver a la Entrada",
                            "sceneId": "entrance",
                            "targetYaw": -23,
                            "targetPitch": 2
                        }
                    ]
                }
            }
        });
    }
});