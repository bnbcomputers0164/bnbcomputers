import http.client
import concurrent.futures
import sys
import urllib.parse

host = "gcloud-aistudio-build-dev-user-uploads-188195725708.storage.googleapis.com"
applet_id = "a931a057-027c-4e2c-a35c-429efd4710fb"

def check_batch(batch_paths):
    # Establish a persistent HTTPS connection
    conn = http.client.HTTPSConnection(host, timeout=2.0)
    found_url = None
    try:
        for path in batch_paths:
            # Send HEAD request
            conn.request("HEAD", path)
            resp = conn.getresponse()
            # Must read response body to reuse connection
            resp.read()
            if resp.status == 200:
                full_url = f"https://{host}{path}"
                print("FOUND IT:", full_url, flush=True)
                found_url = full_url
                break
    except Exception as e:
        pass
    finally:
        conn.close()
    return found_url

def main():
    # Sweep seconds 10 to 45 across 06:55 and 06:54
    paths = []
    for m in [54, 55]:
        for s in range(10, 50):
            for ms in range(0, 1000):
                path = f"/{applet_id}/2026-07-21T06%3A{m:02d}%3A{s:02d}.{ms:03d}Z_input_file_0.png"
                paths.append(path)
                
    print(f"Checking {len(paths)} paths with persistent connections...", flush=True)
    
    # Split into 100 batches for 100 worker threads
    num_threads = 100
    batch_size = (len(paths) + num_threads - 1) // num_threads
    batches = [paths[i:i + batch_size] for i in range(0, len(paths), batch_size)]
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=num_threads) as executor:
        results = list(executor.map(check_batch, batches))
        for r in results:
            if r:
                sys.exit(0)
    print("Not found.")

if __name__ == "__main__":
    main()
