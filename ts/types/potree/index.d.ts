namespace Potree {
    const PointSizeType = {
        FIXED: 0,
        ATTENUATED: 1,
        ADAPTIVE: 2
    };
    const PointShape = {
        SQUARE: 0,
        CIRCLE: 1,
        PARABOLOID: 2
    };

    class Viewer {
        scene: Scene;
        renderer: THREE.WebGLRenderer;
        orbitControls: OrbitControls;
        constructor(element: HTMLElement);

        setPointBudget(budget: number): void;
        loadPointCloud(path: string, name: string, callback?: (e: PointCloudEventVariable) => void): void;
        setEDLEnabled(enabled: boolean): void;
        setFOV(fov: number): void;
        setBackground(color: string): void;
        fitToScreen(): void;
        loadSettingsFromURL(): void;
        zoomTo(node, factor, animationDuration = 0): void;
    }

    class PointCloudEventVariable {
        pointcloud: PointCloudOctree;
    }
    class PointCloudOctree {
        name: string;
        position: THREE.Vector3;
        scale: THREE.Vector3;
        rotation: THREE.Vector3;
        material: PointCloudMaterial;
        updateMatrixWorld(force: boolean = false): void;
    }
    class Scene {
        constructor(renderer: any);
        addPointCloud(pointcloud: PointCloudOctree): void;
        pointclouds: PointCloudOctree[];
        scene: THREE.Scene;
        scenePointCloud: THREE.Scene;
    }
    class PointCloudMaterial {
        size: number;
        pointSizeType: PointSizeType;
        shape: PointShape;
        materials: THREE.WebGLMaterials;
    }
    class OrbitControls {
        yawDelta: number;
        pitchDelta: number;
    }
    function loadPointCloud(
        path: string,
        name: string,
        callback: (e: PointCloudEventVariable) => void
    ): void;
}