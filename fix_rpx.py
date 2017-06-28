import os
import time
from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer


def is_ignore(src):
    if src.endswith('.wpy'):
        return False
    else:
        return True


def getDirAllFiles(path):
    paths = []
    for root, dirs, files in os.walk(path):
        for name in files:
            file_path = os.path.join(root, name)
            file_path = file_path[len(path):]
            if is_ignore(file_path):
                continue
            paths.append(file_path.decode('utf8'))
    return paths


def fix_rpx(src):
    with open(src, 'r') as f:
        txt = f.read()
        if txt.count(' rpx') > 0:
            txt = txt.replace(' rpx', 'rpx')
            with open(src, 'w') as ff:
                ff.write(txt)
                ff.flush()
                print 'fix ok'


class FileChangeEventHandlerSok(FileSystemEventHandler):
    def on_any_event(self, event):
        if not event.is_directory:
            if event.event_type != 'deleted' and event.src_path.endswith('.wpy'):
                print event.event_type
                src = event.src_path
                print src
                fix_rpx(src)


if __name__ == '__main__':
    event_handler = FileChangeEventHandlerSok()
    local_watch_path = os.path.abspath('.')
    print local_watch_path
    inits = getDirAllFiles(local_watch_path)
    for path in inits:
        fix_rpx(local_watch_path+path)

    observer = Observer()
    observer.schedule(event_handler, local_watch_path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(5000)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
