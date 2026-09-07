---

title: "Volatility Surface & Smile Modeling (SVI + SABR + Heston)"
description: "An end-to-end pipeline that transforms raw, noisy option chain data into a smooth, arbitrage-free 3D volatility surface and calibrates a dynamic stochastic volatility model."
tech: ["Python", "NumPy", "SciPy", "Pandas"]
github: "[https://github.com/yourusername/volatility-surface-modeling]([https://www.google.com/search?q=https://github.com/yourusername/volatility-surface-modeling](https://github.com/amrit1610-fin/Volatility-Surface-Smile-Modeling))"
live: ""
date: "2026-09-07"

### Methodology

This engine filters raw market data to construct an idealized, arbitrage-free volatility surface, which is then used to calibrate a heavy stochastic volatility model. This two-step architecture mirrors institutional trading desks, providing consistent markings for vanilla option books and dynamic hedge ratios for complex exotics.

Uses 3 major quantitative finance models and methodologies:

**Stochastic Volatility Inspired (SVI) Parametrization** - Raw market options data is often too sparse and noisy to feed directly into a heavy stochastic calibrator. The SVI model acts as the static base layer, fitting a smooth, arbitrage-free curve to Out-Of-The-Money (OTM) options for each expiration slice. It mathematically enforces the absence of butterfly arbitrage while perfectly capturing the market smile.

**SABR Volatility Model** - Implemented alongside SVI as an alternative parametric fitter. The SABR (Stochastic Alpha, Beta, Rho) model captures the volatility smile and skew by describing the actual stochastic dynamics of the underlying forward rate, utilizing Hagan's closed-form implied volatility approximation.

**Heston Stochastic Volatility Model** - While parametric surfaces (like SVI) are great for static pricing, they cannot dynamically price path-dependent exotics or generate forward-looking hedge ratios. The Heston model resolves this by modeling volatility as a mean-reverting stochastic process. Using the Fourier-Cosine (COS) method, the Heston model is calibrated globally to the idealized SVI surface, acting as a structural regularizer that refuses to overfit market noise.

**Finite Difference Greeks Engine** - Because the Heston model relies on semi-analytical integration rather than closed-form algebra, higher-order risk sensitivities cannot be cleanly derived via calculus. A finite difference engine bumps the underlying spot price and initial variance to extract the Vanna and Volga risk ladders.

### Key Features:

* **Advanced Data Filtering:** Constructs an OTM-only surface using Put-Call parity and applies strict liquidity/moneyness bounds to eliminate extreme market-maker artifacts and data starvation.
* **Arbitrage Detection:** Automatically scans for and corrects Butterfly (strike-space) and Calendar (time-space) arbitrage violations in the raw data.
* **Global Optimization:** Utilizes Differential Evolution for SVI fitting to escape local minima traps, bounded strictly by theoretical no-arbitrage constraints.
* **Monotonic Surface Interpolation:** Uses `PchipInterpolator` across tenors to prevent spline overshoot (Runge's phenomenon) and generate a mathematically sound 3D surface.
* **Higher-Order Risk Ladders:** Generates dynamic 1st and 2nd order sensitivities (Delta, Vega, Vanna, Volga) to measure how the portfolio's risk profile shifts as spot and volatility move.
