---
title: "Option Pricing Engine"
description: "A market-neutral research stack for pricing European, American and Exotic options."
tech: ["Python", "NumPy", "Scipy", "OOPs"]
github: "https://github.com/amrit1610-fin/Option-Pricing-Engine"
live: "https://multi-option-pricing-engine.streamlit.app/"
date: "2026-08-10"
---

### Methodology

This engine prices various types of options such as European and American. The engine works based on the user input through the dashboard and adjusts the mathematical engine (model) accordingly.

Uses 3 major option pricing models:

**Black-Scholes-Merton Model** - This model acts as the benchmark model in the standard option pricing world, since it gives closed-form analytical solutions.

**Binomial Tree** - One major issue with BSM is that it does not accounts for trading of the option contract before the time to expiry (T). To resolve this, we use Tree methodologies (Binomial / Trinomial) to account for intermediate price of the option through the lifespan. This is done so that the value of the contract is known at any point of time to determine when it is more profitable to exercise it.

**Monte Carlo Simulations** - One major limitation of analytical models (like BSM) and lattice models (like Binomial Trees) is their inability to efficiently price complex, path-dependent options where the payoff depends on the entire history of the asset's price, not just the terminal value. Monte Carlo simulations resolve this by generating thousands of random, simulated price paths for the underlying asset, allowing for the valuation of highly complex or exotic derivatives.


### Key Features:
* Benchmarking of analytical closed-form solutions for model validation.
* Replaces proprietary, black-box vendor IV estimates by calibrating directly against live option mid-market premiums.
* Modeling to account for time dependency, to promote early-exercise.
* Calculation of different types of options based on user input.
* Universal bump-and-revalue engine calculating first and second-order sensitivities across discrete and stochastic models.
