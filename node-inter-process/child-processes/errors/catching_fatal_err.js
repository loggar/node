// https://davidwalsh.name/catching-fatal-errors-nodejs-childprocess

/*
I'm relatively new to hardcore Node.js hacking so I'm seeing all sorts of lovely new errors that I have no clue how to solve when I initially see them.
To this point I've managed to keep a smile on my face while trying to fix these errors, a quality I quite enjoy about myself.
One of the recent errors I encountered was with child_process, whereby an error would occur within an execSync command and the entire app would brick; not even  a try/catch would save me.
I did find a solution, however.

The best way to catch errors without letting your app brick is by using the process' spawn (or in this case spawnSync) method:
*/

var childProcess = require('child_process');

var commitMessage = (function () {
	var spawn = childProcess.spawnSync('git', ['log', '--format=%B', '-n', '1']);
	var errorText = spawn.stderr.toString().trim();

	if (errorText) {
		console.log('Fatal error from `git log`.  You must have one commit before deploying.');
		throw new Error(errorText);
	}
	else {
		return spawn.stdout.toString().trim();
	}
})();

/*
With this method you can check the stderr buffer first; if there's a String from it you know it errored out, if no error text then the process was clean!
*/