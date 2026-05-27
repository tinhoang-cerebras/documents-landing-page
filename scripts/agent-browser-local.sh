#!/bin/sh

set -eu

export HOME="${AGENT_BROWSER_HOME_OVERRIDE:-/private/tmp/agent-browser-home}"

mkdir -p "$HOME"

exec npx agent-browser "$@"
