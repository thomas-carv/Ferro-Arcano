import re
import json

def parse_server_response():
    with open("chatgpt_share.html", "r", encoding="utf-8") as f:
        content = f.read()

    # Look for serverResponse inside client-bootstrap JSON or other script tags
    # Usually it's in a script tag as part of JSON
    # Let's find all script tags
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
    
    for i, script in enumerate(scripts):
        if '"serverResponse"' in script:
            print(f"Script {i} contains serverResponse, length: {len(script)}")
            # Let's try to extract the JSON.
            # Usually the script is window.__reactRouterContext = { ... } or similar
            # Let's try to find everything from the first { to the last }
            start = script.find('{')
            end = script.rfind('}')
            if start != -1 and end != -1:
                js_content = script[start:end+1]
                # Let's save this js_content to analyze
                with open("js_context.json", "w", encoding="utf-8") as out:
                    out.write(js_content)
                print("Wrote js_context.json")

if __name__ == "__main__":
    parse_server_response()
