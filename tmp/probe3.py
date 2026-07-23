import urllib.request
import concurrent.futures
import sys

base_url = "https://gcloud-aistudio-build-dev-user-uploads-188195725708.storage.googleapis.com/a931a057-027c-4e2c-a35c-429efd4710fb/"

def check_url(url):
    try:
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req, timeout=1.0) as resp:
            if resp.status == 200:
                print("FOUND IT:", url, flush=True)
                return url
    except Exception:
        pass
    return None

def main():
    # Sweep all seconds 0 to 59 in 06:54
    seconds = list(range(0, 60))
    urls = []
    for s in seconds:
        for ms in range(0, 1000):
            url = f"{base_url}2026-07-21T06%3A54%3A{s:02d}.{ms:03d}Z_input_file_0.png"
            urls.append(url)
            
    print(f"Checking {len(urls)} URLs for 06:54...", flush=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=200) as executor:
        results = list(executor.map(check_url, urls))
        for r in results:
            if r:
                sys.exit(0)
    print("Not found.")

if __name__ == "__main__":
    main()
