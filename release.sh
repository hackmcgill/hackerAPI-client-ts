#!/usr/bin/env bash
set -e
# Variables

echo "Welcome to HackMcGill's HackerAPI-client Deployment Script!"
echo "==================================================="

if [ ! ${BRANCH} = "master" ]; then
    echo "Current branch: ${BRANCH}"
    echo "ERROR: Release operation is only available on master branch."
    echo "Deployment failed. Exiting."
    exit 1
fi
echo "Release modes:"
PS3='Please select one of the above release version modes:'
options=("Patch" "Minor" "Major" "Quit")
select opt in "${options[@]}"
do
    case ${opt} in
	"Patch")
	    MODE=patch
	    break
	    ;;
	"Minor")
	    MODE=minor
	    break
	    ;;
	"Major")
	    MODE=major
	    break
	    ;;
	"Quit")
	    echo "Deployment cancelled. Exiting."
	    exit 1
	    ;;
	*) echo "Invalid option";;
    esac
done

# Update current branch
git pull origin master

# Compile the code
echo "=============="
echo "Compiling Code"
echo "=============="
tsc

echo ""
echo "Code compiled!"
echo ""

echo "=============="
echo "Update Version"
echo "=============="
npm version ${MODE}
version=$(npm run version --silent)

echo "=============="
echo "Tagging Github"
echo "=============="
# Tag Github
git tag -a "${version}" -m "version ${version}"
git push origin master
git push origin master --tags

echo "================="
echo "Publishig via NPM"
echo "================="
# Publish
npm publish