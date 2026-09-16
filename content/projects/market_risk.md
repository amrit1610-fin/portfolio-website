---
title: "Portfolio Market Risk Engine"
description: "A Basel-compliant market risk engine that calculates Value at Risk (VaR) and Expected Shortfall (ES) for multi-asset portfolios."
tech: ["Python", "NumPy", "Pandas", "SciPy", "Arch"]
github: "https://github.com/amrit1610-fin/Market-Risk-Engine"
live: ""
date: "2026-09-16"
---

### Methodology

This engine evaluates the market risk of a multi-asset equity portfolio based on Basel Committee regulatory standards. It utilizes an object-oriented architecture to benchmark portfolios across various statistical models, including Historical Simulation, Parametric (Ledoit-Wolf shrinkage), Monte Carlo, and Extreme Value Theory (POT). It integrates GARCH(1,1) volatility filtering to dynamically adjust to market regimes and accurately price fat-tailed, conditional tail risks.

### Key Features:
*   **Regulatory Backtesting:** Implements the Basel Traffic Light system, Kupiec POF, and Christoffersen independence tests over a rolling 250-day window to validate model accuracy and penalize breach clustering.
*   **Stressed VaR (SVaR):** Executes strict data-override stress tests, re-valuing current portfolio weights against the 2008 Lehman Brothers market crash data.
*   **Dynamic EVT Tail Optimization:** Eliminates hardcoded thresholds by utilizing a Kolmogorov-Smirnov (KS) Goodness-of-Fit grid search with a 21-day caching system to dynamically identify the optimal Peak Over Threshold (POT) cutoff.
*   **Fat-Tailed Monte Carlo:** Upgrades standard Geometric Brownian Motion by replacing normal Gaussian variables with Multivariate Student-t shocks (5 DoF), applied over a Cholesky-decomposed correlation matrix to simulate realistic black swan scenarios.
*   **Desk-Level Granularity:** Disaggregates T+1 risk forecasts by specific trading desks (e.g., Tech vs. Macro) to mathematically quantify cross-asset diversification benefits across the total book.
