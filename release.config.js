module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/BellyBista/eks-iam-roles.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }