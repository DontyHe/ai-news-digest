# Daily Tech Company Research Tracker

## Overview
This system automatically tracks and collects research publications and updates from leading technology companies. Currently implemented for 8 major tech companies with web scraping capabilities.

## Companies Tracked

1. **Google DeepMind** - AI and machine learning research
2. **OpenAI** - Artificial intelligence and AGI research
3. **Meta FAIR** - Fundamental AI research
4. **Anthropic** - AI safety and research
5. **NVIDIA** - GPU and computing research
6. **Tesla** - AI and autonomous vehicle research
7. **Apple** - Hardware and software research
8. **Microsoft Research** - Computer science and AI research

## Usage

### Manual Execution
```bash
./tech_research_tracker.sh [date]
```

Example:
```bash
# Run for today
./tech_research_tracker.sh

# Run for specific date
./tech_research_tracker.sh 2026-06-30
```

### Automated Scheduling
Add to crontab for daily execution:
```bash
# Run daily at 8:30 AM
30 8 * * * /home/Hebin/project/paper_digest/tech_research_tracker.sh
```

## Output Format
Results are saved as `tech_company_YYYY-MM-DD.md` with the following structure:
- Header with date and timestamp
- Company status overview table
- Individual company sections with research content
- Technical notes and troubleshooting information

## Web Fetching Methods (in order of priority)

### 1. defuddle.md
```
https://defuddle.md/{original_url}
```
- Highest success rate
- Works with most websites
- Fast processing

### 2. r.jina.ai
```
https://r.jina.ai/{original_url}
```
- Fallback when defuddle fails
- May have rate limits
- Slower processing

### 3. markdown.new (for Cloudflare sites)
```
https://markdown.new/{original_url}
```
- Specifically for Cloudflare-protected sites
- Limited compatibility

## Troubleshooting

### Common Issues

1. **Network Timeouts**
   - Check internet connectivity
   - Try alternative URLs
   - Consider retry logic

2. **403/404 Errors**
   - Website may have changed URLs
   - Check if company has updated their research page
   - Update COMPANIES array in script

3. **Empty Results**
   - Website may require JavaScript rendering
   - Consider using Scrapling with Playwright engine
   - Manual verification may be needed

### Manual Testing
Test individual URLs:
```bash
curl -s "https://defuddle.md/https://deepmind.google/research/publications"
curl -s "https://r.jina.ai/https://openai.com/research"
```

## File Structure
```
paper_digest/
├── tech_company_YYYY-MM-DD.md    # Daily research output
├── tech_research_tracker.sh       # Main script
├── README_research_tracker.md      # This documentation
└── archive/                       # Historical data (optional)
```

## Integration

### GitHub Updates
The system can be integrated with GitHub for:
- Automatic commits
- Historical tracking
- Web-based viewing

### Website Integration
Convert markdown to HTML for web publishing:
```bash
# Convert markdown to HTML
pandoc -s tech_company_2026-06-30.md -o tech_company_2026-06-30.html
```

## Current Status
**Last Updated**: 2026-06-30
**Status**: System implemented but experiencing network connectivity issues
**Next Steps**: Resolve network configuration and resume automated tracking

## Contributing
To add new companies:
1. Add entry to COMPANIES array
2. Test URL accessibility
3. Verify output format
4. Update documentation