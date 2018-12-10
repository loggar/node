module.exports = {
	dirProjectRoot: function (env_mode) {
		return env_mode !== 'production' ?
			"/dir_project_root_dev/job-schedulers/" :
			"/dir_project_root_production/job_schedulers/";
	},
	dirLog: function () {
		return "_log/";
	}
}