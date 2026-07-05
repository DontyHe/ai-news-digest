#!/bin/bash

# GitHub Update Script for Tech Research Tracker
# This script commits and pushes the daily research tracker results to GitHub

# Configuration
REPO_DIR="/home/Hebin/project/paper_digest"
GIT_REPO="https://github.com/yourusername/tech-research-tracker.git"  # Update with actual repo
BRANCH="main"

# Get current date for filename
TODAY=$(date +%Y-%m-%d)
OUTPUT_FILE="tech_company_${TODAY}.md"

cd "$REPO_DIR"

# Check if git repository is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin "$GIT_REPO"
    git add .
    git commit -m "Initial commit: Tech research tracker setup"
    git branch -M main
    git push -u origin main
fi

# Add and commit the latest research file
if [ -f "$OUTPUT_FILE" ]; then
    echo "Committing daily research file: $OUTPUT_FILE"
    git add "$OUTPUT_FILE"
    git commit -m "Daily tech research tracker: $(date +%Y-%m-%d)"
    
    # Push to GitHub
    echo "Pushing to GitHub..."
    git push origin "$BRANCH"
    
    echo "Successfully updated GitHub repository with $OUTPUT_FILE"
else
    echo "Error: Research file $OUTPUT_FILE not found"
    exit 1
fi

# Create and push summary (optional)
SUMMARY_FILE="research_summary_$(date +%Y-%m).md"
cat > "$SUMMARY_FILE" << EOF
# Tech Research Summary - $(date +%Y-%m)

## Recent Activity
- Daily research tracking continues
- System experiencing connectivity issues
- Framework established and documented

## Files Updated
- tech_company_${TODAY}.md

---
*Auto-generated summary*
EOF

git add "$SUMMARY_FILE"
git commit -m "Monthly research summary: $(date +%Y-%m)"
git push origin "$BRANCH"

echo "GitHub update completed successfully"