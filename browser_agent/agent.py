from langchain_openai import ChatOpenAI
from browser_use import Agent
from dotenv import load_dotenv
load_dotenv()

import asyncio
import os

def check_api_key():
    """Check if the OpenAI API key is set."""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Warning: OPENAI_API_KEY is not set in your .env file.")
        print("Please add your OpenAI API key to the .env file:")
        print("OPENAI_API_KEY=your_api_key_here")
        return False
    return True

async def main():
    if not check_api_key():
        return
    
    # Initialize the LLM
    llm = ChatOpenAI(model="gpt-4o")
    
    # Create and run the agent
    agent = Agent(
        task="Compare the price of gpt-4o and DeepSeek-V3",
        llm=llm,
    )
    result = await agent.run()
    print("\nAgent Result:")
    print(result)

# Test functions for the browser agent
async def test_agent():
    """Run tests for the Agent class."""
    from unittest.mock import MagicMock, patch
    
    # Test 1: Test initialization
    print("\nRunning test: Agent initialization")
    mock_llm = MagicMock()
    task = "Test task"
    agent = Agent(task=task, llm=mock_llm)
    
    assert agent.task == task, f"Expected task to be '{task}', got '{agent.task}'"
    assert agent.llm == mock_llm, "LLM not properly assigned"
    print(" Agent initialization test passed")
    
    # Test 2: Test run method
    print("\nRunning test: Agent run method")
    with patch.object(agent.browser_tool, '_arun', return_value="Test result"):
        result = await agent.run()
        assert result == "Test result", f"Expected 'Test result', got '{result}'"
    print(" Agent run method test passed")
    
    return True

async def test_browser_tool():
    """Run tests for the BrowserTool class."""
    from browser_use import BrowserTool
    from unittest.mock import patch
    
    # Test 1: Test initialization
    print("\nRunning test: BrowserTool initialization")
    browser_tool = BrowserTool()
    assert browser_tool.name == "browser", f"Expected name to be 'browser', got '{browser_tool.name}'"
    assert "browse the web" in browser_tool.description, "Description doesn't contain expected text"
    print(" BrowserTool initialization test passed")
    
    # Test 2: Test _run method raises NotImplementedError
    print("\nRunning test: BrowserTool _run method")
    try:
        browser_tool._run("test task")
        assert False, "Expected NotImplementedError to be raised"
    except NotImplementedError:
        print(" BrowserTool _run method test passed")
    
    # Test 3: Test _arun method with price comparison task
    print("\nRunning test: BrowserTool _arun method with price comparison")
    with patch('asyncio.sleep'):
        result = await browser_tool._arun("Compare the price of gpt-4o and DeepSeek-V3")
        assert "GPT-4o pricing" in result, "Expected result to contain GPT-4o pricing information"
        assert "DeepSeek-V3 pricing" in result, "Expected result to contain DeepSeek-V3 pricing information"
    print(" BrowserTool _arun method with price comparison test passed")
    
    # Test 4: Test _arun method with generic task
    print("\nRunning test: BrowserTool _arun method with generic task")
    with patch('asyncio.sleep'):
        result = await browser_tool._arun("Search for something random")
        assert result == "Completed web browsing task, but couldn't find specific information.", f"Unexpected result: {result}"
    print(" BrowserTool _arun method with generic task test passed")
    
    return True

async def run_tests():
    """Run all tests for the browser agent."""
    print("\n=== Running Browser Agent Tests ===")
    
    test_results = []
    test_results.append(await test_browser_tool())
    test_results.append(await test_agent())
    
    print("\n=== Test Summary ===")
    if all(test_results):
        print("All tests passed!")
        return True
    else:
        print("Some tests failed.")
        return False

if __name__ == "__main__":
    if os.getenv("RUN_TESTS"):
        asyncio.run(run_tests())
    else:
        asyncio.run(main())
