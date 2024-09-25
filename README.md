# Visualizing Perlin Noise in 2D Pixel Space

## 0. Table of Contents
- [Visualizing Perlin Noise in 2D Pixel Space](#visualizing-perlin-noise-in-2d-pixel-space)
  - [0. Table of Contents](#0-table-of-contents)
  - [1. Introduction](#1-introduction)
    - [1.1. `p5.js`](#11-p5js)
    - [1.2. Random vs. Noise](#12-random-vs-noise)
    - [1.3. Perlin Noise](#13-perlin-noise)
  - [2. References](#2-references)

## 1. Introduction

This repository is primarily intended to help me remember how to program an algorithmic system and, hopefully, to pique people's interest in the beauty of creative coding and generative art. All of the simulations and graphics I create have one thing in common. Noise. Perlin noise to be precise. Every line of code uncovers the inherent beauty of pseudo-random numbers, and I can only hope to do it justice by visualizing Perlin noise in 2D space.

### 1.1. `p5.js`

I've developed this project using a JavaScript library named `p5.js`. Renowned for it's open-source and versatile approach to developing interactive graphics, `p5.js` is perfect for visualizing algorithmic systems. Over the years, this library has fostered an amazing and supportive community of creative coding enthusiasts that I'm proud to be a part of. If this is your first time hearing about `p5.js`, I highly urge you to [check out what it has to offer](https://p5js.org/)^1^. 

### 1.2. Random vs. Noise

When we speak of algorithmic systems, there is an important distinction to make between noise and randomness. Randomness usually refers to the generation of unpredictable values that do not have a discernible pattern to them. This generation typically leads to an independent value every time. If you have ever used a random number generator, you will know that sometimes you can have sharp changes in the values generated; it's not really smooth. That's where noise comes in, when you want a smoother and more gradual, varying pseudo-random value that does not have as sudden a change as randomness. This difference is key when we try to simulate organic or natural systems and it can lead to really cool results! 

### 1.3. Perlin Noise

Perlin Noise, named after Ken Perlin, is one such pseudo-random function that produces values that follow a gradient. It was developed in 1983 to create natural-looking textures and animations and gained fame when used in TRON (1982) for generating organic, flowing visuals. 

> My ability to fawn over anything *Cyberpunk* never ceases to amaze me so if you were wondering what the inspiration for this project was, there you have it.

This gradient noise function is most commonly applied to 2D and 3D graphics but can be extended to any number of dimensions. For the sake of this simulation, let's leave it at the second dimension. 

## 2. References
1. [The Official p5.js Website](https://p5js.org/)
2. 