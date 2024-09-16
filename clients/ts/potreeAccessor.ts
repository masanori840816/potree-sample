export class PotreeAccessor {
    public constructor() {
        const viewer = new Potree.Viewer(document.getElementById("potree_render_area") as HTMLElement);
        viewer.setEDLEnabled(false);
		viewer.setFOV(60);
		viewer.setPointBudget(1_000_000);
		viewer.loadSettingsFromURL();
		viewer.setBackground("skybox");
        Potree.loadPointCloud("./resources/vol_total/cloud.js", "KakegawaCastle", e => {
			let scene = viewer.scene;
			let pointcloud = e.pointcloud;
			
			let material = pointcloud.material;
			material.size = 1;
			material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
			material.shape = Potree.PointShape.CIRCLE;
			
			scene.addPointCloud(pointcloud);
			
			viewer.fitToScreen();
			// scene.view.setView(
			// 	[589974.341, 231698.397, 986.146],
			// 	[589851.587, 231428.213, 715.634],
			// );
		});
    }

}