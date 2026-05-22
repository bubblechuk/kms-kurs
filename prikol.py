import http.server
import socketserver
import os

PORT = 80
HANDLER_ADDRESS = "127.0.0.1" 

class UnityWebGLHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.endswith('.br'):
            self.send_header('Content-Encoding', 'br')
            
        if self.path.endswith('.js.br'):
            self.send_header('Content-Type', 'application/javascript')
        elif self.path.endswith('.wasm.br'):
            self.send_header('Content-Type', 'application/octet-stream')
        elif self.path.endswith('.data.br'):
            self.send_header('Content-Type', 'application/octet-stream')
            
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer((HANDLER_ADDRESS, PORT), UnityWebGLHandler) as httpd:
    print(f"Сервер запущен на http://{HANDLER_ADDRESS}:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nСервер остановлен.")
