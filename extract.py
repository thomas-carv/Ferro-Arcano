import re
import json
import sys

def extract_strings():
    with open("chatgpt_share.html", "r", encoding="utf-8") as f:
        content = f.read()
    
    print("HTML Content size:", len(content))
    
    # Let's find all occurrences of enqueue blocks
    # window.__reactRouterContext.streamController.enqueue("...")
    pattern = r'streamController\.enqueue\("(.*?)"\);'
    matches = re.findall(pattern, content)
    
    full_text = ""
    for idx, match in enumerate(matches):
        # The match is JS-escaped string inside a string.
        # Let's decode it.
        try:
            # We can use codecs or json.loads to unescape
            decoded = json.loads('"' + match + '"')
            full_text += decoded + "\n"
        except Exception as e:
            # Try a simpler replacement of escape characters
            decoded = match.replace('\\"', '"').replace('\\\\', '\\').replace('\\n', '\n')
            full_text += decoded + "\n"
            
    # If no matches via enqueue, let's search for script tags with json
    if not full_text:
        # Search for any long JSON blocks
        json_pattern = r'<script[^>]*>(.*?)</script>'
        for script in re.findall(json_pattern, content, re.DOTALL):
            if "__reactRouterContext" in script or "serverResponse" in script:
                full_text += script + "\n"
                
    # Let's write the raw matches to help us see what is inside
    with open("raw_extracted.txt", "w", encoding="utf-8") as out:
        out.write(full_text)
        
    print("Extracted raw text size:", len(full_text))

if __name__ == "__main__":
    extract_strings()
