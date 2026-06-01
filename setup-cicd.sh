#!/bin/bash

# CI/CD Setup Script
# This script helps you set up GitHub Actions for npm publishing

echo "🚀 kitvue CI/CD Setup"
echo "=================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    echo "   Run: git init"
    exit 1
fi

# Check if package.json exists
if [ ! -f package.json ]; then
    echo "❌ Error: package.json not found"
    exit 1
fi

echo "✓ Git repository detected"
echo "✓ package.json found"
echo ""

# Display current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"
echo ""

echo "📋 CI/CD Setup Checklist:"
echo "========================"
echo ""
echo "Before publishing, ensure:"
echo "  [ ] GitHub repository is created and linked"
echo "  [ ] npm account created (npmjs.com)"
echo "  [ ] npm token generated (for automation)"
echo "  [ ] GitHub secret NPM_TOKEN added"
echo ""

echo "Next steps:"
echo "==========="
echo ""
echo "1. CREATE npm TOKEN:"
echo "   $ npm token create"
echo "   or visit: https://npmjs.com → Profile → Access Tokens"
echo ""
echo "2. ADD GitHub SECRET:"
echo "   GitHub → Settings → Secrets and variables → Actions"
echo "   New secret: NPM_TOKEN = <your-token>"
echo ""
echo "3. TEST BUILD:"
echo "   $ pnpm install"
echo "   $ pnpm build"
echo "   $ pnpm lint"
echo ""
echo "4. PUBLISH:"
echo "   $ npm version patch  # Updates version and creates tag"
echo "   $ git push origin --tags  # Triggers CI/CD"
echo ""
echo "5. MONITOR:"
echo "   GitHub → Actions → Watch 'Publish to npm' workflow"
echo ""
echo "📚 Documentation:"
echo "   - See: CICD.md (Complete setup guide)"
echo "   - See: .github/workflows/README.md (Workflow details)"
echo "   - See: PUBLISH.md (Publishing guide)"
echo ""
echo "✓ CI/CD is ready!"
