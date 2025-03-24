# Browser Agent

This project implements a simple agent that can browse the web to complete tasks using LLMs.

## Setup

1. Install the required dependencies:

```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the project root and add your API keys:

```
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here  # Optional
```

## Usage

Run the agent with:

```bash
python agent.py
```

This will execute the default task of comparing prices between GPT-4o and DeepSeek-V3.

## Customization

To modify the agent's task, edit the `agent.py` file and change the `task` parameter when initializing the `Agent` class.

## Implementation Details

- `browser_use.py`: Contains the `Agent` class and `BrowserTool` implementation
- `agent.py`: Main script to run the agent

Note: The current implementation is simplified and uses mock data. In a production environment, you would integrate with a browser automation library like Playwright or Selenium for actual web browsing capabilities.
