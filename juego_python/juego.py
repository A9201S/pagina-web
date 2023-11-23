import pygame, sys
from pygame. locals import *
pygame.init()

DISPLAYSURF = pygame.display. set_mode((400,300))

pygame. display.set_caption("hello world!")

while True: # min game loop
    for event in pygame. event.get():
        if event.type == quit:
           pygame.type 
           sys.exit()
    pygame.display.update()