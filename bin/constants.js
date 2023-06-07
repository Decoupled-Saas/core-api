const SupportedPipelineTools = {
  GITHUB: 'github',
};

const PipelinePathMapper = {
  [SupportedPipelineTools.GITHUB]: '.github/workflows',
};

const PipelineConfigMapper = {
  [SupportedPipelineTools.GITHUB]: `${
    PipelinePathMapper[SupportedPipelineTools.GITHUB]
  }/nodejs.yml`
};

const GIT_REPO =
  'https://github.com/decoupled-saas/core-api.git';

module.exports = {
  SupportedPipelineTools,
  GIT_REPO,
  PipelinePathMapper,
  PipelineConfigMapper,
};
