export class PotreeAccessor {
    private viewer: Potree.Viewer;
    private scene: (Potree.Scene|null) = null;
	private currentIndex = 0;
	private urls = ["./resources/PotreeData/metadata.json",
		"./resources/vol_total/cloud.js",
		"http://localhost:3000/lion_takanawa_normals/cloud.js",
		"http://localhost:3000/vol_total/cloud.js",
		"http://localhost:3000/lion_takanawa_laz/cloud.js",
		"http://localhost:3000/lion_takanawa_las/cloud.js",
		"http://localhost:3000/lion_takanawa/cloud.js"
	];
    public constructor() {
        this.viewer = new Potree.Viewer(document.getElementById("potree_render_area") as HTMLElement);
        this.viewer.setEDLEnabled(false);
		this.viewer.setFOV(60);
		this.viewer.setPointBudget(1_000_000);
		this.viewer.loadSettingsFromURL();
		this.viewer.setBackground("black");
		this.loadPointCloud("http://localhost:3000/lion_takanawa_normals/cloud.js", true);
		setInterval(() => {
			this.currentIndex += 1;
			if(this.currentIndex >= this.urls.length) {
				this.currentIndex = 0;
				if(this.viewer.scene != null) {
					this.viewer.scene = new Potree.Scene(this.viewer.renderer);
				}
			}
			this.loadPointCloud(this.urls[this.currentIndex], false);
		}, 1000);
        
    }	
	private loadPointCloud(cloudURL: string, fitToScreen: boolean) {
		/**/
		Potree.loadPointCloud(cloudURL, "cloud", e => {
			this.scene = this.viewer.scene;
			const pointcloud = e.pointcloud;

			
			const material = pointcloud.material;
			material.size = 1;
			material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
			material.shape = Potree.PointShape.SQUARE;
			
			this.scene.addPointCloud(pointcloud);
			
			if (fitToScreen) {
				this.viewer.fitToScreen();
            
			} else {
				
				this.viewer.zoomTo(pointcloud, 1);
			}
			// scene.view.setView(
			// 	[589974.341, 231698.397, 986.146],
			// 	[589851.587, 231428.213, 715.634],
			// );
		});
	}

}