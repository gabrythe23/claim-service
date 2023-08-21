#!/usr/bin/env bash
echo "Versioning $2"
cd "apps/$2" || exit

if [ "$1" != "major" ] && [ "$1" != "minor" ] && [ "$1" != "patch" ];
then
    echo "Could not release!"
    echo "Usage: 'npm run release -- (major|minor|patch)'"
    echo ""
    exit 1
fi

NEW_VERSION=$(npm version $1)
MESSAGE="Bump version $NEW_VERSION for $2"

cd ../..
git add apps/"$2"/package.json
git commit -m "$MESSAGE"
git tag "$2"-"$NEW_VERSION"
echo "$MESSAGE"

git push && git push --tags