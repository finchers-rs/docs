#!/bin/bash

set -eu

TAG=${TAG:-v0.12.0-alpha.6}
TOOLCHAIN="${TOOLCHAIN:-stable}"
PROJECT="${PROJECT:-finchers}"
REPO_URL="${REPO_URL:-"https://github.com/finchers-rs/${PROJECT}.git"}"

BASE_DIR="$(cd $(dirname ${BASH_SOURCE}); pwd)"
SOURCE_DIR="${BASE_DIR}/source/${PROJECT}"
TARGET_DIR="${BASE_DIR}/docs/${PROJECT}/${TAG}"

(set -x; rustup toolchain install "${TOOLCHAIN}")

if [[ -d "${SOURCE_DIR}" ]]; then
    cd "${SOURCE_DIR}"
    (set -x; git fetch origin "$TAG:$TAG" --depth 1)
    (set -x; git checkout "refs/tags/${TAG}")
    cd "$BASE_DIR"
else
    (set -x; git clone "${REPO_URL}" "${SOURCE_DIR}" --branch "${TAG}" --depth 1)
fi

cd "${SOURCE_DIR}"

rm -rf target/doc
(set -x; rustup run "$TOOLCHAIN" cargo update)
if [[ -n ${FEATURES:-} ]]; then
    (set -x; rustup run "$TOOLCHAIN" cargo doc --features "${FEATURES}" --no-deps)
else
    (set -x; rustup run "$TOOLCHAIN" cargo doc --no-deps)
fi

echo > target/doc/src/build-info.txt "timestamp: $(date --rfc-2822)"
echo >>target/doc/src/build-info.txt "toolchain: ${TOOLCHAIN}"
if [[ -n ${FEATURES:-} ]]; then
echo >>target/doc/src/build-info.txt "features: ${FEATURES}"
fi
echo >>target/doc/src/build-info.txt "rustc-version: $(rustup run $TOOLCHAIN rustc --version)"
echo >>target/doc/src/build-info.txt "cargo-version: $(rustup run $TOOLCHAIN cargo --version)"

echo > target/doc/index.html \
    "<meta http-equiv=\"refresh\" content=\"0;URL=${PROJECT//-/_}/index.html\" />"

cp -f Cargo.lock target/doc/src/Cargo.lock

cd "$BASE_DIR"

echo "copying..."
mkdir -p "$TARGET_DIR"
(set -x; rsync -av --delete --exclude '.lock' "${SOURCE_DIR}/target/doc/" "${TARGET_DIR}")
