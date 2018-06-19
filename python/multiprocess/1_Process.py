from multiprocessing import Process
import os

def f(x):
  print("{0} - process id : {1} - parent process id : {2})".format(x, os.getpid(), os.getppid()));

def main():
  for i in range(3):
    p = Process(target=f, args=(i,))
    p.start()
    print(p.is_alive())
    p.join()
    print(p.is_alive())

if __name__ == "__main__":
  main()
