module.exports = {
	apps: [
		{
			name: "track-attend-record",
			script: "./job-schedulers/src-jobs/track-attend-record/track-attend-record.scheduler.js",
			watch: false,
			env: {
				"PORT": 29110,
				"NODE_ENV": "development"
			},
			env_production: {
				"PORT": 29110,
				"NODE_ENV": "production",
			}
		},
		{
			name: "validate-del-flag",
			script: "./job-schedulers/src-jobs/validate-del-flag/validate-del-flag.scheduler.js",
			watch: false,
			env: {
				"PORT": 29120,
				"NODE_ENV": "development"
			},
			env_production: {
				"PORT": 29120,
				"NODE_ENV": "production",
			}
		}
	]
}