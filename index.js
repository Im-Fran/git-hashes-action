const core = require('@actions/core');
const github = require('@actions/github');

try{
    const commitHash = github.context.sha
    if(core.getInput('long-form') === 'true') {
        core.exportVariable('GIT_COMMIT_LONG_HASH', commitHash);
    }

    if(core.getInput('short-form') === 'true') {
        core.exportVariable('GIT_COMMIT_SHORT_HASH', commitHash.substring(0, 7));
    }
}catch (error) {
    core.setFailed(error.message);
}